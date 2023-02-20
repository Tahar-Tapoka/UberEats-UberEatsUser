import { FlatList, TouchableOpacity } from "react-native";

import restaurants from "../../../assets/restaurants.json";
import { RestaurantItem } from "../../components/RestaurantItem";

export const HomeScreen = ({ navigation }) => {
  return (
    <FlatList
      data={restaurants}
      style={{ padding: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Restaurant", { restaurant: item })
          }
        >
          <RestaurantItem restaurant={item} />
        </TouchableOpacity>
      )}
    />
  );
};
