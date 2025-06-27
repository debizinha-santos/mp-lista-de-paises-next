import Image from "next/image";
import Link from "next/link";

export default function CountryCard({
  name,
  ptName,
  flag,
  alt,
}: {
  name: string;
  ptName: string;
  flag: string;
  alt: string;
}) {
  return (
    <Link href={`/pais/${name}`}>
      <article
        className="h-64 min-w-full p-2 bg-white border border-gray-200 rounded-xl hover:border-indigo-200 transition-all hover:shadow-xl flex flex-col items-center justify-between"
        key={name}
      >
        <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl">
          <Image src={flag} alt={alt} fill className="object-cover" />
        </div>
        <h1>{ptName}</h1>
      </article>
    </Link>
  );
}
