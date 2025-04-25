import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondaryBackground,
    alignItems: "center",
    justifyContent: "center",
  },
}));
