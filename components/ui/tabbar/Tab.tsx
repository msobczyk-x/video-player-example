import { StyleSheet } from "react-native-unistyles";
import { TouchableOpacity } from "react-native";
import Typography from "../Typography";
import type { ReactNode } from "react";

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabProps = {
  label: string;
  isActive: boolean;
  onPress: () => void;
};
export default function Tab({ label, isActive, onPress }: TabProps) {
  return (
    <TouchableOpacity
      style={[styles.tab, isActive ? styles.activeTab : styles.inactiveTab]}
      onPress={onPress}
    >
      <Typography
        variant="labelMedium"
        isBold
        style={[
          styles.tabText,
          isActive ? styles.activeTabText : styles.inactiveTabText,
        ]}
      >
        {label}
      </Typography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create((theme) => ({
  tab: {
    flex: 1,
    paddingVertical: theme.padding(0.5),
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
  },
  inactiveTab: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.inactive,
  },
  tabText: {},
  activeTabText: {
    color: theme.colors.primary,
  },
  inactiveTabText: {
    color: theme.colors.primary,
  },
}));
