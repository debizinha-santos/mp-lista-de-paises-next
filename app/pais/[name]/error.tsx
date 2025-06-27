"use client";

import Image from "next/image";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <section className="container flex flex-col">
      <h1 className="text-5xl font-bold text-gray-800 my-16 text-center">
        Oops! Ocorreu um erro ao exibir esse país.
      </h1>
      <Link href="/" className="flex items-center py-2 ">
        <Image
          src="/arrow-back.svg"
          alt="Erro"
          width={24}
          height={24}
          className="mr-2"
        />
        Voltar 
      </Link>
    </section>
  );
}
