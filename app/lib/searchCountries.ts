import type { Country } from "@/app/page";

export async function searchCountries(query: string): Promise<Country[]> {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${query}?fullText=true`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }
  const data: Country[] = await res.json();
  data.sort((a, b) => a.name.common.localeCompare(b.name.common));
  return data;
}