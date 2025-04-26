import { Image, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Typography } from "../ui";

type VideoListItemProps = {
  videoData: {};
};
export default function VideoListItem({ videoData }: VideoListItemProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "" }} style={styles.thumbnail} />
      <View style={styles.textsContainer}>
        <Typography variant="bodySmall" isBold>
          title
        </Typography>
        <Typography numberOfLines={2} ellipsizeMode="tail" variant="bodyMedium">
          description
        </Typography>
        <Typography variant="labelSmall">12.04.2025</Typography>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnail: {
    width: 345,
    height: 200,
    borderRadius: theme.radius(2),
  },
  textsContainer: {
    gap: theme.gap(1.5),
  },
}));
