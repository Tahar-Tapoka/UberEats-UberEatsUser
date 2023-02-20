import { FlatList, View } from "react-native";
import { CartDishItem } from "../../components/CartDishItem";
import { OrderHeader } from "../OrdersScreen/OrderHeader";

export const OrderDetailsScreen = ({ order, restaurant }) => {
  return (
    <View style={{ flex: 1 }}>
      <OrderHeader order={order} />
      <FlatList
        style={{ marginLeft: 10 }}
        data={restaurant.dishes}
        renderItem={({ item }) => <CartDishItem cartDish={item} />}
        keyExtractor={(item) => item.description}
      />
    </View>
  );
};
