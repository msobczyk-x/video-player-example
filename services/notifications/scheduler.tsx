import * as Notifications from "expo-notifications";
import { useCallback, useEffect, useState } from "react";

export const useReminderScheduler = () => {
  const [hasReminder, setHasReminder] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    checkReminder();
  }, []);

  const checkReminder = useCallback(async () => {
    try {
      setIsLoading(true);
      const notifications =
        await Notifications.getAllScheduledNotificationsAsync();
      setHasReminder(notifications.length > 0);
    } catch (error) {
      console.error("Failed to check reminders:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const setReminder = useCallback(async (time: Date) => {
    try {
      setIsLoading(true);

      await Notifications.cancelAllScheduledNotificationsAsync();

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "YouTube Learn",
          body: "Reminder ! Don't forget to learn something new!",
          interruptionLevel: "timeSensitive",
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DAILY,
          hour: time.getHours(),
          minute: time.getMinutes(),
        },
      });

      setHasReminder(true);
      return true;
    } catch (error) {
      console.error("Failed to set reminder:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearReminder = useCallback(async () => {
    try {
      setIsLoading(true);
      await Notifications.cancelAllScheduledNotificationsAsync();
      setHasReminder(false);
      return true;
    } catch (error) {
      console.error("Failed to clear reminder:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    hasReminder,
    isLoading,
    setReminder,
    clearReminder,
    checkReminder,
  };
};
