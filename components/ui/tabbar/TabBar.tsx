import { useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import Tab from "./Tab";
import type { TabItem } from "./Tab";

type TabBarProps = {
  tabs?: TabItem[];
  initialTabId?: string;
};
export default function TabBar({ tabs = [], initialTabId }: TabBarProps) {
  const [activeTabId, setActiveTabId] = useState(
    initialTabId || tabs[0]?.id || "",
  );

  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            isActive={activeTabId === tab.id}
            onPress={() => setActiveTabId(tab.id)}
          />
        ))}
      </View>

      <View style={styles.contentContainer}>{activeTab?.content}</View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  tabContainer: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    paddingVertical: theme.padding(2),
    alignItems: "center",
  },
  contentContainer: {
    paddingHorizontal: theme.padding(0.5),
    paddingVertical: theme.padding(2),
    flex: 1,
  },
}));
