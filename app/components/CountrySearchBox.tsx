// components/CountrySearchBox.tsx
import React from "react";

 interface CountrySearchBoxProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const CountrySearchBox: React.FC<CountrySearchBoxProps> = ({ searchTerm, onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <label>Search by Name or Capital: </label>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
    </div>
  );
};

export default CountrySearchBox;
