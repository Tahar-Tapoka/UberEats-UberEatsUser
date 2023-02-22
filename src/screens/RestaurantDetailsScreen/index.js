import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import { MenuItem } from "../../components/DishListItem";
import { Dish } from "../../models";
import { Header } from "./Header";

export const RestaurantDetails = ({ route, navigation }) => {
  const [dishes, setDishes] = useState([]);
  const { restaurant } = route.params;

  useEffect(() => {
    DataStore.query(Dish, (dish) => dish.restaurantID.eq(restaurant.id)).then(
      setDishes
    );
  }, []);
  return (
    <>
      <Header restaurant={restaurant} />
      <FlatList
        // ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={dishes}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Dish", { dish: item })}
          >
            <MenuItem dishe={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.description}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
      <IconButton
        icon="arrow-left-bold-circle"
        iconColor="white"
        size={40}
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
      />
    </>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    position: "absolute",
    marginTop: 10,
    marginLeft: 10,
  },
});
