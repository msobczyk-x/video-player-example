import type { TextStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";
const mainTheme = {
  colors: {
    primary: "#2B2D42",
    secondary: "#8D99AE",
    white: "#FFFFFF",
    primaryBackground: "#2B2D42",
    secondaryBackground: "#8D99AE",
    whiteBackground: "#FFFFFF",
    textPrimary: "#2B2D42",
    textSecondary: "#8D99AE",
    textWhite: "#FFFFFF",
    textPlaceholder: "rgba(43, 45, 66, 0.6)",
  },
  fonts: {
    labelSmall: (isBold: boolean) => ({
      fontFamily: "Poppins",
      fontSize: 10,
      fontWeight: (isBold ? 600 : 400) as TextStyle["fontWeight"],
      lineHeight: 24,
      letterSpacing: 0.01,
    }),
    labelMedium: (isBold: boolean) => ({
      fontFamily: "Poppins",
      fontSize: 12,
      fontWeight: (isBold ? 600 : 400) as TextStyle["fontWeight"],
      lineHeight: 24,
      letterSpacing: 0.01,
    }),
    labelLarge: (isBold: boolean) => ({
      fontFamily: "Poppins",
      fontSize: 13,
      fontWeight: (isBold ? 600 : 400) as TextStyle["fontWeight"],
      lineHeight: 16,
      letterSpacing: 0,
    }),
    bodySmall: (isBold: boolean) => ({
      fontFamily: "Poppins",
      fontSize: 12,
      fontWeight: (isBold ? 500 : 400) as TextStyle["fontWeight"],
      lineHeight: 24,
      letterSpacing: 0.01,
    }),
    bodyMedium: (isBold: boolean) => ({
      fontFamily: "Poppins",
      fontSize: 14,
      fontWeight: (isBold ? 600 : 400) as TextStyle["fontWeight"],
      lineHeight: 24,
      letterSpacing: 0.01,
    }),
    bodyLarge: (isBold: boolean) => ({
      fontFamily: "Poppins",
      fontSize: 16,
      fontWeight: (isBold ? 600 : 400) as TextStyle["fontWeight"],
      lineHeight: 24,
      letterSpacing: 0.01,
    }),
    headlineSmall: (isBold: boolean) => ({
      fontFamily: "Poppins",
      fontSize: 18,
      fontWeight: (isBold ? 600 : 400) as TextStyle["fontWeight"],
      lineHeight: 24,
      letterSpacing: 0.01,
    }),
    headlineMedium: (isBold: boolean) => ({
      fontFamily: "Poppins",
      fontSize: 22,
      fontWeight: (isBold ? 600 : 400) as TextStyle["fontWeight"],
      lineHeight: 24,
      letterSpacing: 0.01,
    }),
    headlineLarge: (isBold: boolean) => ({
      fontFamily: "Poppins",
      fontSize: 26,
      fontWeight: (isBold ? 600 : 400) as TextStyle["fontWeight"],
      lineHeight: 24,
      letterSpacing: 0.01,
    }),
  },
  padding: (v: number) => v * 8,
  gap: (v: number) => v * 8,
  radius: (v: number) => v * 8,
};

const appThemes = {
  main: mainTheme,
};

type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  themes: appThemes,
  settings: {
    initialTheme: "main",
  },
});
