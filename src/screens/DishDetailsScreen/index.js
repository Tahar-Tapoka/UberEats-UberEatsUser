import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Divider, IconButton } from "react-native-paper";
import { useCartContext } from "../../contexts/CartContext";

export const DishDetailScreen = ({ route, navigation }) => {
  const [increment, setIncrement] = useState(0);
  const { dish } = route.params;
  const { addDishToCart } = useCartContext();

  const addToCartHandler = () => {
    addDishToCart(dish, increment);
    // navigation.navigate("Cart", { dish });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <IconButton
        icon="arrow-left"
        size={30}
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
      />
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.subtitle}>{dish.description}</Text>
      <Divider />
      <View style={styles.row}>
        <IconButton
          icon="plus-box"
          size={50}
          onPress={() => setIncrement((inc) => inc + 1)}
          style={styles.backIcon}
        />
        <Text style={styles.title}>{increment}</Text>
        <IconButton
          icon="minus-box"
          size={50}
          onPress={() =>
            setIncrement((inc) => {
              if (inc > 0) {
                return inc - 1;
              } else return 0;
            })
          }
          style={styles.backIcon}
        />
      </View>
      <Button
        style={{ padding: 15, marginTop: "auto" }}
        icon="cart-plus"
        mode="contained"
        onPress={addToCartHandler}
        buttonColor="black"
      >
        <Text style={styles.summ}>
          Add {increment} to Cart &#8226; {(dish.price * increment).toFixed(2)}$
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  title: {
    marginVertical: 5,
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    color: "grey",
    marginVertical: 10,
    letterSpacing: 0.7,
  },
  row: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    marginVertical: 0,
    marginLeft: 0,
    padding: 0,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  summ: {
    color: "white",
    marginLeft: "auto",
    fontSize: 18,
    fontWeight: "bold",
  },
  touchButton: {
    flexDirection: "row",
    backgroundColor: "black",
    padding: 20,
    justifyContent: "center",
    marginTop: "auto",
  },
});
