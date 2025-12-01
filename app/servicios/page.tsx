"use client";

import { useState } from "react";

import { CTAButton } from "../components/CTAButton";
import { SectionShell } from "../components/SectionShell";

const services = [
  {
    title: "Corte clásico adulto",
    price: "$12.000",
    duration: "30 min",
    details: "Corte clásico con contornos definidos y peinado con acabado limpio.",
  },
  {
    title: "Corte + barba",
    price: "$18.000",
    duration: "45 min",
    details: "Corte completo más perfilado de barba con navaja y toalla caliente.",
  },
  {
    title: "Corte para niños clásico",
    price: "$12.000",
    duration: "30 min",
    details: "Corte clásico para niños con estilizado suave y contornos cuidados.",
  },
  {
    title: "Corte con tijeras",
    price: "$14.000",
    duration: "40 min",
    details: "Trabajo a tijera para control de volumen, textura y movimiento natural.",
  },
  {
    title: "Corte degradados",
    price: "$14.000",
    duration: "40 min",
    details: "Fade progresivo con transición impecable y acabado mate.",
  },
  {
    title: "Cejas",
    price: "$10.000",
    duration: "15 min",
    details: "Perfilado de cejas con navaja y limpieza de contornos.",
  },
  {
    title: "Barba",
    price: "$8.000",
    duration: "20 min",
    details: "Arreglo de barba, line up y aplicación de aceite hidratante.",
  },
  {
    title: "Afeitado completo",
    price: "$16.000",
    duration: "30 min",
    details: "Afeitado tradicional con toalla caliente, navaja y bálsamo calmante.",
  },
  {
    title: "Visos platinados",
    price: "$45.000",
    duration: "90 min",
    details: "Proceso de decoloración y matizado para visos platinados uniformes.",
  },
  {
    title: "Ondulación permanente",
    price: "$40.000",
    duration: "90 min",
    details: "Ondas permanentes con productos de cuidado y definición.",
  },
  {
    title: "Tinte para las canas",
    price: "$30.000",
    duration: "60 min",
    details: "Cobertura de canas con tinte profesional y acabado natural.",
  },
  {
    title: "Alisado permanente keratina",
    price: "$40.000",
    duration: "120 min",
    details: "Alisado con keratina para control de frizz y brillo prolongado.",
  },
  {
    title: "Pigmentación de barba",
    price: "$10.000",
    duration: "25 min",
    details: "Pigmentación uniforme para densidad visual y contornos definidos.",
  },
  {
    title: "Corte desgradado full servicio + barba pigmentada",
    price: "$20.000",
    duration: "60 min",
    details: "Degradado completo con tratamiento, styling y pigmentación de barba incluida.",
  },
];

export default function ServiciosPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionShell
      eyebrow="Servicios"
      title="Catálogo premium"
      description="Selecciona tu estilo. Cada servicio combina técnica avanzada con detalles dorados para que salgas listo."
      className="pb-20"
    >
      <div className="space-y-4 md:hidden">
        {services.map((service, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={service.title}
              className="overflow-hidden rounded-xl border border-white/5 bg-gradient-to-r from-black/70 via-[#1a0d12]/60 to-[#0a0a0a]/80 shadow-lg shadow-black/40"
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-[#f7f1e3] transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70"
                aria-expanded={isOpen}
              >
                <span className="font-semibold">{service.title}</span>
                <span className="text-xl font-bold text-[#d4af37]">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="space-y-3 border-t border-white/5 px-4 py-4 text-[#f7f1e3]">
                  <div className="flex items-center justify-between text-sm text-[#d8d0c0]">
                    <span>{service.duration}</span>
                    <span className="rounded-full bg-[#d4af37]/15 px-3 py-1 text-xs font-semibold text-[#d4af37]">{service.price}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#d8d0c0]">{service.details}</p>
                  <CTAButton href="/reservar" className="w-full justify-center">
                    Reservar este servicio
                  </CTAButton>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="hidden gap-6 md:grid md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="glass-panel panel-hover flex h-full flex-col gap-4 rounded-2xl p-6 text-[#f7f1e3]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="section-title text-2xl font-semibold">{service.title}</h3>
                <p className="text-sm text-[#d8d0c0]">{service.duration}</p>
              </div>
              <span className="rounded-full bg-[#d4af37]/15 px-3 py-1 text-xs font-semibold text-[#d4af37]">{service.price}</span>
            </div>
            <p className="text-sm leading-relaxed text-[#d8d0c0]">{service.details}</p>
            <div className="mt-auto flex flex-wrap gap-2 text-xs text-[#d4af37]">
              <span className="rounded-full border border-[#d4af37]/30 px-3 py-1">Mobile-ready</span>
              <span className="rounded-full border border-[#d4af37]/30 px-3 py-1">Recordatorios</span>
              <span className="rounded-full border border-[#d4af37]/30 px-3 py-1">Pagos pronto</span>
            </div>
            <CTAButton href="/reservar" className="mt-3 w-full justify-center">
              Reservar este servicio
            </CTAButton>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
