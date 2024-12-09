// hooks/useNationSort.ts
import { Nation } from "./useNationData";

export const useNationSort = (
  visibleNationData: Nation[],
  updateVisibleData: (data: Nation[]) => void
) => {
  const applySortOrder = (sortOrder: string) => {
    if (sortOrder === "asc") {
      const sortedData = [...visibleNationData].sort(
        (a, b) => a.population - b.population
      );
      updateVisibleData(sortedData);
    } else if (sortOrder === "desc") {
      const sortedData = [...visibleNationData].sort(
        (a, b) => b.population - a.population
      );
      updateVisibleData(sortedData);
    } else {
      updateVisibleData(visibleNationData); // Reset to the original data
    }
  };

  return { applySortOrder };
};
