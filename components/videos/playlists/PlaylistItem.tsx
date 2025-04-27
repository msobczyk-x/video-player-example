import { Typography } from "@/components/ui";
import { formatDate } from "@/utils/formatDate";
import { useRouter } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
type PlaylistItemProps = {
  videoId: string;
  title: string;
  createdAt: string;
  thumbnailUrl: string;
};

export default function PlaylistItem({
  videoId,
  title,
  createdAt,
  thumbnailUrl,
}: PlaylistItemProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`/(protected)/(modals)/video/${videoId}`)}
    >
      <View style={styles.container}>
        <View style={styles.thumbnailContainer}>
          <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
        </View>
        <View style={styles.textsWrapper}>
          <View style={styles.titleContainer}>
            <Typography
              variant="bodySmall"
              isBold
              style={styles.title}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {title}
            </Typography>
          </View>
          <Typography variant="labelSmall" style={styles.date}>
            {formatDate(createdAt)}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "column",
    width: 180,
  },
  textsWrapper: {
    flexDirection: "column",
    gap: 2,
    width: "100%",
  },
  thumbnailContainer: {
    borderRadius: theme.radius(2),
  },
  thumbnail: {
    width: 180,
    height: 116,
    borderRadius: theme.radius(2),
  },
  titleContainer: {
    width: "95%",
  },
  date: {
    alignSelf: "flex-end",
  },
  title: {
    paddingTop: theme.padding(1),
    lineHeight: 12,
  },
}));
