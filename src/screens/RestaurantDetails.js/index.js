import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Avatar, Divider, IconButton, MD3Colors } from "react-native-paper";
import { MenuItem } from "../../components/DishListItem";
import { Header } from "./Header";

export const RestaurantDetails = ({ restaurant }) => {
  return (
    <>
      <Header restaurant={restaurant} />
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <MenuItem dishe={item} />}
        keyExtractor={(item) => item.description}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
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
