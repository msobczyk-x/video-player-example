import { Button, Typography } from "@/components/ui";
import { useSearchActions, useSearchStore } from "@/services/search/provider";
import { ESearchFilter } from "@/types/api/videos/search";
import { useState } from "react";
import {
  Modal,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";
import FilterOption from "./FilterOption";
type SearchFilterModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function SearchFilterModal({
  isOpen,
  setIsOpen,
}: SearchFilterModalProps) {
  const filter = useSearchStore((state) => state.filter);
  const { setFilter } = useSearchActions();
  const [tempFilter, setTempFilter] = useState<ESearchFilter>(filter);
  const handleFilterSelect = (selectedFilter: ESearchFilter) => {
    setTempFilter(selectedFilter);
  };

  const handleConfirm = () => {
    setFilter(tempFilter);
    setIsOpen(false);
  };

  return (
    <Modal visible={isOpen} animationType="fade" transparent={true}>
      <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View style={styles.body}>
                <View style={styles.modalHeader}>
                  <Typography
                    variant="headlineSmall"
                    isBold
                    style={styles.headerText}
                  >
                    Sort records by:
                  </Typography>
                </View>
                <View style={styles.optionsContainer}>
                  <FilterOption
                    label="Upload date: latest"
                    isSelected={tempFilter === ESearchFilter.LATEST}
                    onPress={() => handleFilterSelect(ESearchFilter.LATEST)}
                  />
                  <FilterOption
                    label="Upload date: oldest"
                    isSelected={tempFilter === ESearchFilter.OLDEST}
                    onPress={() => handleFilterSelect(ESearchFilter.OLDEST)}
                  />
                  <FilterOption
                    label="Most popular"
                    isSelected={tempFilter === ESearchFilter.POPULAR}
                    onPress={() => handleFilterSelect(ESearchFilter.POPULAR)}
                  />
                </View>
              </View>
              <Button
                size="medium"
                style={styles.confirmButton}
                onPress={handleConfirm}
              >
                <Typography
                  variant="bodyMedium"
                  isBold
                  style={styles.confirmButtonText}
                >
                  Confirm
                </Typography>
              </Button>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create((theme) => ({
  body: {
    flexDirection: "column",
    gap: theme.gap(1),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: theme.colors.secondary,
    justifyContent: "space-between",
    borderRadius: theme.radius(2),
    padding: theme.padding(3),
    width: "90%",
    maxWidth: 400,
    height: "50%",
  },
  modalHeader: {
    marginBottom: 20,
    paddingBottom: 4,
  },
  headerText: {
    color: theme.colors.textWhite,
  },
  optionsContainer: {
    gap: theme.gap(3),
  },
  confirmButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  confirmButtonText: {
    color: theme.colors.textWhite,
    lineHeight: 24,
  },
}));
