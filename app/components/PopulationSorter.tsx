// components/PopulationSorter.tsx
import React from "react";

interface  PopulationSorterProps {
  onSort: (order: string) => void;
}

const  PopulationSorter: React.FC< PopulationSorterProps> = ({ onSort }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSort(event.target.value);
  };

  return (
    <div>
      <label>Sort by Population: </label>
      <select onChange={handleSortChange}>
        <option value="default">Default</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default  PopulationSorter;
