import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import SearchInput from "../inputs/SearchInput";
import IconButton from "../ui/IconButton";
import { Settings } from "../icons";
import { useRouter } from "expo-router";
export default function HomeHeader() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SearchInput />
      <IconButton
        icon={<Settings />}
        onPress={() => {
          router.push("/(protected)/(modals)/settings");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    width: "100%",
    gap: theme.gap(2),
    paddingHorizontal: theme.padding(3),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
