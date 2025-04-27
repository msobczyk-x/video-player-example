import { SearchProvider } from "@/services/search/provider";
import { Stack } from "expo-router";

import "react-native-reanimated";

export default function ProtectedLayout() {
  return (
    <SearchProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)" options={{ headerShown: false }} />
      </Stack>
    </SearchProvider>
  );
}
