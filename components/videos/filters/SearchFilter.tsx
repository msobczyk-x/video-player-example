import { Typography } from "@/components/ui";
import { useSearchStore } from "@/services/search/provider";
import { ESearchFilter } from "@/types/api/videos/search";
import { useState } from "react";
import {
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";
import SearchFilterModal from "./SearchFilterModal";

function mapFilterWithLabel(filter: ESearchFilter) {
  switch (filter) {
    case ESearchFilter.LATEST:
      return "Upload date: latest";
    case ESearchFilter.POPULAR:
      return "Most popular";
    case ESearchFilter.OLDEST:
      return "Upload date: oldest";
    default:
      return "";
  }
}

export default function SearchFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const filter = useSearchStore((state) => state.filter);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <Typography variant="labelMedium">
          Sort by:{" "}
          <Typography variant="labelMedium" isBold>
            {mapFilterWithLabel(filter)}
          </Typography>
        </Typography>
      </TouchableOpacity>
      <SearchFilterModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
