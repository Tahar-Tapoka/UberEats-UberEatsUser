import { useAuthenticator } from "@aws-amplify/ui-react-native";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import { Button, Divider } from "react-native-paper";
import { useState } from "react";
import { DataStore } from "aws-amplify";
import { User } from "../../models";
import { useAuthContext } from "../../contexts/AuthContext";

export const Profile = ({ navigation }) => {
  const { sub, setDbUser, dbUser } = useAuthContext();
  const [name, setName] = useState(dbUser?.name || "");
  const [address, setAddress] = useState(dbUser?.address || "");
  const [lat, setLat] = useState(dbUser?.lat.toString() || "0");
  const [lng, setLng] = useState(dbUser?.lng.toString() || "0");
  const { signOut } = useAuthenticator();

  const onSave = async () => {
    if (!dbUser) {
      ////create user
      try {
        DataStore.save(
          new User({
            name,
            address,
            lat: parseFloat(lat),
            lng: parseFloat(lng),
            sub,
          })
        ).then(setDbUser);
      } catch (e) {
        Alert.alert("Error: ", e.message);
      }
    } else {
      ////update user
      try {
        const original = await DataStore.query(User, dbUser.id);
        const user = await DataStore.save(
          User.copyOf(original, (updated) => {
            updated.name = name;
            updated.address = address;
            updated.lat = parseFloat(lat);
            updated.lng = parseFloat(lng);
          })
        );

        setDbUser(user);
        console.log(user);
      } catch (e) {
        Alert.alert("Error: ", e.message);
      }
    }
    navigation.goBack();
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
        {!dbUser ? "Save" : "Update"}
      </Button>
      <Divider />
      <Button mode="contained" onPress={signOut}>
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
