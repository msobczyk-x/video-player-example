import { useState, useEffect } from "react";
import { Switch, View, TouchableOpacity, Alert } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";
import { Clock, Notification } from "../icons";
import { Typography } from "../ui";
import { useReminderScheduler } from "@/services/notifications/scheduler";
import { TimePickerModal } from "../inputs/TimePickerModal";

export default function NotificationOptions() {
  const { theme } = useUnistyles();
  const { hasReminder, isLoading, setReminder, clearReminder, checkReminder } =
    useReminderScheduler();

  const [isEnabled, setIsEnabled] = useState<boolean>(hasReminder);

  useEffect(() => {
    if (hasReminder) {
      setIsEnabled(hasReminder);
    }
  }, [hasReminder]);

  const [selectedTime, setSelectedTime] = useState(
    new Date(new Date().setHours(10, 0, 0, 0)),
  );
  const [showTimePicker, setShowTimePicker] = useState(false);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const openTimePicker = () => {
    setShowTimePicker(true);
  };

  const closeTimePicker = () => {
    setShowTimePicker(false);
  };

  const handleTimeSelected = (time: Date) => {
    setSelectedTime(time);

    if (hasReminder) {
      handleToggleReminder(true, time);
    }
  };

  const handleToggleReminder = async (value: boolean, time?: Date) => {
    try {
      setIsEnabled(value);

      if (value) {
        const reminderDate = time || selectedTime;
        const success = await setReminder(reminderDate);

        if (!success) {
          setIsEnabled(false);
          Alert.alert("Error", "Failed to set reminder. Please try again.");
        }
      } else {
        const success = await clearReminder();

        if (!success) {
          setIsEnabled(true);
          Alert.alert("Error", "Failed to clear reminder. Please try again.");
        }
      }

      await checkReminder();
    } catch (error) {
      console.error("Error toggling reminder:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");

      checkReminder();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        <Notification />
        <Typography variant="bodyMedium">Learning reminders</Typography>
      </View>
      <View style={styles.notificationContainer}>
        <Typography variant="bodySmall">Repeat everyday at:</Typography>
        <TouchableOpacity
          style={styles.iconTextContainer}
          onPress={openTimePicker}
          disabled={isLoading || !isEnabled}
        >
          <Clock
            width={24}
            height={24}
            color={isEnabled ? theme.colors.primary : theme.colors.inactive}
          />
          <Typography
            variant="bodySmall"
            style={(!isEnabled && styles.disabledText) || {}}
          >
            {formatTime(selectedTime)}
          </Typography>
        </TouchableOpacity>
        <Switch
          value={isEnabled}
          onValueChange={(value) => handleToggleReminder(value)}
          disabled={isLoading}
          trackColor={{
            false: theme.colors.inactive,
            true: theme.colors.primary,
          }}
          thumbColor={theme.colors.white}
        />
      </View>
      <TimePickerModal
        visible={showTimePicker}
        onClose={closeTimePicker}
        onTimeSelected={handleTimeSelected}
        initialTime={selectedTime}
      />
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
  disabledText: {
    opacity: 0.5,
  },
}));
