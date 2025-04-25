import { Stack } from "expo-router";

import "react-native-reanimated";

export default function ProtectedLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(modals)" options={{ headerShown: false }} />
    </Stack>
  );
}
