import { Home, Search } from "@/components/icons";
import { HapticTab } from "@/components/navigation/HapticTab";
import TabBarLabel from "@/components/navigation/TabBarLabel";
import { Tabs } from "expo-router";
import React from "react";
import { UnistylesRuntime, useUnistyles } from "react-native-unistyles";

export default function TabLayout() {
  const { theme } = useUnistyles();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: (props) => (
          <HapticTab
            {...props}
            style={{ justifyContent: "center", alignItems: "center" }}
          />
        ),
        animation: "shift",
        tabBarStyle: {
          backgroundColor: theme.colors.secondaryBackground,
          height: 72 + UnistylesRuntime.insets.bottom,
        },
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
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
            <TabBarLabel focused={focused}>{children}</TabBarLabel>
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
            <TabBarLabel focused={focused}>{children}</TabBarLabel>
          ),
        }}
      />
    </Tabs>
  );
}
