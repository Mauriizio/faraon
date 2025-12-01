import { CTAButton } from "../components/CTAButton";
import { SectionShell } from "../components/SectionShell";

const milestones = [
  {
    year: "2012",
    title: "Inicio en el barrio",
    detail: "Tijeras en mano y un sueño: ofrecer cortes que mezclaran tradición con street style.",
  },
  {
    year: "2017",
    title: "Estudio boutique",
    detail: "Primer local con concepto faraón: luz cálida, aromas especiados y experiencia ritual.",
  },
  {
    year: "2024",
    title: "Mobile-first",
    detail: "Agenda digital, recordatorios automáticos y diseño pensado para reservar desde el celular.",
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
            Soy Karim, barbero desde hace más de una década. Aprendí en barberías clásicas, perfeccioné fades con maestros
            latinos y ahora llevo el estilo faraón a cada cliente. Me obsesionan las líneas limpias, las texturas y que cada
            visita se sienta como un ritual.
          </p>
          <p className="text-base leading-relaxed text-[#d8d0c0]">
            El estudio está diseñado para ser tu refugio: luces bajas, detalles dorados, aroma a madera y playlists curadas. Todo
            listo para que reserves en segundos y salgas con el look que te hace destacar.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-[#d4af37]">
            <span className="rounded-full border border-[#d4af37]/30 px-3 py-1">Cinzel + Lato</span>
            <span className="rounded-full border border-[#d4af37]/30 px-3 py-1">Diseño Faraón</span>
            <span className="rounded-full border border-[#d4af37]/30 px-3 py-1">Animaciones suaves</span>
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
            <p className="font-semibold">Estilo faraón</p>
            <p className="text-[#d8d0c0]">
              Una paleta negra, dorada y granate para un ambiente de lujo urbano. Interacciones suaves y accesibles en cualquier
              dispositivo.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
