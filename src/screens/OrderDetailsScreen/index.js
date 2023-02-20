import { FlatList, View } from "react-native";
import { CartDishItem } from "../../components/CartDishItem";
import { OrderHeader } from "../OrdersScreen/OrderHeader";
import restaurants from "../../../assets/restaurants.json";

export const OrderDetailsScreen = ({ route }) => {
  const restaurant = restaurants[1];
  const { order } = route.params;
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
