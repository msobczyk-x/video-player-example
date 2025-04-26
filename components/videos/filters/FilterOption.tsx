import { Typography } from "@/components/ui";
import { Pressable, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
type Props = {
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

export default function FilterOption({ label, isSelected, onPress }: Props) {
  return (
    <Pressable style={styles.filterOption} onPress={onPress}>
      <View style={[styles.radioCircle, isSelected && styles.radioSelected]}>
        {isSelected && <View style={styles.radioInner} />}
      </View>
      <Typography variant="bodyMedium" style={styles.optionText}>
        {label}
      </Typography>
    </Pressable>
  );
}

const styles = StyleSheet.create((theme) => ({
  filterOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  radioSelected: {
    borderColor: theme.colors.white,
  },
  radioInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.whiteBackground,
  },
  optionText: {
    color: theme.colors.textWhite,
    lineHeight: 24,
  },
}));
