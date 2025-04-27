export function formatTotalResults(totalResults: number): string {
  if (totalResults >= 1000000) {
    return "1000000+";
  }
  return totalResults.toString();
}
