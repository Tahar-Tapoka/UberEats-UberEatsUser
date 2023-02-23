import { StatusBar } from "expo-status-bar";
import { StatusBar as RNStatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";

import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/navigation";
import { withAuthenticator } from "@aws-amplify/ui-react-native";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { CartContextProvider } from "./src/contexts/CartContext";

Amplify.configure(awsconfig);

function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AuthContextProvider>
          <CartContextProvider>
            <RootNavigator />
          </CartContextProvider>
        </AuthContextProvider>
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
