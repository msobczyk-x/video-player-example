import { Button, Typography } from "@/components/ui";
import { TextInput, View } from "react-native";
import type {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import { useRef, useState } from "react";
import { StyleSheet } from "react-native-unistyles";

type NoteInputProps = {
  onSubmit: (text: string) => void;
};

export default function NoteInput({ onSubmit }: NoteInputProps) {
  const inputRef = useRef<TextInput>(null);
  const [inputValue, setState] = useState("");

  const handleChangeText = (text: string) => {
    setState(text);
  };

  const handleSubmit = (
    e?: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    const currentValue = inputValue.trim();

    if (currentValue) {
      onSubmit(currentValue);
      setState("");
      inputRef.current?.blur();
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Enter notes..."
          value={inputValue}
          onChangeText={handleChangeText}
          multiline
          onSubmitEditing={handleSubmit}
        />
      </View>
      <Button size="medium" onPress={handleSubmit} style={styles.button}>
        <Typography variant="bodyMedium" isBold style={styles.buttonText}>
          Add note
        </Typography>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: theme.padding(1.5),
    borderRadius: theme.radius(1.5),
    borderColor: theme.colors.inactive,
    borderWidth: 1,
    minHeight: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  wrapper: {
    flex: 1,
    gap: theme.gap(2),
    width: "100%",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
  },
  buttonText: {
    textAlign: "center",
    color: theme.colors.textWhite,
  },
  button: {
    width: "100%",
    maxWidth: 256,
  },
}));
