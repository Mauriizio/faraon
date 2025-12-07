import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="hero-shell relative overflow-hidden bg-[#f7f4ec] pb-16 pt-14 sm:pt-16 lg:pt-24">
      <div className="hero-stripes" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.08),transparent_40%),radial-gradient(circle_at_20%_70%,rgba(74,31,47,0.08),transparent_36%),linear-gradient(180deg,#fefdf9_0%,#f7f4ec_45%,#efe9dd_100%)]" aria-hidden />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:px-8">
        <div className="fade-up order-1 w-full max-w-xl lg:order-none">
          <div className="relative mx-auto flex max-w-xs flex-col items-center gap-4 rounded-[28px] border border-[#d4af37]/40 bg-white/95 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.15)] lg:max-w-md">
            <div className="absolute -left-5 top-6 hidden h-20 w-8 rounded-full bg-[repeating-linear-gradient(135deg,#c1121f_0,#c1121f_10px,#ffffff_10px,#ffffff_20px,#1f3c88_20px,#1f3c88_30px)] shadow-[0_12px_24px_rgba(0,0,0,0.15)] lg:block" aria-hidden />
            <div className="absolute -right-5 top-6 hidden h-20 w-8 rounded-full bg-[repeating-linear-gradient(135deg,#c1121f_0,#c1121f_10px,#ffffff_10px,#ffffff_20px,#1f3c88_20px,#1f3c88_30px)] shadow-[0_12px_24px_rgba(0,0,0,0.15)] lg:block" aria-hidden />
            <Image
              src="/logo.png"
              alt="Logotipo Faraón Barber"
              width={520}
              height={520}
              className="h-full w-full max-h-[320px] max-w-[320px] object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.2)] sm:max-h-[360px] sm:max-w-[360px]"
              priority
            />
            <div className="flex flex-wrap items-center justify-center gap-3">
              <CTAButton href="/reservar" className="w-full justify-center sm:w-auto">
                Reservar hora
              </CTAButton>
              <CTAButton href="/servicios" variant="ghost" className="w-full justify-center sm:w-auto">
                Explorar servicios
              </CTAButton>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[#1b1b1b]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/60 bg-[#f7f4ec] px-3 py-2 text-[12px] font-semibold text-[#b8860b] shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                ★ 4.9/5 en reseñas (500+)
              </span>
              <span className="hidden h-6 w-px bg-[#d4af37]/40 sm:block" />
              <span className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-[#4a1f2f] sm:inline">
                Barbería · Chile · Venezuela
              </span>
            </div>
          </div>
        </div>

        <div className="fade-up relative w-full max-w-lg lg:max-w-xl">
          <div className="hero-poles" aria-hidden />
          <div className="hero-grid relative overflow-hidden rounded-[32px] border border-[#d4af37]/30 bg-white/40 ring-1 ring-[#d4af37]/30">
            <div className="halo" aria-hidden />
            <Image
              src="https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1600&auto=format&fit=crop"
              alt="Barbería el Faraón"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
