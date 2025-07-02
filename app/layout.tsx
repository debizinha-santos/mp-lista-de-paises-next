import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";

const NunitoSans = Nunito_Sans({
  subsets: ["latin"],
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
      <body className={NunitoSans.className}>
        <main className="bg-white min-h-screen flex-col flex items-center w-full">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}