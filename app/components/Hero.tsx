import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="hero-shell relative overflow-hidden bg-white pb-16 pt-14 text-[#1b1b1b] sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="hero-stripes" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#f5f0e6]" aria-hidden />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="fade-up relative flex w-full flex-col items-center gap-6 rounded-[32px] border border-[#d4af37]/50 bg-white/95 px-6 py-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)] sm:px-10 sm:py-12">
          <div className="hero-poles" aria-hidden />
          <Image
            src="/logo.png"
            alt="Logotipo Faraón Barber"
            width={640}
            height={640}
            className="h-full w-full max-h-[360px] max-w-[360px] object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.15)] sm:max-h-[420px] sm:max-w-[420px]"
            priority
          />

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <CTAButton href="/reservar" className="w-full justify-center sm:w-auto">
              Reservar hora
            </CTAButton>
            <CTAButton href="/servicios" variant="ghost" className="w-full justify-center sm:w-auto">
              Explorar servicios
            </CTAButton>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/70 bg-[#f7f4ec] px-3 py-2 text-[12px] font-semibold text-[#b8860b] shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
              ★ 4.9/5 en reseñas (500+)
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4a1f2f]">
              Barbería · Chile · Venezuela
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
