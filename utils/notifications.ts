import * as Notifications from "expo-notifications";
export async function scheduleReminder(targetTime: Date) {
  const minutes = targetTime.getMinutes();
  const hours = targetTime.getHours();
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Reminder",
      body: "Don't forget to learn something new!",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: hours,
      minute: minutes,
    },
  });
  return targetTime;
}
export async function checkIfReminderExists() {
  const notifications = await Notifications.getAllScheduledNotificationsAsync();
  return notifications.length > 0;
}
