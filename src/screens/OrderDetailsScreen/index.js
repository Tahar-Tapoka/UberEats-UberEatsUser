import { FlatList, StyleSheet, View } from "react-native";
import { CartDishItem } from "../../components/CartDishItem";
import { OrderHeader } from "../OrdersScreen/OrderHeader";
import restaurants from "../../../assets/restaurants.json";
import { ActivityIndicator, IconButton } from "react-native-paper";
import { useOrderContext } from "../../contexts/OrderContext";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export const OrderDetailsScreen = ({ route, navigation }) => {
  // const restaurant = restaurants[1];
  const { orderId } = route.params;
  const [order, setOrder] = useState();
  const [orderDishItem, setOrderDishItem] = useState();
  const { getOrders } = useOrderContext();
  useEffect(() => {
    getOrders(orderId).then(setOrder);
  }, []);
  if (!order) return <ActivityIndicator color="blue" size={40} />;
  return (
    <View style={{ flex: 1 }}>
      <OrderHeader order={order} />
      <FlatList
        style={{ marginLeft: 10 }}
        data={order.dishes}
        renderItem={({ item }) => <CartDishItem cartDish={item} />}
        keyExtractor={(item) => item.description}
      />
      <IconButton
        icon="arrow-left-bold-circle"
        iconColor="white"
        size={40}
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    position: "absolute",
    marginTop: 10,
    marginLeft: 10,
  },
});
