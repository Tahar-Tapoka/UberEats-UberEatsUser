import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar, Divider, IconButton, MD3Colors } from "react-native-paper";

export const Header = ({ restaurant }) => {
  return (
    <>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <IconButton
        icon="arrow-left-bold-circle"
        iconColor={MD3Colors.primary10}
        size={40}
        onPress={() => console.log("Back")}
        style={styles.backIcon}
      />
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
    height: "30%",
    width: "100%",
  },
  backIcon: {
    position: "absolute",
    marginTop: 10,
    marginLeft: 10,
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
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
