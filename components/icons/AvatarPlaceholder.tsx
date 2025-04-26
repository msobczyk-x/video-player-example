import { StyleSheet, useUnistyles } from "react-native-unistyles";
import { View } from "react-native";
import { Person } from "../icons";

export default function AvatarPlaceholder() {
  const { theme } = useUnistyles();
  return (
    <View style={styles.avatar}>
      <Person width={20} height={20} color={theme.colors.white} />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    borderRadius: 96,
    backgroundColor: theme.colors.primaryBackground,
  },
}));
