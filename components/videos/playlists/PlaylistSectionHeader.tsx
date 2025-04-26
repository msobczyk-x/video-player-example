import { Typography } from "@/components/ui";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type PlaylistSectionHeaderProps = {
  title: string;
  searchQuery?: string;
};
export default function PlaylistSectionHeader({
  title,
  searchQuery,
}: PlaylistSectionHeaderProps) {
  const router = useRouter();
  const handleShowMore = () => {
    router.navigate("/(protected)/(tabs)/search");
  };

  return (
    <View style={styles.container}>
      <Typography variant="headlineSmall" isBold>
        {title}
      </Typography>
      <TouchableOpacity onPress={handleShowMore}>
        <Typography variant="bodySmall" isBold style={styles.showMoreButton}>
          Show more
        </Typography>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    paddingTop: theme.padding(1),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.padding(3),
  },
  showMoreButton: {
    textDecorationLine: "underline",
    lineHeight: 24,
    fontWeight: 400,
  },
}));
