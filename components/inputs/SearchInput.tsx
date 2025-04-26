import { TextInput, View } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";
import { Search } from "../icons";

export default function SearchInput() {
  const { theme } = useUnistyles();
  return (
    <View style={styles.container}>
      <Search width={24} height={24} />
      <TextInput
        returnKeyType="search"
        inputMode="search"
        placeholder="Search videos"
        style={styles.input}
        placeholderTextColor={theme.colors.textPlaceholder}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 44,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: theme.padding(2),
    paddingHorizontal: theme.padding(1.5),
    backgroundColor: theme.colors.whiteBackground,
    gap: theme.gap(1),
  },
  input: {
    ...theme.fonts.bodyLarge(false),
    color: theme.colors.textPrimary,
  },
}));
