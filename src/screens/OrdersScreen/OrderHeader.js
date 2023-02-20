import { Image, StyleSheet, Text, View } from "react-native";

export const OrderHeader = ({ order }) => {
  return (
    <>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View style={{ padding: 10 }}>
        <Text style={styles.name}>{order.User.name}</Text>
        <Text style={styles.subtitle}>
          {order.status} &#8226; {order.createdAt}
        </Text>
        <Text style={styles.name}>Your Order</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "30%",
    width: "100%",
  },
  row: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    marginVertical: 5,
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    color: "grey",
    letterSpacing: 0.7,
  },
});
