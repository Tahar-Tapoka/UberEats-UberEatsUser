import { StatusBar } from "expo-status-bar";
import { StatusBar as RNStatusBar } from "react-native";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import restaurants from "./assets/restaurants.json";

import { HomeScreen } from "./src/screens/HomeScreen";
import { RestaurantDetails } from "./src/screens/RestaurantDetails.js";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <RestaurantDetails restaurant={restaurants[0]} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: RNStatusBar.currentHeight,
  },
});
