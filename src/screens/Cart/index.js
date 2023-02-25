import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button, Divider, IconButton } from "react-native-paper";
import { CartDishItem } from "../../components/CartDishItem";
import { useCartContext } from "../../contexts/CartContext";
import { useOrderContext } from "../../contexts/OrderContext";

export const Cart = ({ navigation, route }) => {
  const { cartDishes, restaurant, totalPrice } = useCartContext();
  const { createOrder } = useOrderContext();

  return (
    <View style={styles.container}>
      <IconButton
        icon="arrow-left"
        size={30}
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={{ ...styles.title, fontSize: 16 }}>Your Items</Text>
      <FlatList
        data={cartDishes}
        renderItem={({ item }) => <CartDishItem cartDish={item} />}
      />
      <Divider />
      <View style={styles.row}>
        <Text style={styles.subtitle}>Subtotal</Text>
        <Text style={styles.price}>{9.99 * 2} $</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>Total</Text>
        <Text style={styles.price}>{totalPrice} $</Text>
      </View>
      <Button
        style={{ padding: 15, marginTop: "auto" }}
        icon="cash-check"
        mode="contained"
        onPress={async () => {
          await createOrder();
          navigation.navigate("Orders");
        }}
        buttonColor="black"
      >
        Create Order &#8226; {totalPrice} $
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  title: {
    marginVertical: 5,
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    marginVertical: 5,
    letterSpacing: 0.7,
  },
  price: {
    color: "grey",
    marginVertical: 10,
    marginLeft: "auto",
  },
  row: {
    padding: 5,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    marginVertical: 0,
    marginLeft: 0,
    padding: 0,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  summ: {
    color: "white",
    marginLeft: "auto",
    fontSize: 18,
    fontWeight: "bold",
  },
  touchButton: {
    flexDirection: "row",
    backgroundColor: "black",
    padding: 20,
    justifyContent: "center",
    marginTop: "auto",
  },
});
