import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar, Divider } from "react-native-paper";

export const Header = ({ restaurant }) => {
  return (
    <>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={{ padding: 10 }}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
          <Avatar.Icon
            size={24}
            icon="star"
            style={{ backgroundColor: "gold" }}
          />
        </View>
        <Divider />
        <Text style={styles.subtitle}>Menu</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "20%",
    width: "100%",
  },
  rating: {
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
    marginVertical: 10,
    letterSpacing: 0.7,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
