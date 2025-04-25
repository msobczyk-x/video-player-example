import { StyleSheet } from "react-native-unistyles";

const mainTheme = {
  colors: {
    primary: "#2B2D42",
    secondary: "#8D99AE",
    secondaryBackground: "#8D99AE",
    whiteBackground: "#FFFFFF",
    textPrimary: "#2B2D42",
    textSecondary: "#8D99AE",
    textWhite: "#FFFFFF",
  },
  gap: (v: number) => v * 8,
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
