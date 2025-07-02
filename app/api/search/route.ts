import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";

  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,translations,subregion,population,languages,borders,cca3"
  );
  const countries = await res.json();

 const filtered = countries.filter((country: any) => {
  const nameEn = country.name.common.toLowerCase();
  const namePt = country.translations?.por?.common?.toLowerCase() || "";
  return nameEn.includes(query.toLowerCase()) || namePt.includes(query.toLowerCase());
});
  console.log("Query:", query, "Resultados:", filtered.length);



  return NextResponse.json(filtered);
}