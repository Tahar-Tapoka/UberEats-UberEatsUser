import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";

// import restaurants from "../../../assets/restaurants.json";
import { RestaurantItem } from "../../components/RestaurantItem";
import { Restaurant } from "../../models";

export const HomeScreen = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants);
  }, []);

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
