"use client";

import Link from "next/link";
import { useState } from "react";
import { CTAButton } from "./CTAButton";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/sobre", label: "Historia" },
  { href: "/reservar", label: "Reservar hora" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="nav-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group relative flex items-center gap-2 text-lg font-semibold text-[#f7f1e3]">
          <span className="absolute inset-0 rounded-full bg-[#d4af37]/10 blur-xl transition group-hover:bg-[#d4af37]/20" aria-hidden />
          <span className="section-title relative text-xl sm:text-2xl">Faraón Barber</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#d8d0c0] md:flex">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#d4af37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37]"
            >
              {item.label}
            </Link>
          ))}
          <CTAButton href="/reservar" className="ml-2" aria-label="Reservar hora">
            Reservar hora
          </CTAButton>
        </nav>

        <button
          onClick={toggleMenu}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#0f0f0f] text-[#f7f1e3] transition hover:border-[#d4af37]/80 hover:bg-[#161616] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`block h-0.5 w-6 origin-center transform bg-[#d4af37] transition duration-300 ${
              open ? "translate-y-1.5 rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`block h-0.5 w-6 origin-center transform bg-[#d4af37] transition duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 origin-center transform bg-[#d4af37] transition duration-300 ${
              open ? "-translate-y-1.5 -rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t border-[#d4af37]/15 bg-[#050505]/95 backdrop-blur-lg`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm font-medium text-[#f7f1e3]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-transparent px-4 py-3 transition hover:border-[#d4af37]/40 hover:bg-[#0f0f0f]"
              onClick={() => setOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="text-xs text-[#d4af37]">→</span>
              </div>
            </Link>
          ))}
          <CTAButton href="/reservar" className="w-full justify-center" onClick={() => setOpen(false)}>
            Reservar ahora
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
