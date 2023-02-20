import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-paper";
import orders from "../../../assets/orders.json";
import { OrdersItem } from "../../components/OrderListItem";

export const OrdersScreen = () => {
  return (
    <>
      <Text style={styles.title}>Your Orders</Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => console.log("navigation.Navigate", item.id)}
          >
            <OrdersItem order={item} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={<Divider />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    color: "grey",
    marginVertical: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.5,
    alignSelf: "center",
    marginVertical: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  image: {
    height: 70,
    width: 70,
  },
});
