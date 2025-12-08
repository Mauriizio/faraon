import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="hero-shell relative flex min-h-[78vh] items-center justify-center overflow-hidden bg-[#0b0a08] px-4 pb-10 pt-10 text-[#f7f1e3] sm:pt-14 lg:min-h-[76vh] lg:px-10 lg:pb-12 lg:pt-[60px]">
      <div className="hero-backdrop" aria-hidden />
      <div className="hero-stripes" aria-hidden />
      <div className="hero-poles" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-center sm:gap-7 lg:max-w-6xl">
        <div className="fade-up relative flex items-center justify-center">
          <div className="absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,_rgba(237,223,186,0.28),_transparent_62%)] blur-2xl" aria-hidden />
          <div className="relative flex h-[248px] w-[248px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.82)_0%,_rgba(244,214,156,0.56)_46%,_rgba(17,14,12,0.95)_78%)] p-3 shadow-[0_18px_42px_rgba(0,0,0,0.42)] ring-1 ring-[#d4af37]/70 sm:h-[268px] sm:w-[268px] lg:h-[286px] lg:w-[286px]">
            <div className="absolute inset-3 rounded-full border border-[#d4af37]/48" aria-hidden />
            <div className="absolute inset-1.5 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.82)_0%,_rgba(240,215,165,0.52)_45%,_rgba(0,0,0,0)_72%)]" aria-hidden />
            <div className="absolute inset-[14%] rounded-full bg-white/82 shadow-[0_14px_28px_rgba(0,0,0,0.24)]" aria-hidden />
            <Image
              src="/logo.png"
              alt="Logotipo Faraón Barber"
              width={640}
              height={640}
              className="h-full w-full max-h-[224px] max-w-[224px] object-contain drop-shadow-[0_18px_42px_rgba(0,0,0,0.32)] sm:max-h-[240px] sm:max-w-[240px] lg:max-h-[258px] lg:max-w-[258px]"
              priority
            />
          </div>
        </div>

        <div className="fade-up flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#201710]">
            {["Tradición", "Estilo", "Precisión"].map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-[#f8eedd] px-3.5 py-2 text-[#201710] shadow-[0_10px_26px_rgba(0,0,0,0.18)] ring-1 ring-[#d4af37]/45"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
            <CTAButton href="/reservar" className="w-[72%] max-w-[260px] justify-center px-5 sm:w-auto sm:px-7">
              Reservar hora
            </CTAButton>
            <CTAButton
              href="/servicios"
              variant="ghost"
              className="w-[72%] max-w-[260px] justify-center px-5 sm:w-auto sm:px-7"
            >
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
