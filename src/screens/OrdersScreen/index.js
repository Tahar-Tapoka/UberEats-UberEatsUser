import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-paper";
import { OrdersItem } from "../../components/OrderListItem";
import { useOrderContext } from "../../contexts/OrderContext";

export const OrdersScreen = ({ navigation }) => {
  const { orders } = useOrderContext();
  return (
    <>
      <Text style={styles.title}>Your Orders</Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Order", { order: item })}
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
