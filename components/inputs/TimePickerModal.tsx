import React from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Typography } from "../ui";

interface TimePickerModalProps {
  visible: boolean;
  onClose: () => void;
  onTimeSelected: (date: Date) => void;
  initialTime: Date;
}

export const TimePickerModal = ({
  visible,
  onClose,
  onTimeSelected,
  initialTime,
}: TimePickerModalProps) => {
  const [selectedTime, setSelectedTime] = React.useState<Date>(initialTime);

  const onTimeChange = (event: any, selectedDate?: Date) => {
    if (event.type === "dismissed") {
      onClose();
      return;
    }

    const currentDate = selectedDate || selectedTime;
    setSelectedTime(currentDate);

    if (Platform.OS === "android") {
      onTimeSelected(currentDate);
      onClose();
    }
  };

  const handleSave = () => {
    onTimeSelected(selectedTime);
    onClose();
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <Typography variant="bodyMedium" isBold>
                Select Time
              </Typography>
              <TouchableOpacity onPress={onClose}>
                <Typography variant="bodyMedium" style={styles.cancelText}>
                  Cancel
                </Typography>
              </TouchableOpacity>
            </View>

            {Platform.OS === "ios" ? (
              <>
                <DateTimePicker
                  value={selectedTime}
                  mode="time"
                  display="spinner"
                  onChange={onTimeChange}
                  style={styles.picker}
                />
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleSave}
                >
                  <Typography
                    variant="bodyMedium"
                    style={styles.saveButtonText}
                  >
                    Confirm
                  </Typography>
                </TouchableOpacity>
              </>
            ) : (
              <DateTimePicker
                value={selectedTime}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={onTimeChange}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    width: "80%",
    maxWidth: 400,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  cancelText: {
    color: "#007AFF",
  },
  picker: {
    width: "100%",
  },
  saveButton: {
    backgroundColor: "#2B2D42",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
