import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Image from 'next/image';

const NunitoSans = Nunito_Sans({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Lista de países",
  description: "Uma lista de países criada com o Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={NunitoSans.className}
      >
        <main className="bg-gray-100 min-h-screen flex-col flex items-center">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container flex items-center gap-4">
              <Image
              width={38}
              height={38} 
              src="/Logo.svg" alt="Logo da aplicação"
              />
              <h1 className="font-bold text-2xl">Lista de países</h1>
              
            </section>
          </nav>
          {children}
          </main>
      </body>
    </html>
  );
}
