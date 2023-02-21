import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export const Profile = () => {
  function SignOutButton() {
    const { signOut } = useAuthenticator();
    return (
      <View style={styles.container}>
        <Button mode="contained" onPress={signOut} title="Sign Out">
          Sign Out
        </Button>
      </View>
    );
  }
  return <SignOutButton />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
