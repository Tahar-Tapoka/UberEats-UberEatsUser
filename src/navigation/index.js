import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { DishDetailScreen } from "../screens/DishDetailsScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { RestaurantDetails } from "../screens/RestaurantDetailsScreen";
import { OrdersScreen } from "../screens/OrdersScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Cart } from "../screens/Cart";
import { OrderDetailsScreen } from "../screens/OrderDetailsScreen";
import { Profile } from "../screens/Profile";
import { useAuthContext } from "../contexts/AuthContext";

const TAB_ICON = {
  Home: "home",
  Orders: "cart",
  Profile: "account",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialCommunityIcons name={iconName} size={24} color={color} />
    ),
    headerShown: false,
  };
};

const HomeStack = createNativeStackNavigator();
export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ header: () => {} }}>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen name="Restaurant" component={RestaurantDetails} />
      <HomeStack.Screen name="Dish" component={DishDetailScreen} />
      <HomeStack.Screen name="Cart" component={Cart} />
    </HomeStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();
export const OrdersNavigator = () => {
  return (
    <OrdersStack.Navigator screenOptions={{ header: () => {} }}>
      <OrdersStack.Screen name="OrdersScreen" component={OrdersScreen} />
      <OrdersStack.Screen name="Order" component={OrderDetailsScreen} />
    </OrdersStack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();
export const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions} activeColor="tomato">
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Orders" component={OrdersNavigator} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const RootStack = createNativeStackNavigator();
export const RootNavigator = () => {
  const { dbUser } = useAuthContext();
  return (
    <RootStack.Navigator screenOptions={{ header: () => {} }}>
      {dbUser ? (
        <RootStack.Screen name="HomeTabs" component={HomeTabs} />
      ) : (
        <RootStack.Screen name="Profile" component={Profile} />
      )}
    </RootStack.Navigator>
  );
};
