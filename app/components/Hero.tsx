import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="hero-shell relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-[#0b0a08] px-4 pb-10 pt-14 text-[#f7f1e3] sm:pt-16 lg:min-h-[86vh] lg:px-10 lg:pb-12 lg:pt-[72px]">
      <div className="hero-backdrop" aria-hidden />
      <div className="hero-stripes" aria-hidden />
      <div className="hero-poles" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-7 text-center sm:gap-8 lg:max-w-6xl">
        <div className="fade-up flex flex-col items-center gap-3 sm:gap-3.5">
          <span className="rounded-full border border-[#d4af37]/50 bg-[#181512]/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e7c97c] shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            Tradición · Estilo · Precisión
          </span>
          <h1 className="section-title text-[28px] font-bold leading-tight text-[#fdf7e8] sm:text-3xl lg:text-[34px]">
            Experiencia faraónica de barbería
          </h1>
          <p className="max-w-3xl text-[15px] text-[#e8dec8] sm:text-base">
            Una bienvenida de lujo donde la artesanía clásica se encuentra con la precisión moderna. Reserva sin esperas y luce tu mejor versión.
          </p>
        </div>

        <div className="fade-up relative flex items-center justify-center">
          <div className="absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,_rgba(212,175,55,0.12),_transparent_60%)] blur-2xl" aria-hidden />
          <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full bg-gradient-to-b from-[#15110f] via-[#0d0c0b] to-[#0b0908] p-3 shadow-[0_18px_42px_rgba(0,0,0,0.42)] ring-1 ring-[#d4af37]/60 sm:h-[300px] sm:w-[300px] lg:h-[320px] lg:w-[320px]">
            <div className="absolute inset-3 rounded-full border border-[#d4af37]/40" aria-hidden />
            <div className="absolute inset-1.5 rounded-full bg-[radial-gradient(circle_at_50%_36%,_rgba(231,201,124,0.24),_rgba(9,8,7,0.2)_58%)]" aria-hidden />
            <Image
              src="/logo.png"
              alt="Logotipo Faraón Barber"
              width={640}
              height={640}
              className="h-full w-full max-h-[280px] max-w-[280px] object-contain drop-shadow-[0_18px_42px_rgba(0,0,0,0.28)] sm:max-h-[300px] sm:max-w-[300px] lg:max-h-[320px] lg:max-w-[320px]"
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
