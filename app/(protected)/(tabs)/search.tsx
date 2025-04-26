import SearchInput from "@/components/inputs/SearchInput";
import { View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteBackground,
    paddingHorizontal: theme.padding(3),
    paddingTop: UnistylesRuntime.insets.top + theme.padding(3),
    paddingBottom: UnistylesRuntime.insets.bottom + theme.padding(3),
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
}));
