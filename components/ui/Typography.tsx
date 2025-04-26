import React from "react";
import type { StyleProp, TextProps, TextStyle } from "react-native";
import { Text } from "react-native";
import { useUnistyles } from "react-native-unistyles";

type TypographyVariant =
  | "bodySmall"
  | "bodyMedium"
  | "bodyLarge"
  | "headlineSmall"
  | "headlineMedium"
  | "headlineLarge"
  | "labelSmall"
  | "labelMedium"
  | "labelLarge";

type TypographyProps = {
  children: React.ReactNode;
  variant?: TypographyVariant;
  isBold?: boolean;
  style?: StyleProp<TextStyle>;
} & Omit<TextProps, "style">;

export default function Typography({
  children,
  variant = "bodyMedium",
  isBold = false,
  style,
  ...props
}: TypographyProps) {
  const { theme } = useUnistyles();
  return (
    <Text {...props} style={[theme.fonts[variant](isBold), style]}>
      {children}
    </Text>
  );
}
