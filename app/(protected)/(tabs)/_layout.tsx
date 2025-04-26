import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { Home, Search } from "@/components/icons";
import { useUnistyles } from "react-native-unistyles";

export default function TabLayout() {
  const { theme } = useUnistyles();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        animation: "shift",
        tabBarStyle: {
          backgroundColor: theme.colors.secondaryBackground,
        },
      }}
      initialRouteName="index"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ focused }) => (
            <Home color={focused ? theme.colors.white : theme.colors.primary} />
          ),
          tabBarLabel: ({ focused, children }) => (
            <Text
              style={{
                color: focused ? theme.colors.white : theme.colors.primary,
              }}
            >
              {children}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <Search
              color={focused ? theme.colors.white : theme.colors.primary}
            />
          ),
          tabBarLabel: ({ focused, children }) => (
            <Text
              style={{
                color: focused ? theme.colors.white : theme.colors.primary,
              }}
            >
              {children}
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
