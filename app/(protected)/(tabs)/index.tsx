import HomeHeader from "@/components/header/HomeHeader";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Text>home</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteBackground,
    paddingTop: UnistylesRuntime.insets.top + theme.padding(3),
    paddingBottom: UnistylesRuntime.insets.bottom + theme.padding(3),
  },
}));
