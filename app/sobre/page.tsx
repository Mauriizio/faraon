import { CTAButton } from "../components/CTAButton";
import { SectionShell } from "../components/SectionShell";

const milestones = [
  {
    year: "2010",
    title: "Raíces en Venezuela",
    detail: "Moisés Sánchez comienza a cortar en Barquisimeto. De la barbería de barrio a perfilar fades de autor.",
  },
  {
    year: "2017",
    title: "Salto a Chile",
    detail: "Llega a Santiago y abre agenda propia. Se convierte en referente de la comunidad venezolana con técnica y calidez.",
  },
  {
    year: "2024",
    title: "Establecimiento de Faraón Barber",
    detail: "Inaugura su propio estudio en Santiago, combinando lujo urbano con tradición venezolana.",
  },
];

export default function SobrePage() {
  return (
    <SectionShell
      eyebrow="Historia"
      title="Detrás de la navaja"
      description="Faraón Barber es la mezcla entre elegancia antigua y ritmo urbano. Cada corte nace de la precisión y la hospitalidad."
    >
      <div className="glass-panel grid gap-6 rounded-2xl p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="text-base leading-relaxed text-[#d8d0c0]">
            Soy Moisés Sánchez, barbero venezolano. Empecé en 2010 en mi barrio en Barquisimeto y en 2017 me vine a Chile para
            seguir cortando. Llevo todos estos años puliendo fades, barbas y perfiles con la misma obsesión: que te vayas con
            confianza y con un estilo que hable de ti.
          </p>
          <p className="text-base leading-relaxed text-[#d8d0c0]">
            El estudio en Santiago está pensado como refugio. Luces bajas, detalles dorados y aromas cálidos que recuerdan a mi
            tierra. Aquí mezclo la técnica clásica que aprendí en Venezuela con las tendencias chilenas para darte un servicio
            honesto, cercano y profesional.
          </p>
          <p className="text-base leading-relaxed text-[#d8d0c0]">
            Mi motivación es sencilla: cada corte es una historia de migración, de resiliencia y de orgullo. Reservas en segundos,
            atención puntual y resultados que te recuerden por qué vuelves.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-[#d4af37]">
            <span className="rounded-full border border-[#d4af37]/30 px-3 py-1">Trabajo Certificado</span>
            <span className="rounded-full border border-[#d4af37]/30 px-3 py-1">Diseños Personalizados</span>
            <span className="rounded-full border border-[#d4af37]/30 px-3 py-1">Servicio Profesional</span>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton href="/reservar">Reserva tu experiencia</CTAButton>
            <CTAButton href="/servicios" variant="ghost" className="w-full sm:w-auto">
              Ver catálogo
            </CTAButton>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-[#d4af37]/25 bg-[#0a0a0a]/70 p-6">
          <h3 className="section-title text-2xl font-semibold text-[#f7f1e3]">Hitos</h3>
          <div className="space-y-4">
            {milestones.map((item) => (
              <div key={item.year} className="flex gap-4 rounded-xl border border-[#d4af37]/20 bg-[#0f0f0f]/80 p-4">
                <div className="text-lg font-semibold text-[#d4af37]">{item.year}</div>
                <div>
                  <p className="text-sm font-semibold text-[#f7f1e3]">{item.title}</p>
                  <p className="text-sm text-[#d8d0c0]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-[#4a1f2f]/40 bg-[#4a1f2f]/20 p-4 text-sm text-[#f7f1e3]">
            <p className="font-semibold">UNA HISTORIA DE SUPERACIÓN</p>
            <p className="text-[#d8d0c0]">
              Desde mis inicios en Venezuela hasta establecer Faraón Barber en Chile, cada paso ha sido un testimonio de
              dedicación y pasión por este arte.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
