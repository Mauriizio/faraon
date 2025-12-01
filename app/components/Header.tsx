"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CTAButton } from "./CTAButton";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/sobre", label: "Historia" },
  // 👇 Quitamos el "Reservar" del menú para que el CTA sea la única llamada
  // { href: "/reservar", label: "Reservar" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="nav-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group relative flex items-center gap-2 text-lg font-semibold text-[#f7f1e3]"
        >
          <span
            className="absolute inset-0 rounded-full bg-[#d4af37]/10 blur-xl transition group-hover:bg-[#d4af37]/20"
            aria-hidden
          />
          <span className="relative flex items-center gap-3">
            {/* 👇 Logo más grande */}
            <span className="relative h-11 w-11 overflow-hidden rounded-full border border-[#d4af37]/60 bg-[#0b0b0b]/60 shadow-[0_0_0_1px_rgba(212,175,55,0.25)]">
              <Image
                src="/logo.png"
                alt="Logo Faraón Barber"
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span className="section-title text-[22px] sm:text-[24px]">
              Faraón Barber
            </span>
          </span>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden items-center gap-4 text-sm font-medium text-[#d8d0c0] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-3 py-2 transition hover:text-[#f7f1e3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37]"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="pointer-events-none absolute inset-x-1/4 bottom-1 h-px rounded-full bg-[#d4af37]/60 blur-md opacity-0 transition group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[#d4af37]/0 blur-xl transition group-hover:bg-[#d4af37]/10" />
            </Link>
          ))}
          {/* ÚNICO CTA de reserva */}
          <CTAButton href="/reservar" className="ml-2" aria-label="Reservar hora">
            Reservar hora
          </CTAButton>
        </nav>

        {/* BOTÓN MOBILE */}
        <button
          onClick={toggleMenu}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/50 bg-gradient-to-b from-[#0c0c0c] via-[#121212] to-[#0c0c0c] text-[#f7f1e3] shadow-[0_0_0_1px_rgba(212,175,55,0.2),0_10px_30px_-12px_rgba(0,0,0,0.6)] transition hover:border-[#d4af37]/80 hover:shadow-[0_0_0_1px_rgba(212,175,55,0.35),0_12px_36px_-10px_rgba(0,0,0,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(212,175,55,0.16),_transparent_55%)] blur-2xl opacity-0 transition group-hover:opacity-40"
            aria-hidden
          />
          <div className="relative h-5 w-7">
            <span
              className={`absolute left-0 h-0.5 w-6 rounded-full bg-[#d4af37] transition duration-300 ${
                open ? "translate-y-2 rotate-45" : "translate-y-0"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-7 rounded-full bg-[#d4af37] transition duration-300 ${
                open ? "opacity-0" : "translate-y-2"
              }`}
            />
            <span
              className={`absolute right-0 h-0.5 w-5 rounded-full bg-[#d4af37] transition duration-300 ${
                open ? "-translate-y-2 -rotate-45" : "translate-y-4"
              }`}
            />
          </div>
        </button>
      </div>

      {/* NAV MOBILE */}
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
          {/* CTA principal también en mobile */}
          <CTAButton
            href="/reservar"
            className="w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Reservar ahora
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
