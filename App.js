import { StatusBar } from "expo-status-bar";
import { StatusBar as RNStatusBar } from "react-native";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import restaurants from "./assets/restaurants.json";
import orders from "./assets/orders.json";
import { Cart } from "./src/screens/Cart";
import { DishDetailScreen } from "./src/screens/DishDetailsScreen";

import { HomeScreen } from "./src/screens/HomeScreen";
import { OrderDetailsScreen } from "./src/screens/OrderDetailsScreen";
import { OrdersScreen } from "./src/screens/OrdersScreen";
import { RestaurantDetails } from "./src/screens/RestaurantDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { HomeTabs, RootNavigator } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <HomeScreen /> */}
        {/* <RestaurantDetails restaurant={restaurants[0]} /> */}
        {/* <DishDetailScreen dish={restaurants[0].dishes[0]} /> */}
        {/* <Cart dish={restaurants[0].dishes[0]} restaurant={restaurants[0]} /> */}
        {/* <OrdersScreen /> */}
        {/* <OrderDetailsScreen order={orders[1]} restaurant={restaurants[1]} /> */}
        <HomeTabs />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: RNStatusBar.currentHeight,
  },
});
