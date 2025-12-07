import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="hero-shell relative overflow-hidden pb-16 pt-12 sm:pt-16 lg:pt-24">
      <div className="hero-stripes" aria-hidden />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#0a0a0a]/95" aria-hidden />
        <Image
          src="https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1600&auto=format&fit=crop"
          alt="Logo y símbolos clásicos de barbería"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center opacity-90"
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="fade-up space-y-6">
          <span className="small-caps inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs text-[#d4af37] ring-1 ring-[#d4af37]/35">
            <span className="h-px w-10 bg-[#d4af37]/70" aria-hidden />
            Estilo faraón · Mobile-first
          </span>
          <div className="space-y-4">
            <h1 className="section-title text-4xl font-semibold text-[#f7f1e3] sm:text-5xl lg:text-6xl">
              El corte de los reyes modernos
            </h1>
            <p className="text-base leading-relaxed text-[#e7decf] sm:text-lg">
              Barbería boutique inspirada en el lujo egipcio, pensada para tu día a día. Agenda en segundos, luce impecable
              siempre.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton href="/reservar">Reservar ahora</CTAButton>
            <CTAButton href="/servicios" variant="ghost" className="w-full sm:w-auto">
              Explorar servicios
            </CTAButton>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#f2e8d8]">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/50 bg-black/60 text-[#d4af37] shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
                ★
              </span>
              <p className="font-semibold">
                4.9/5 en reseñas <span className="text-[#d4af37]">(500+)</span>
              </p>
            </div>
            <div className="hidden h-9 w-px bg-[#d4af37]/40 sm:block" />
            <p className="hidden text-sm text-[#e7decf] sm:block">Cortes rápidos · Diseños de autor · Ritual premium</p>
          </div>
        </div>

        <div className="relative fade-up">
          <div className="hero-grid relative overflow-hidden rounded-3xl ring-1 ring-[#d4af37]/35">
            <div className="halo" aria-hidden />
            <Image
              src="/logo.png"
              alt="Logotipo Faraón Barber"
              width={640}
              height={760}
              className="h-full w-full object-contain object-center bg-gradient-to-b from-black/70 via-black/60 to-transparent p-8"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-r from-[#4a1f2f]/75 via-black/75 to-[#1b1b1b]/70 p-4 text-sm text-[#f7f1e3]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#c1121f] via-[#ffffff] to-[#1f3c88] text-lg font-black text-black shadow-[0_10px_30px_rgba(0,0,0,0.45)] ring-2 ring-[#d4af37]/50">
                ✂
              </span>
              <div>
                <p className="font-semibold">Trabajos con sello dorado</p>
                <p className="text-xs text-[#e7decf]">Fade limpio, navaja precisa y detalles artesanales en cada servicio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
