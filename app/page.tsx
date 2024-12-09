// page.tsx
"use client";
import React from "react";
import CountryCard from "./components/CountryCard";
import "./styles/global.css";
import FilterCountriesByRegion from "./components/RegionFilter";
import SearchCountryByName from "./components/CountrySearchBox";
import { useCountryData } from "./hooks/useNationData";
import ErrorBoundary from "./components/ErrorHandlerWrapper";
import SortByPopulation from "./components/PopulationSorter";

const HomePage: React.FC = () => {
  const { filteredData, regions, isLoading, error, filters, updateFilters } = useCountryData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ErrorBoundary>
      <FilterCountriesByRegion
        regions={regions}
        onFilter={(region) => updateFilters({ region })}
      />
      <SearchCountryByName
        searchTerm={filters.searchTerm}
        onSearch={(term) => updateFilters({ searchTerm: term })}
      />
      <SortByPopulation
        onSort={(order) => updateFilters({ sortOrder: order })}
      />
      <div className="grid">
        {filteredData.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;
