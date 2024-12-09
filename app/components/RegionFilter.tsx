// components/RegionFilter.tsx
import React from "react";

interface RegionFilterProps {
  regions: string[];
  onFilter: (region: string) => void;
}

const RegionFilter
: React.FC<RegionFilterProps> = ({ regions, onFilter }) => {
  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilter(event.target.value);
  };

  return (
    <div>
      <label>Filter by Region: </label>
      <select onChange={handleRegionChange}>
        <option value="">All Regions</option>
        {regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter
;
