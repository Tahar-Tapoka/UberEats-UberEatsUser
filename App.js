import { StatusBar } from "expo-status-bar";
import { StatusBar as RNStatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";

import { NavigationContainer } from "@react-navigation/native";
import { HomeTabs } from "./src/navigation";
import { withAuthenticator } from "@aws-amplify/ui-react-native";

Amplify.configure(awsconfig);

function App() {
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

export default withAuthenticator(App);
