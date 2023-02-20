import { Image, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";

export const MenuItem = ({ dishe }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{dishe.name}</Text>
          <Text style={styles.subtitle}>{dishe.description}</Text>
          <Text style={styles.title}>{dishe.price} $</Text>
        </View>
        {dishe.image && (
          <Image style={styles.image} source={{ uri: dishe.image }} />
        )}
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    color: "grey",
    marginVertical: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  image: {
    height: 100,
    width: 100,
  },
});
