import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="hero-shell relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-[#0b0a08] px-4 pb-10 pt-12 text-[#f7f1e3] sm:pt-14 lg:min-h-[80vh] lg:px-10 lg:pb-12 lg:pt-[64px]">
      <div className="hero-backdrop" aria-hidden />
      <div className="hero-stripes" aria-hidden />
      <div className="hero-poles" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-center sm:gap-7 lg:max-w-6xl">
        <div className="fade-up relative flex items-center justify-center">
          <div className="absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,_rgba(237,223,186,0.28),_transparent_62%)] blur-2xl" aria-hidden />
          <div className="relative flex h-[260px] w-[260px] items-center justify-center rounded-full bg-gradient-to-b from-[#18130d] via-[#11100e] to-[#0b0908] p-3 shadow-[0_18px_42px_rgba(0,0,0,0.42)] ring-1 ring-[#d4af37]/65 sm:h-[282px] sm:w-[282px] lg:h-[300px] lg:w-[300px]">
            <div className="absolute inset-3 rounded-full border border-[#d4af37]/42" aria-hidden />
            <div className="absolute inset-1.5 rounded-full bg-[radial-gradient(circle_at_50%_36%,_rgba(246,233,204,0.3),_rgba(16,13,10,0.18)_60%)]" aria-hidden />
            <Image
              src="/logo.png"
              alt="Logotipo Faraón Barber"
              width={640}
              height={640}
              className="h-full w-full max-h-[240px] max-w-[240px] object-contain drop-shadow-[0_18px_42px_rgba(0,0,0,0.28)] sm:max-h-[260px] sm:max-w-[260px] lg:max-h-[278px] lg:max-w-[278px]"
              priority
            />
          </div>
        </div>

        <div className="fade-up flex flex-col items-center gap-5">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
            <CTAButton href="/reservar" className="w-full justify-center px-7 sm:w-auto">
              Reservar hora
            </CTAButton>
            <CTAButton href="/servicios" variant="ghost" className="w-full justify-center px-7 sm:w-auto">
              Explorar servicios
            </CTAButton>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/80 bg-[#14110f] px-3 py-2 text-[12px] font-semibold text-[#f7d774] shadow-[0_8px_22px_rgba(0,0,0,0.18)]">
              ★ 4.9/5 en reseñas (500+)
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f1e5cc]">
              Barbería · Chile · Venezuela
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
