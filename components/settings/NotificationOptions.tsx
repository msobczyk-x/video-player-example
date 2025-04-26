import { Switch, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Clock, Notification } from "../icons";
import { Typography } from "../ui";

export default function NotificationOptions() {
  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        <Notification />
        <Typography variant="bodyMedium">Learning reminders</Typography>
      </View>

      <View style={styles.notificationContainer}>
        <Typography variant="bodySmall">Repeat everyday at:</Typography>
        <View style={styles.iconTextContainer}>
          <Clock width={24} height={24} />
          <Typography variant="bodySmall">10:00 AM</Typography>
        </View>
        <Switch />
      </View>
      <Typography variant="labelSmall" isBold>
        You will receive friendly reminder to remember to study
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "column",
    gap: theme.gap(2),
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.gap(1),
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.gap(2),
  },
}));
