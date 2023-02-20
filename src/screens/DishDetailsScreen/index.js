import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Divider, IconButton } from "react-native-paper";

export const DishDetailScreen = ({ route, navigation }) => {
  const [increment, setIncrement] = useState(0);
  const { dish } = route.params;
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
        onPress={() => console.log("Added to cart")}
        buttonColor="black"
      >
        <Text style={styles.summ}>
          Add {increment} to Cart &#8226; {(dish.price * increment).toFixed(2)}$
        </Text>
      </Button>
      {/* <TouchableOpacity
        style={styles.touchButton}
        disabled={increment === 0}
        onPress={() => console.log("Added to cart")}
      >
        <Text style={styles.buttonText}>Add {increment} to Cart</Text>
        <Text style={styles.summ}>{(dish.price * increment).toFixed(2)}$</Text>
      </TouchableOpacity> */}
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
