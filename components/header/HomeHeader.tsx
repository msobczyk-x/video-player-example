import { useRouter } from "expo-router";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Settings } from "../icons";
import SearchInput from "../inputs/SearchInput";
import IconButton from "../ui/IconButton";
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
