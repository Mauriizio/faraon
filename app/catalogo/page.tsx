"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { CTAButton } from "../components/CTAButton";
import { SectionShell } from "../components/SectionShell";

type GalleryItem = {
  id: string;
  src: string;
  look: string;
  tag: string;
};

const galleryItems: GalleryItem[] = Array.from({ length: 14 }, (_, index) => {
  const number = index + 1;

  // En tu carpeta: 1, 2, 13 y 14 están como .JPG (mayúsculas)
  const isUppercase = [1, 2, 13, 14].includes(number);
  const extension = isUppercase ? "JPG" : "jpg";

  return {
    id: `pic-${number}`,
    src: `/catalog/pic-${number}.${extension}`,
    look:
      number % 3 === 0
        ? "Fade + Beard"
        : number % 2 === 0
          ? "Classic Cut"
          : "Full Service",
    tag:
      number % 3 === 0
        ? "Detalles"
        : number % 2 === 0
          ? "Texturas"
          : "Degradados",
  };
});

function GalleryCard({ item }: { item: GalleryItem }) {
  const [hasError, setHasError] = useState(false);

  const fallbackBackground = useMemo(
    () =>
      `radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.24), transparent 35%),\
       radial-gradient(circle at 80% 10%, rgba(74, 31, 47, 0.22), transparent 30%),\
       linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 10, 15, 0.92))`,
    [],
  );

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/10 bg-black/10 shadow-[0_18px_45px_rgba(0,0,0,0.55)] transition duration-300 hover:border-[#d4af37]/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.65)] hover:ring-2 hover:ring-[#d4af37]/80 focus-within:border-[#d4af37]/50 focus-within:ring-2 focus-within:ring-[#d4af37] active:ring-2 active:ring-[#d4af37]/70"
      tabIndex={0}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {!hasError && (
          <Image
            src={item.src}
            alt={`Trabajo realizado: ${item.look}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 ease-out group-hover:scale-105"
            onError={(event) => {
              const target = event.target as HTMLImageElement;
              target.style.display = "none";
              setHasError(true);
            }}
            priority={item.id === "pic-1"}
          />
        )}

        {hasError ? (
          <div
            className="absolute inset-0"
            style={{ backgroundImage: fallbackBackground }}
            aria-hidden
          />
        ) : null}

        <div className="absolute inset-x-3 bottom-3 z-10 flex items-center justify-between gap-3 rounded-xl border border-[#d4af37]/30 bg-black/75 px-4 py-3 text-[#f7f1e3] backdrop-blur">
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#d4af37]">{item.tag}</p>
            <h3 className="text-lg font-semibold leading-tight">{item.look}</h3>
          </div>
          <Link
            href="/reservar"
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-black/60 px-3 py-1 text-[11px] font-semibold text-[#d4af37] transition hover:border-[#d4af37]/70 hover:text-[#f7f1e3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]"
          >
            Agendar
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function CatalogoPage() {
  return (
    <SectionShell
      eyebrow="Catálogo"
      title="Trabajos recientes y acabados faraónicos"
      description="Explora el portafolio real: fades, pigmentaciones, visos y estilos personalizados. Optimizado para mobile con cuadrícula moderna y scroll fluido."
      className="pb-20"
    >
      <div className="mb-6 flex flex-col gap-3 rounded-xl border border-[#d4af37]/20 bg-black/70 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#d8d0c0]">
          Galería curada con los últimos 14 servicios. Toca una imagen en móvil para verla a detalle.
        </p>
        <CTAButton href="/reservar" className="w-full justify-center sm:w-auto">
          Reserva tu estilo
        </CTAButton>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-[#d4af37]/15 bg-gradient-to-r from-black/80 via-[#1a0d12]/70 to-[#0a0a0a]/80 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">Experiencia premium</p>
          <p className="text-base text-[#f7f1e3]">
            ¿Te gustó alguno de estos acabados? Agenda tu hora y replicamos el look con detalles personalizados.
          </p>
        </div>
        <Link
          href="/servicios"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#0b0b0b]/70 px-5 py-2 text-sm font-semibold text-[#d4af37] transition hover:border-[#d4af37]/60 hover:text-[#f7f1e3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]"
        >
          Ver catálogo de servicios
          <span aria-hidden>→</span>
        </Link>
      </div>
    </SectionShell>
  );
}
