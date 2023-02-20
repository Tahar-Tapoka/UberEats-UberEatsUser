import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import { MenuItem } from "../../components/DishListItem";
import { Header } from "./Header";

export const RestaurantDetails = ({ route, navigation }) => {
  const { restaurant } = route.params;
  return (
    <>
      <Header restaurant={restaurant} />
      <FlatList
        // ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
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
