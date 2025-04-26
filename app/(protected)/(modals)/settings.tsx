import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";
import SettingsHeader from "@/components/header/SettingsHeader";
import { View } from "react-native";
import UserPreview from "@/components/settings/UserPreview";
import Divider from "@/components/ui/Divider";
import NotificationOptions from "@/components/settings/NotificationOptions";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <SettingsHeader />
      <UserPreview />
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
}));
