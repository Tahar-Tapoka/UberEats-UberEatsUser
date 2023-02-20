import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { DishDetailScreen } from "../screens/DishDetailsScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { RestaurantDetails } from "../screens/RestaurantDetailsScreen";
import { OrdersScreen } from "../screens/OrdersScreen";
import { Icon } from "react-native-vector-icons/Icon";

const TAB_ICON = {
  Home: "md-restaurant",
  Orders: "md-cart",
  Profile: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Icon name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "black",
    tabBarInactiveTintColor: "grey",
    headerShown: false,
  };
};
const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => {} }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantDetails} />
      <Stack.Screen name="Dish" component={DishDetailScreen} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="HomeScreen" component={HomeNavigator} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};
