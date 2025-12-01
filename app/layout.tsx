import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-cinzel" });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-lato" });

export const metadata: Metadata = {
  title: "Faraón Barber · Estilo real, tecnología lista",
  description: "Barbería mobile-first con enfoque faraón: cortes de autor, agendamiento rápido y diseño premium.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cinzel.variable} ${lato.variable}`}>
      <body className="min-h-screen bg-[#000] text-[#f7f1e3] antialiased">
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.14),transparent_30%),radial-gradient(circle_at_85%_0%,rgba(74,31,47,0.2),transparent_28%),linear-gradient(180deg,#0a0a0a,#000)]" aria-hidden />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
