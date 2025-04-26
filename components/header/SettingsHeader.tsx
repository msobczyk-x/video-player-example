import { StyleSheet } from "react-native-unistyles";
import { View } from "react-native";
import { LeftArrow } from "../icons";
import { Typography } from "../ui";
import { useRouter } from "expo-router";
import IconButton from "../ui/IconButton";

export default function SettingsHeader() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <IconButton icon={<LeftArrow />} onPress={() => router.back()} />
      <Typography variant="bodyLarge" isBold>
        Settings
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    gap: theme.gap(2),
    alignItems: "center",
  },
}));
