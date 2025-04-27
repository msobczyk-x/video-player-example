import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type IconButtonProps = {
  icon: React.ReactNode;
  onPress: () => void;
  size?: number;
};

export default function IconButton({
  size = 32,
  icon,
  onPress,
}: IconButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconButton(size)}>
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create((theme) => ({
  iconButton: (size: number) => ({
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size,
  }),
}));
