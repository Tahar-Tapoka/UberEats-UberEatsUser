import { FlatList, StyleSheet, View } from "react-native";
import { CartDishItem } from "../../components/CartDishItem";
import { OrderHeader } from "../OrdersScreen/OrderHeader";
import restaurants from "../../../assets/restaurants.json";
import { IconButton } from "react-native-paper";

export const OrderDetailsScreen = ({ route, navigation }) => {
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
