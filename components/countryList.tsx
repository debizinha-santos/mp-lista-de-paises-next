"use client";
import { useState } from "react";
import CountryCard from "@/components/countrycard";
import SearchComponent from "@/components/search/searchComponent";
import type { Country } from "@/app/page";

export default function CountryList({
  initialCountries,
}: {
  initialCountries: Country[];
}) {
  const [countries, setCountries] = useState<Country[]>(initialCountries);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (results: Country[]) => {
    setCountries(results);
    setIsSearching(true);
  };

  const handleClear = () => {
    setCountries(initialCountries);
    setIsSearching(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-end my-3 bg-white p-3 rounded shadow">
        {/* Search bar */}
        <SearchComponent onResults={handleSearch} onClear={handleClear} />
      </div>
      <div className="flex flex-col items-end my-3 bg-white p-3 rounded shadow ">
        {/* Country cards */}
        <section className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* Displaying countries */}
          {countries.length === 0 && isSearching && (
            <p className="text-center w-full col-span-full">
              Nenhum país encontrado.
            </p>
          )}
          {countries.map((country) => (
            <CountryCard
              name={country.name.common}
              ptName={country.translations.por.common}
              flag={country.flags.svg}
              alt={country.flags.alt}
              key={country.cca3}
            />
          ))}
        </section>
      </div>
      {isSearching && (
        <button
          className="mt-4 px-4 py-2 bg-gray-300 rounded"
          onClick={handleClear}
        >
          Voltar
        </button>
      )}
    </div>
  );
}
