import { StyleSheet, Text, View } from "react-native";

export const CartDishItem = ({ cartDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>{cartDish.quantity}</Text>
      </View>
      <Text style={{ ...styles.title, fontSize: 18 }}>
        {" "}
        &#8226; {cartDish.Dish._z?.name}
      </Text>
      <Text style={styles.price}>
        {(cartDish.Dish._z?.price * cartDish.quantity).toFixed(2)} $
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityContainer: {
    backgroundColor: "gray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  title: {
    marginVertical: 5,
    fontSize: 24,
    fontWeight: "bold",
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
});
