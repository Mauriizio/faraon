import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="hero-shell relative flex min-h-screen items-center overflow-hidden bg-[#f8f2e6] pb-16 pt-20 text-[#1b1b1b] sm:pt-20 lg:pb-24 lg:pt-24">
      <div className="hero-stripes" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf8f0] via-[#f7f1e6] to-[#f1e6d5]" aria-hidden />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="fade-up relative flex w-full flex-col items-center gap-8 rounded-[36px] border border-[#d4af37]/55 bg-white/94 px-7 py-10 shadow-[0_18px_40px_rgba(0,0,0,0.1)] sm:px-12 sm:py-14">
          <div className="hero-poles" aria-hidden />
          <Image
            src="/logo.png"
            alt="Logotipo Faraón Barber"
            width={640}
            height={640}
            className="h-full w-full max-h-[420px] max-w-[420px] object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:max-h-[480px] sm:max-w-[480px]"
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
