import { useVideoActions } from "@/services/video/store";
import { Stack } from "expo-router";
import React, { useLayoutEffect } from "react";

export default function VideoDetailsLayout() {
  const { clear } = useVideoActions();
  useLayoutEffect(() => {
    return () => {
      clear();
    };
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
