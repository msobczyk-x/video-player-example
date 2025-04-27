import SettingsHeader from "@/components/header/SettingsHeader";
import NotificationOptions from "@/components/settings/NotificationOptions";
import UserPreview from "@/components/settings/UserPreview";
import Divider from "@/components/ui/Divider";
import { View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <SettingsHeader />
      <View style={styles.userContainer}>
        <UserPreview />
      </View>
      <Divider marginTop={0} />
      <NotificationOptions />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteBackground,
    gap: theme.gap(2),
    paddingTop: UnistylesRuntime.insets.top + theme.padding(3),
    paddingBottom: UnistylesRuntime.insets.bottom + theme.padding(3),
    paddingHorizontal: theme.padding(3),
  },
  userContainer: {
    justifyContent: "center",
    paddingVertical: theme.padding(3),
  },
}));
