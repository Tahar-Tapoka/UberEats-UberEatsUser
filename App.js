import { StatusBar } from "expo-status-bar";
import { StatusBar as RNStatusBar } from "react-native";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

import { HomeScreen } from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: RNStatusBar.currentHeight,
  },
});
