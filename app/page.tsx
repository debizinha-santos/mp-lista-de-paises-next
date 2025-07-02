import CountryCard from "@/components/countrycard";
import CountryList from "@/components/countryList";
import SearchComponent from "@/components/search/searchComponent";
import Image from "next/image";
import Link from "next/link";


export type Country = {
  name: {
    common: string;
  };
  flags: {
    svg: string;
    alt: string;
  };
  translations: {
    por: {
      common: string;
    };
  };

  capital: string[];
  region: string;
  subregion: string;
  population: number;
  languages: {
    [key: string]: string;
  };
  borders: string[];
  cca3: string; // Código do país


};

export async function searchCountries(query: string): Promise<Country[]> {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${query}?fullText=true`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  const data: Country[] = await res.json();

  // Ordena em ordem alfabética pelo nome comum
  data.sort((a, b) => a.name.common.localeCompare(b.name.common)); // Comparação de strings para ordenação alfabética

  return data;
}

async function getCountries(): Promise<Country[]> {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,translations,subregion,population,languages,borders,cca3" 
  );

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  const data: Country[] = await res.json();

  // Ordena em ordem alfabética pelo nome comum
  data.sort((a, b) => a.name.common.localeCompare(b.name.common)); // Comparação de strings para ordenação alfabética

  return data;
}

export default async function Home() {
  const countries = await getCountries();
  return <CountryList initialCountries={countries} />;
}
