"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white h-22 flex items-center justify-center shadow">
      <section className="container flex gap-4 w-full">
        <Image
          width={38}
          height={38}
          src="/Logo.svg"
          alt="Logo da aplicação"
        />
        <h1 className="font-bold text-2xl mt-3" style={{ width: "200px" }}>
          Lista de países
        </h1>
        {/* Removido SearchComponent */}
      </section>
    </nav>
  );
}