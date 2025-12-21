import Image from "next/image";
import { CTAButton } from "./components/CTAButton";
import { Hero } from "./components/Hero";
import { SectionShell } from "./components/SectionShell";

const featuredServices = [
  {
    title: "Corte degradados",
    price: "$14.000",
    duration: "40 min",
    description: "Fade progresivo con transición impecable y acabado mate.",
  },
  {
    title: "Corte + barba",
    price: "$18.000",
    duration: "45 min",
    description: "Corte completo más perfilado de barba con navaja y toalla caliente.",
  },
  {
    title: "Tinte para las canas",
    price: "$30.000",
    duration: "60 min",
    description: "Cobertura de canas con tinte profesional y acabado natural.",
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
        eyebrow="El Faraón en acción"
        title="Portafolio en vivo y agenda rápida"
        description="Mira acabados reales de mis trabajos en el catalogo."
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
                <p className="section-title text-lg font-semibold text-[#f7f1e3]">Servicio Gourmet</p>
                <p className="text-sm text-[#e7decf]">Texturas pulidas, contornos nítidos y final con navaja caliente.</p>
              </div>
              <CTAButton href="/servicios" className="w-full justify-center sm:w-auto">
                Ver Catalogo completo
              </CTAButton>
            </div>
          </div>

          <div className="glass-panel panel-hover flex flex-col gap-4 rounded-3xl p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
              <div>
                <p className="small-caps text-[11px] text-[#d4af37]">Disponibilidad</p>
                <p className="section-title text-xl font-semibold text-[#f7f1e3]">Los dias en verde tengo horas disponibles</p>
              </div>
              <CTAButton
                href="/reservar"
                variant="ghost"
                className="w-full justify-center px-4 py-2.5 text-[13px] sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
              >
                Abrir reservas
              </CTAButton>
            </div>
            <div className="w-full overflow-hidden">
              <div className="space-y-2.5 sm:space-y-3">
                <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-semibold uppercase tracking-wide text-[#d8d0c0] sm:gap-2 sm:text-[11px]">
                  {["D", "L", "M", "X", "J", "V", "S"].map((label) => (
                    <span key={label} className="py-1">
                      {label}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1.5 rounded-2xl border border-[#d4af37]/25 bg-[#0f0f0f]/80 p-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.4)] sm:gap-2.5 sm:p-3.5">
                  {calendarPreview.flat().map((cell, index) => {
                    const statusClasses = {
                      disponible: "bg-emerald-500/12 text-emerald-50 ring-1 ring-emerald-500/35",
                      full: "bg-amber-500/12 text-amber-50 ring-1 ring-amber-500/35",
                      feriado: "bg-rose-700/30 text-rose-50 ring-1 ring-rose-600/55",
                    }[cell.status];

                    const countLabel = cell.status === "disponible" ? cell.slots : cell.status === "feriado" ? "⛔" : "Full";

                    return (
                      <div
                        key={`${cell.day}-${index}`}
                        className={`flex aspect-square min-h-[44px] min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl bg-gradient-to-b from-black/70 via-[#0f0f0f] to-black/60 px-1.5 py-1.5 text-center text-[10px] font-semibold text-[#f7f1e3] shadow-[0_10px_18px_rgba(0,0,0,0.3)] sm:min-h-[54px] sm:rounded-2xl sm:px-2.5 sm:py-2.5 sm:text-[11px] ${statusClasses}`}
                      >
                        <span className="text-sm leading-none sm:text-base">{cell.day}</span>
                        <span className="rounded-full bg-black/30 px-2 py-0.5 text-[9px] leading-none ring-1 ring-inset ring-white/10 sm:px-2.5 sm:py-1 sm:text-[10px]">
                          {countLabel}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <p className="text-sm text-[#d8d0c0]">
              Dale click al botón para abrir la agenda completa con horarios en vivo, y confirmar tu reserva al instante.
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
        title="Reserva directa en la sección de agenda"
        description="Abre la agenda dedicada para ver disponibilidad en vivo, seleccionar servicios y confirmar tus datos con el calendario amplio."
      >
        <div className="glass-panel panel-hover flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="space-y-2 text-left">
            <p className="section-title text-2xl font-semibold text-[#f7f1e3]">Agenda completa en Reservas</p>
            <p className="text-sm leading-relaxed text-[#d8d0c0]">
              El calendario detallado, con navegación de meses y horarios, vive en la sección de Reservas. Toca el botón para abrirlo.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <CTAButton
              href="/reservar"
              className="w-full justify-center px-4 py-2.5 text-[13px] sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
            >
              Ir a Reservas
            </CTAButton>
            <CTAButton
              href="/servicios"
              variant="ghost"
              className="w-full justify-center px-4 py-2.5 text-[13px] sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
            >
              Ver servicios
            </CTAButton>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
