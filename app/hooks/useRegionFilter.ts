// hooks/useRegionFilter.ts
import { Nation } from "./useNationData";

export const useRegionFilter = (
  allNationData: Nation[],
  updateVisibleData: (data: Nation[]) => void
) => {
  const applyRegionFilter = (selectedRegion: string) => {
    if (selectedRegion === "") {
      updateVisibleData(allNationData); // Reset to original data if no region is selected
    } else {
      const filteredData = allNationData.filter(
        (nation) => nation.region === selectedRegion
      );
      updateVisibleData(filteredData);
    }
  };

  return { applyRegionFilter };
};
