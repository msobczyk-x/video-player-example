import type { StyleProp, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type ButtonSize = "small" | "medium" | "large";

type ButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  size?: ButtonSize;
  style?: StyleProp<ViewStyle>;
};

export default function Button({
  children,
  onPress,
  size = "medium",
  style,
}: ButtonProps) {
  styles.useVariants({
    size: size,
  });

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create((theme) => ({
  button: {
    backgroundColor: theme.colors.primary,
    variants: {
      size: {
        small: {
          borderRadius: 8,
          padding: 8,
        },
        medium: {
          borderRadius: 8,
          padding: 8,
        },
        large: {
          borderRadius: 12,
          padding: 12,
        },
      },
    },
  },
}));
