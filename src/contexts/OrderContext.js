import { DataStore } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";
import { Dish, Order, OrderDish } from "../models";
import { useAuthContext } from "./AuthContext";
import { useCartContext } from "./CartContext";

const OrderContext = createContext({});

export const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const { dbUser } = useAuthContext();
  const { restaurant, totalPrice, cartDishes, cart } = useCartContext();

  useEffect(() => {
    DataStore.query(Order, (o) => o.userID.eq(dbUser.id)).then(setOrders);
  }, []);
  const createOrder = async () => {
    //create order
    const newOrder = await DataStore.save(
      new Order({
        userID: dbUser.id,
        total: 55,
        Restaurant: restaurant,
        status: "NEW",
      })
    );
    //add cart dishes to it
    await Promise.all(
      cartDishes.map((cd) =>
        DataStore.save(
          new OrderDish({
            quantity: cd.quantity,
            orderID: newOrder.id,
            Dish: cd.Dish._z,
          })
        )
      )
    );
    //clear cart
    await DataStore.delete(cart);
    setOrders([...orders, newOrder]);
  };

  const getOrder = async (id) => {
    const order = await DataStore.query(Order, id);
    const orderDishes = await DataStore.query(OrderDish, (od) =>
      od.orderID.eq(id)
    );
    return { ...order, dishes: orderDishes };
  };
  return (
    <OrderContext.Provider value={{ createOrder, orders, getOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
