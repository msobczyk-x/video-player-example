import { useRouter } from "expo-router";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={() => router.push("/(protected)/(tabs)")}>
        <Text>Click Me</Text>
      </TouchableOpacity>
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
