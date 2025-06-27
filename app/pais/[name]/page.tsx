import Link from "next/link";
import Image from "next/image";
import CountryCard from "@/components/countrycard";

import type { Country } from "../../page";

// async function getCountrybyName(name: string): Promise<Country> {
//   const res = await fetch(
//     `https://restcountries.com/v3.1/name/${name}?fullText=true`
//   );

//   return (await res.json())[0];
// }

async function getCountrybyName(name: string): Promise<Country> {
  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,flags,capital,region,translations,subregion,population,languages,borders,cca3`
  );

  const countries: Country[] = await res.json();

  return countries.find((country: Country) => country.name.common === name)!; //
}

async function getCoutryBordersByName(name: string) {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,translations,subregion,population,languages,borders,cca3"
  );

  const countries: Country[] = await res.json();

  const country = countries.find(
    (country: Country) => country.name.common === name
  )!; //

  return country.borders?.map((border) => {
    const borderCountry = countries.find((country) => country.cca3 === border)!;
    return {
      name: borderCountry.name.common,
      ptName: borderCountry.translations.por.common,
      flag: borderCountry.flags.svg,
      alt: borderCountry.flags.alt,
    };
  });
}

export default async function CountryPage({
  params: { name },
}: {
  params: { name: string };
}) {
  const country = await getCountrybyName(decodeURI(name));
  const formatter = Intl.NumberFormat("pt-BR", { notation: "compact" });
  const borderCountries = await getCoutryBordersByName(decodeURI(name));

  return (
    <div className="flex flex-col container">
      <h1 className="text-5xl font-bold text-gray-800 mt-16 text-center">
        {country.translations.por.common}
      </h1>
      <Link className="flex items-center py-2" href="/">
        <Image
          src="/arrow-back.svg"
          alt="Voltar"
          width={18}
          height={18}
          className="mr-2"
        />
        Voltar
      </Link>
      <article className="flex justify-between p-10 min-w-full bg-white rounded-xl mt-10">
        <section>
          {country.capital && (
            <h2 className="text-xl text-gray-800 mt-3">
              <b>🏙️ Capital:</b> {country.capital}
            </h2>
          )}
          <h2 className="text-xl text-gray-800 mt-3">
            <b>🗺️ Continente:</b> {country.region}
            {country.subregion && `- ${country.subregion}`}
          </h2>
          <h2 className="text-xl text-gray-800 mt-3">
            <b>👪🏻 População:</b> {formatter.format(country.population)}
          </h2>
          {country.languages && (
            <h2 className="text-xl text-gray-800 mt-3">
              <b>🗣️ Línguas faladas:</b>
              <br />
              {Object.values(country.languages).map((language) => (
                <span
                  key={language}
                  className="m-4 inline-block px-2 bg-indigo-700 text-white rounded-full text-sm"
                >
                  {language}
                </span>
              ))}
            </h2>
          )}
        </section>
        <div className="relative w-96 h-auto p-2 overflow-hidden rounded-xl shadow-md">
          <Image
            src={country.flags.svg}
            alt={country.flags.alt}
            fill
            className="object-cover"
          ></Image>
        </div>
      </article>
      <section>
        <h3 className="mt-12 text-2xl font-bold text-gray-700">
          Países que fazem fronteira
        </h3>
        <div className="grid grid-cols-5 gap-3 w-full">
          {borderCountries?.map((border) => (
              <CountryCard {...border}/>
          ))} 
          Não há países vizinhos
          </div>

      </section>

    </div>
  );
}
