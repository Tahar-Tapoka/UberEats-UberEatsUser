import { DataStore } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";
import { Cart, CartDish, Dish, Restaurant } from "../models";
import { useAuthContext } from "./AuthContext";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState();
  const [cartDishes, setCartDishes] = useState([]);
  const { dbUser } = useAuthContext();
  const [cart, setCart] = useState();

  const totalPrice = cartDishes.reduce(
    (sum, cartDish) => sum + cartDish.quantity * cartDish.Dish._z?.price,
    restaurant?.deliveryFee
  );
  console.log(totalPrice);

  useEffect(() => {
    DataStore.query(Cart, (c) =>
      c.and((c) => [c.restaurantID.eq(restaurant?.id), c.userID.eq(dbUser?.id)])
    ).then((carts) => setCart(carts[0]));
  }, [dbUser, restaurant]);

  useEffect(() => {
    if (cart) {
      DataStore.query(CartDish, (bd) => bd.cartID.eq(cart.id)).then(
        setCartDishes
      );
      console.log("cart.dish", cartDishes[2]?.Dish._z?.price);
    }
  }, [cart]);

  const createNewCart = async () => {
    const newCart = DataStore.save(
      new Cart({
        userID: dbUser.id,
        restaurantID: restaurant.id,
      })
    );
    setCart(newCart);
    return newCart;
  };

  const updateCart = () => {
    DataStore.save(
      Cart.copyOf(
        cart,
        (updated) => (updated.restaurantID = restaurant.id),
        (updated.userID = dbUser.id)
      )
    );
  };

  const addDishToCart = async (dish, quantity) => {
    // const rst = await DataStore.query(Restaurant, dish.restaurantID);
    // setRestaurant(rst);
    let theCart = cart || (await createNewCart());

    const newDish = await DataStore.save(
      new CartDish({
        quantity,
        Dish: dish,
        cartID: theCart.id,
      })
    );
    setCartDishes([...cartDishes, newDish]);
  };
  return (
    <CartContext.Provider
      value={{
        addDishToCart,
        setRestaurant,
        cart,
        cartDishes,
        restaurant,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
