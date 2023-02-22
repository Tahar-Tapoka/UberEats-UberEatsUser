import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { StyleSheet, View, Text, TextInput, Keyboard } from "react-native";
import { Button, Divider } from "react-native-paper";
import { useState } from "react";

export const Profile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("0");
  const [lng, setLng] = useState("0");
  const { signOut } = useAuthenticator();

  const onSave = () => {
    console.log("saved : ", name, address, lat, lng);
    navigation.navigate("Home");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <Button mode="contained" onPress={onSave}>
        Save
      </Button>
      <Divider />
      <Button mode="contained" onPress={signOut} title="Sign Out">
        Sign Out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
});

export default Profile;
