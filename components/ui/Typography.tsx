import React from "react";
import type { StyleProp, TextStyle } from "react-native";
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
};

export default function Typography({
  children,
  variant = "bodyMedium",
  isBold = false,
  style,
}: TypographyProps) {
  const { theme } = useUnistyles();
  return <Text style={[theme.fonts[variant](isBold), style]}>{children}</Text>;
}
