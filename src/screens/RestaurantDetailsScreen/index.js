import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { MenuItem } from "../../components/DishListItem";
import { useCartContext } from "../../contexts/CartContext";
import { Dish } from "../../models";
import { Header } from "./Header";

export const RestaurantDetails = ({ route, navigation }) => {
  const [dishes, setDishes] = useState([]);
  const { restaurant } = route.params;
  const { setRestaurant, cart, cartDishes } = useCartContext();

  useEffect(() => {
    if (!restaurant) return;
    setRestaurant(null);
    DataStore.query(Dish, (dish) => dish.restaurantID.eq(restaurant.id)).then(
      setDishes
    );
  }, []);

  useEffect(() => {
    setRestaurant(restaurant);
  }, [restaurant]);
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
      {cart && (
        <Button
          style={{ padding: 15, marginTop: "auto" }}
          icon="cart"
          mode="contained"
          onPress={() => {
            navigation.navigate("Cart");
          }}
          buttonColor="black"
        >
          <Text style={styles.summ}>My Cart ({cartDishes.length})</Text>
        </Button>
      )}
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
