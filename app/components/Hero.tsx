import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="hero-shell relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0a08] px-4 pb-16 pt-20 text-[#f7f1e3] sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
      <div className="hero-backdrop" aria-hidden />
      <div className="hero-stripes" aria-hidden />
      <div className="hero-poles" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center sm:gap-12">
        <div className="fade-up flex flex-col items-center gap-3 sm:gap-4">
          <span className="rounded-full border border-[#d4af37]/45 bg-[#181512]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#e7c97c] shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            Tradición · Estilo · Precisión
          </span>
          <h1 className="section-title text-3xl font-bold leading-tight text-[#fdf7e8] sm:text-4xl lg:text-5xl">
            Barbería El Faraón
          </h1>
          <p className="max-w-3xl text-base text-[#e5dbc4] sm:text-lg">
            Un punto de encuentro donde la artesanía clásica se mezcla con un servicio cálido y moderno. Tu imagen en manos de maestros barberos.
          </p>
        </div>

        <div className="fade-up relative flex items-center justify-center">
          <div className="absolute inset-[-14%] rounded-full bg-[radial-gradient(circle,_rgba(212,175,55,0.12),_transparent_60%)] blur-2xl" aria-hidden />
          <div className="relative flex h-[320px] w-[320px] items-center justify-center rounded-full bg-gradient-to-b from-[#15110f] via-[#0d0c0b] to-[#0b0908] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-[#d4af37]/55 sm:h-[360px] sm:w-[360px] lg:h-[400px] lg:w-[400px]">
            <div className="absolute inset-4 rounded-full border border-[#d4af37]/35" aria-hidden />
            <div className="absolute inset-2 rounded-full bg-[radial-gradient(circle_at_50%_30%,_rgba(231,201,124,0.22),_transparent_48%)]" aria-hidden />
            <Image
              src="/logo.png"
              alt="Logotipo Faraón Barber"
              width={640}
              height={640}
              className="h-full w-full max-h-[320px] max-w-[320px] object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:max-h-[360px] sm:max-w-[360px] lg:max-h-[400px] lg:max-w-[400px]"
              priority
            />
          </div>
        </div>

        <div className="fade-up flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f1e5cc]">
              Barbería · Chile · Venezuela
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
