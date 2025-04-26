import { Typography } from "@/components/ui";
import { Image, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
type PlaylistItemProps = {
  title: string;
  createdAt: string;
  thumbnailUrl: string;
};
export default function PlaylistItem({
  title,
  createdAt,
  thumbnailUrl,
}: PlaylistItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.thumbnailContainer}>
        <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
      </View>
      <View style={styles.textsWrapper}>
        <Typography variant="bodySmall" isBold>
          {title}
        </Typography>
        <Typography variant="labelSmall">{createdAt}</Typography>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "column",
    gap: theme.gap(1),
  },
  textsWrapper: {
    flexDirection: "column",
    gap: 2,
  },
  thumbnailContainer: {
    borderRadius: theme.radius(2),
  },
  thumbnail: {
    width: 180,
    height: 116,
    borderRadius: theme.radius(2),
  },
}));
