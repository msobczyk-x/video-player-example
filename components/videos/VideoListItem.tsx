import { formatDate } from "@/utils/formatDate";
import { useRouter } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Typography } from "../ui";

type VideoListItemProps = {
  videoId: string;
  thumbnailUrl: string;
  channelName: string;
  description: string;
  createdAt: string;
};

export default function VideoListItem({
  videoId,
  thumbnailUrl,
  channelName,
  description,
  createdAt,
}: VideoListItemProps) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.navigate(`/(protected)/(modals)/video/${videoId}`)}
    >
      <View style={styles.container}>
        <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
        <View style={styles.textsContainer}>
          <Typography
            variant="bodySmall"
            isBold
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.text, { lineHeight: 12, fontWeight: 700 }]}
          >
            {channelName}
          </Typography>
          {description && (
            <Typography
              numberOfLines={2}
              ellipsizeMode="tail"
              variant="bodyMedium"
              style={[styles.text, { lineHeight: 12 }]}
            >
              {description}
            </Typography>
          )}
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
    flex: 1,
    gap: theme.gap(1),
  },
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: theme.radius(2),
  },
  textsContainer: {
    gap: theme.gap(0.5),
  },
  date: {
    alignSelf: "flex-end",
  },
  text: {
    paddingTop: theme.padding(1),
  },
}));
