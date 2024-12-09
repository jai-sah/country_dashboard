// hooks/useNationSearch.ts
import { Nation } from "./useNationData";
import { useState } from "react";

export const useNationSearch = (
  allNationData: Nation[],
  updateVisibleData: (data: Nation[]) => void
) => {
  const [searchQuery, setSearchQuery] = useState("");

  const applySearchFilter = (query: string) => {
    const normalizedQuery = query.toLowerCase();
    setSearchQuery(normalizedQuery);

    if (query === "") {
      updateVisibleData(allNationData); // Reset to original data if search query is empty
    } else {
      const filteredData = allNationData.filter(
        (nation) =>
          nation.name.common.toLowerCase().includes(normalizedQuery) ||
          (nation.capital && nation.capital[0].toLowerCase().includes(normalizedQuery))
      );
      updateVisibleData(filteredData);
    }
  };

  return { searchQuery, applySearchFilter };
};
