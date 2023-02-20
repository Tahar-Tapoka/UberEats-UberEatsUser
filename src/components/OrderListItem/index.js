import { Image, StyleSheet, Text, View } from "react-native";

export const OrdersItem = ({ order }) => {
  return (
    <>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: order.Restaurant.image }} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.name}>{order.User.name}</Text>
          <Text style={styles.subtitle}>Items: 99.99$</Text>
          <Text style={styles.subtitle}>
            {order.createdAt} &#8226; {order.status}
          </Text>
        </View>
      </View>
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
