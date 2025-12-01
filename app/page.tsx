import { CTAButton } from "./components/CTAButton";
import { Hero } from "./components/Hero";
import { SectionShell } from "./components/SectionShell";

const featuredServices = [
  {
    title: "Corte Faraón",
    price: "$22.000",
    duration: "45 min",
    description: "Degradé de precisión con contornos nítidos y finalización con vapor de eucalipto.",
  },
  {
    title: "Afeitado Real",
    price: "$18.000",
    duration: "30 min",
    description: "Toalla caliente, espuma premium y aftershave calmante con aroma especiado.",
  },
  {
    title: "Shape Up Urbano",
    price: "$15.000",
    duration: "25 min",
    description: "Perfilado rápido para mantener líneas definidas entre cortes completos.",
  },
];

const highlights = [
  {
    title: "Agenda en segundos",
    copy: "Mobile-first y sin fricción. Diseñado para reservar desde tu teléfono en un par de taps.",
  },
  {
    title: "Experiencia premium",
    copy: "Ambiente boutique, aromas cálidos y música curada. Cada visita es un ritual de precisión.",
  },
  {
    title: "Diseños personalizados",
    copy: "Fades artísticos, texturas modernas y asesoría según tu estilo y tipo de cabello.",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />

      <SectionShell
        id="servicios"
        eyebrow="Servicios destacados"
        title="Cortes precisos, acabados dorados"
        description="Conoce los servicios favoritos de la casa. Cada uno está optimizado para lucir impecable y salir a dominar la ciudad."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.map((service) => (
            <article
              key={service.title}
              className="glass-panel panel-hover relative flex flex-col gap-4 rounded-2xl p-6 text-[#f7f1e3]"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="section-title text-2xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-[#d8d0c0]">{service.duration}</p>
                </div>
                <span className="rounded-full bg-[#4a1f2f]/60 px-3 py-1 text-xs font-semibold text-[#f7f1e3]">
                  {service.price}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#d8d0c0]">{service.description}</p>
              <CTAButton href="/reservar" variant="ghost" className="mt-auto w-full justify-center">
                Reservar este corte
              </CTAButton>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="reservar"
        eyebrow="Reserva"
        title="Tu hora siempre accesible"
        description="Pensado para agendar desde el celular. Mantén tu horario favorito y recibe recordatorios automáticos." 
      >
        <div className="glass-panel panel-hover grid gap-6 rounded-2xl p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h3 className="section-title text-3xl font-semibold text-[#f7f1e3]">Reserva en menos de 1 minuto</h3>
            <p className="text-base leading-relaxed text-[#d8d0c0]">
              Próximamente podrás elegir tu barbero, pagar online y recibir recordatorios automáticos. Mientras tanto, agenda con
              un toque y asegura tu lugar.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-xl border border-[#d4af37]/20 bg-[#0b0b0b]/80 p-4 text-sm text-[#f7f1e3]">
                  <p className="font-semibold text-[#d4af37]">{item.title}</p>
                  <p className="text-[#d8d0c0]">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-[#d4af37]/30 bg-[#0a0a0a]/70 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.55)]">
            <label className="text-sm font-semibold text-[#f7f1e3]">
              Selecciona día
              <input
                type="date"
                className="mt-2 w-full rounded-lg border border-[#d4af37]/30 bg-[#0f0f0f] px-3 py-2 text-sm text-[#f7f1e3] focus:border-[#d4af37] focus:outline-none"
              />
            </label>
            <label className="text-sm font-semibold text-[#f7f1e3]">
              Preferencia de horario
              <select
                className="mt-2 w-full rounded-lg border border-[#d4af37]/30 bg-[#0f0f0f] px-3 py-2 text-sm text-[#f7f1e3] focus:border-[#d4af37] focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona un horario
                </option>
                <option>Mañana (10:00 - 12:30)</option>
                <option>Tarde (13:00 - 17:00)</option>
                <option>Noche (17:30 - 20:00)</option>
              </select>
            </label>
            <label className="text-sm font-semibold text-[#f7f1e3]">
              Servicio
              <select
                className="mt-2 w-full rounded-lg border border-[#d4af37]/30 bg-[#0f0f0f] px-3 py-2 text-sm text-[#f7f1e3] focus:border-[#d4af37] focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Elige un servicio
                </option>
                {featuredServices.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <CTAButton className="w-full justify-center">Confirmar interés</CTAButton>
            <p className="text-xs text-[#d8d0c0]">
              Recibirás un enlace de confirmación en breve. Próximamente podrás pagar y reagendar desde la misma app.
            </p>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
