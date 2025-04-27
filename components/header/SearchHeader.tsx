import { useSearchQuery } from "@/services/search/provider";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import SearchInput from "../inputs/SearchInput";
import { Typography } from "../ui";
import SearchFilter from "../videos/filters/SearchFilter";

type SearchHeaderProps = {
  results?: string;
};

export default function SearchHeader({ results }: SearchHeaderProps) {
  const query = useSearchQuery();

  return (
    <View style={styles.header}>
      <View style={styles.input}>
        <SearchInput />
      </View>
      <View style={styles.filtersContainer}>
        {results !== undefined && query && (
          <>
            <Typography variant="labelSmall">
              {results} results found for:{" "}
              <Typography
                variant="labelSmall"
                isBold
              >{`"${query}"`}</Typography>
            </Typography>
            <SearchFilter />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  header: {
    width: "100%",
    flexDirection: "column",
    gap: theme.gap(1.25),
    paddingBottom: theme.padding(1),
  },
  input: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  filtersContainer: {
    flexDirection: "column",
  },
}));
