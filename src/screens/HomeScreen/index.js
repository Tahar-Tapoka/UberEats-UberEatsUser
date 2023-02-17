import { FlatList, TouchableOpacity } from "react-native";

import restaurants from "../../../assets/restaurants.json";
import { RestaurantItem } from "../../components/RestaurantItem";

export const HomeScreen = () => {
  return (
    <FlatList
      data={restaurants}
      style={{ padding: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            console.log(item.name);
            // navigation.navigate('RestaurantDetail', { restaurant: item });
          }}
        >
          <RestaurantItem restaurant={item} />
        </TouchableOpacity>
      )}
    />
  );
};
