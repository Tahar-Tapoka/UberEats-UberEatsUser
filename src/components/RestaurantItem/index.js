import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

export const RestaurantItem = ({ restaurant }) => {
  return (
    <Card style={{ marginBottom: 5 }} elevation={5}>
      <Card.Cover source={{ uri: restaurant.image }} />
      <Card.Content>
        <View style={styles.restaurantInfo}>
          <View>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.price}>
              {restaurant.deliveryFee}$ &#8226; {restaurant.minDeliveryTime}-
              {restaurant.maxDeliveryTime}min
            </Text>
          </View>
          <View style={styles.rating}>
            <Text>{restaurant.rating}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  restaurantInfo: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 12,
    color: "gray",
  },
  rating: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    width: 25,
    height: 25,
  },
});
