import Image from "next/image";
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

const calendarPreview = [
  [
    { day: "01", status: "full" },
    { day: "02", status: "full" },
    { day: "03", status: "disponible", slots: 6 },
    { day: "04", status: "disponible", slots: 5 },
    { day: "05", status: "full" },
    { day: "06", status: "feriado" },
    { day: "07", status: "disponible", slots: 7 },
  ],
  [
    { day: "08", status: "disponible", slots: 5 },
    { day: "09", status: "disponible", slots: 9 },
    { day: "10", status: "disponible", slots: 6 },
    { day: "11", status: "disponible", slots: 8 },
    { day: "12", status: "full" },
    { day: "13", status: "disponible", slots: 4 },
    { day: "14", status: "disponible", slots: 9 },
  ],
  [
    { day: "15", status: "disponible", slots: 12 },
    { day: "16", status: "disponible", slots: 9 },
    { day: "17", status: "disponible", slots: 9 },
    { day: "18", status: "disponible", slots: 11 },
    { day: "19", status: "disponible", slots: 9 },
    { day: "20", status: "disponible", slots: 9 },
    { day: "21", status: "disponible", slots: 9 },
  ],
];

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />

      <SectionShell
        eyebrow="Portada pro"
        title="Portafolio en vivo y agenda rápida"
        description="Mira acabados reales y el mismo calendario interactivo que encontrarás al reservar."
        className="pt-4"
      >
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-hover relative overflow-hidden rounded-3xl border border-[#d4af37]/30 bg-[#0a0a0a]/70 shadow-[0_20px_45px_rgba(0,0,0,0.55)]">
            <Image
              src="https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=1600&auto=format&fit=crop"
              alt="Trabajo reciente de barbería con degradado"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-3 px-5 pb-5">
              <div className="rounded-2xl border border-[#d4af37]/30 bg-black/70 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
                <p className="section-title text-lg font-semibold text-[#f7f1e3]">Fade gourmet</p>
                <p className="text-sm text-[#e7decf]">Texturas pulidas, contornos nítidos y final con navaja caliente.</p>
              </div>
              <CTAButton href="/reservar" className="w-full justify-center sm:w-auto">
                Reservar este estilo
              </CTAButton>
            </div>
          </div>

          <div className="glass-panel panel-hover flex flex-col gap-4 rounded-3xl p-6">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="small-caps text-[11px] text-[#d4af37]">Disponibilidad demo</p>
                <p className="section-title text-xl font-semibold text-[#f7f1e3]">Calendario con más espacio</p>
              </div>
              <span className="rounded-full bg-[#0f0b0b] px-4 py-1 text-xs font-semibold text-[#f7f1e3] ring-1 ring-[#d4af37]/40">
                Dic 2025
              </span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold uppercase tracking-wide text-[#d8d0c0]">
              {["D", "L", "M", "X", "J", "V", "S"].map((label) => (
                <span key={label} className="py-1">
                  {label}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 rounded-2xl border border-[#d4af37]/25 bg-[#0f0f0f]/80 p-3 shadow-[0_10px_28px_rgba(0,0,0,0.4)]">
              {calendarPreview.flat().map((cell, index) => {
                const statusClasses = {
                  disponible: "bg-emerald-500/15 text-emerald-50 ring-1 ring-emerald-500/40",
                  full: "bg-amber-500/15 text-amber-50 ring-1 ring-amber-500/40",
                  feriado: "bg-rose-700/35 text-rose-50 ring-1 ring-rose-600/60",
                }[cell.status];

                const countLabel = cell.status === "disponible" ? cell.slots : cell.status === "feriado" ? "⛔" : "Full";

                return (
                  <div
                    key={`${cell.day}-${index}`}
                    className={`flex aspect-square min-h-[46px] flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-b from-black/70 via-[#0f0f0f] to-black/60 px-2 py-2 text-center text-[10px] font-semibold text-[#f7f1e3] shadow-[0_10px_20px_rgba(0,0,0,0.35)] ${statusClasses}`}
                  >
                    <span className="text-sm leading-none">{cell.day}</span>
                    <span className="rounded-full px-2 py-1 text-[9px] leading-none bg-black/30 ring-1 ring-inset ring-white/10">
                      {countLabel}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-[#d8d0c0]">
              La agenda real muestra estados en vivo. Aquí ves el mismo espaciado cómodo que aplicamos en Reservas.
            </p>
          </div>
        </div>
      </SectionShell>

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
