import { DataStore } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";
import { Order, OrderDish } from "../models";
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
    //clea cart
    await DataStore.delete(cart);
    setOrders([...orders, newOrder]);
  };

  return (
    <OrderContext.Provider value={{ createOrder, orders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
