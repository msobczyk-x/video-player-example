import { useNotesActions, useNotesStore } from "@/services/notes/store";
import { useMemo } from "react";
import { FlatList, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import NoteItem from "./NoteItem";
import NoteInput from "./NoteInput";
import { useVideoTime } from "@/services/video/store";

type NotesProps = {
  videoId: string;
};

export default function NotesList({ videoId }: NotesProps) {
  const notes = useNotesStore((state) => state.notes);
  const videoTime = useVideoTime();
  const { addNote } = useNotesActions();

  const videoNotes = useMemo(
    () => notes.filter((note) => note.videoId === videoId),
    [notes, videoId],
  );

  const handleNoteAdd = (content: string) => {
    if (content.trim() !== "") {
      addNote({ videoId, text: content, videoTime: Math.floor(videoTime) });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={styles.flatlistContainer}
          data={videoNotes}
          renderItem={({ item }) => <NoteItem item={item} />}
        />
      </View>
      <View style={styles.inputContainer}>
        <NoteInput onSubmit={handleNoteAdd} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  listContainer: {
    flex: 1,
  },
  flatlistContainer: {
    gap: theme.gap(3),
  },
  inputContainer: {
    width: "100%",
    flex: 1,
  },
}));
