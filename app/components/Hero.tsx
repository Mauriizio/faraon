import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-10 sm:pt-14 lg:pt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" aria-hidden />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="fade-up space-y-6">
          <span className="small-caps inline-flex items-center gap-2 text-xs text-[#d4af37]">
            <span className="h-px w-10 bg-[#d4af37]/70" aria-hidden />
            Estilo faraón · Mobile-first
          </span>
          <div className="space-y-4">
            <h1 className="section-title text-4xl font-semibold text-[#f7f1e3] sm:text-5xl lg:text-6xl">
              El corte de los reyes modernos
            </h1>
            <p className="text-base leading-relaxed text-[#d8d0c0] sm:text-lg">
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
          <div className="flex items-center gap-6 text-sm text-[#d8d0c0]">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#0f0f0f] text-[#d4af37]">
                ★
              </span>
              <p>
                4.9/5 en reseñas <span className="text-[#d4af37]">(500+)</span>
              </p>
            </div>
            <div className="hidden h-9 w-px bg-[#d4af37]/30 sm:block" />
            <p className="hidden text-sm text-[#d8d0c0] sm:block">Cortes rápidos · Diseños de autor · Ritual premium</p>
          </div>
        </div>

        <div className="relative fade-up lg:justify-self-end">
          <div className="hero-grid relative overflow-hidden rounded-3xl">
            <div className="halo" aria-hidden />
            <Image
              src="https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1200&auto=format&fit=crop"
              alt="Barbero trabajando con precisión"
              width={640}
              height={760}
              className="h-full w-full object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" aria-hidden />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-[#d4af37]/25 bg-[#0a0a0a]/80 p-4 text-sm text-[#f7f1e3] backdrop-blur">
              <p className="font-semibold">Precision Fade · 35 minutos</p>
              <p className="text-xs text-[#d8d0c0]">Agendas flexibles, recordatorios automáticos y pago en la silla próximamente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
