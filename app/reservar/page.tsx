"use client";

import { useMemo, useState } from "react";
import { CTAButton } from "../components/CTAButton";
import { SectionShell } from "../components/SectionShell";

type AvailabilityStatus = "disponible" | "sin-cupos" | "feriado";

type DayAvailability = {
  date: Date;
  key: string;
  label: string;
  status: AvailabilityStatus;
  availableSlots: string[];
};

const workingHours = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const fixedHolidays: Array<{ month: number; day: number; label: string }> = [
  { month: 1, day: 1, label: "Año Nuevo" },
  { month: 5, day: 1, label: "Día del Trabajador" },
  { month: 5, day: 21, label: "Glorias Navales" },
  { month: 6, day: 29, label: "San Pedro y San Pablo" },
  { month: 7, day: 16, label: "Virgen del Carmen" },
  { month: 8, day: 15, label: "Asunción" },
  { month: 9, day: 18, label: "Independencia" },
  { month: 9, day: 19, label: "Glorias del Ejército" },
  { month: 10, day: 12, label: "Encuentro de Dos Mundos" },
  { month: 10, day: 31, label: "Día de las Iglesias Evangélicas" },
  { month: 11, day: 1, label: "Todos los Santos" },
  { month: 12, day: 8, label: "Inmaculada Concepción" },
  { month: 12, day: 25, label: "Navidad" },
];

function buildHolidaySet(start: Date, days: number) {
  const years = new Set<number>();
  years.add(start.getFullYear());

  const end = new Date(start);
  end.setDate(end.getDate() + days);
  years.add(end.getFullYear());

  const set = new Set<string>();
  years.forEach((year) => {
    fixedHolidays.forEach(({ month, day }) => {
      const key = new Date(Date.UTC(year, month - 1, day)).toISOString().split("T")[0];
      set.add(key);
    });
  });

  return set;
}

const bookedSlots: Record<string, string[]> = {
  // Ejemplo de reservas existentes para ilustrar estados.
};

const services = [
  "Corte clásico adulto",
  "Corte + barba",
  "Corte para niños clásico",
  "Corte con tijeras",
  "Corte degradados",
  "Cejas",
  "Barba",
  "Afeitado completo",
  "Visos platinados",
  "Ondulación permanente",
  "Tinte para las canas",
  "Alisado permanente keratina",
  "Pigmentación de barba",
  "Corte desgradado full servicio + barba pigmentada",
];

const weekDayLabels = ["D", "L", "M", "X", "J", "V", "S"];

const calendarRangeDays = 35;

function buildAvailability(startDate: Date, holidaySet: Set<string>): DayAvailability[] {
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);

  return Array.from({ length: calendarRangeDays }, (_, idx) => {
    const date = new Date(start);
    date.setDate(start.getDate() + idx);
    const key = date.toISOString().split("T")[0];

    const dayOfWeek = date.getDay();
    const isSunday = dayOfWeek === 0;
    const isHoliday = holidaySet.has(key);
    const blockedDay = isSunday || isHoliday;

    const existing = bookedSlots[key] ?? [];
    const availableSlots = blockedDay
      ? []
      : workingHours.filter((slot) => !existing.includes(slot));

    let status: AvailabilityStatus = "disponible";
    if (blockedDay) status = "feriado";
    else if (availableSlots.length === 0) status = "sin-cupos";

    const label = date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "short",
    });

    return { date, key, label, status, availableSlots };
  });
}

function statusBadgeClasses(status: AvailabilityStatus) {
  if (status === "disponible") return "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-500/40";
  if (status === "sin-cupos") return "bg-amber-500/15 text-amber-100 ring-1 ring-amber-500/40";
  return "bg-rose-700/30 text-rose-100 ring-1 ring-rose-700/60";
}

function statusColor(status: AvailabilityStatus) {
  if (status === "disponible") return "bg-emerald-500/20 text-emerald-100 ring-1 ring-emerald-500/40";
  if (status === "sin-cupos") return "bg-amber-500/20 text-amber-50 ring-1 ring-amber-500/40";
  return "bg-rose-700/50 text-rose-50 ring-1 ring-rose-700/70";
}

export default function ReservarPage() {
  const startOfCalendar = useMemo(() => {
    const base = new Date();
    base.setHours(0, 0, 0, 0);
    base.setDate(base.getDate() - base.getDay());
    return base;
  }, []);

  const holidaySet = useMemo(() => buildHolidaySet(startOfCalendar, calendarRangeDays), [startOfCalendar]);

  const availability = useMemo(() => buildAvailability(startOfCalendar, holidaySet), [holidaySet, startOfCalendar]);
  const availabilityMap = useMemo(() => {
    const map = new Map<string, DayAvailability>();
    availability.forEach((day) => map.set(day.key, day));
    return map;
  }, [availability]);

  const defaultDateKey = useMemo(
    () => availability.find((day) => day.status === "disponible")?.key ?? availability[0]?.key,
    [availability],
  );

  const calendarDays = useMemo(() => {
    return Array.from({ length: calendarRangeDays }, (_, idx) => {
      const date = new Date(startOfCalendar);
      date.setDate(startOfCalendar.getDate() + idx);
      const key = date.toISOString().split("T")[0];
      const existing = availabilityMap.get(key);

      if (existing) return existing;

      const isSunday = date.getDay() === 0;
      const isHoliday = holidaySet.has(key);
      return {
        date,
        key,
        label: date.toLocaleDateString("es-ES", { day: "2-digit", month: "short" }),
        status: isSunday || isHoliday ? "feriado" : "sin-cupos",
        availableSlots: [],
      } satisfies DayAvailability;
    });
  }, [availabilityMap, holidaySet, startOfCalendar]);

  const weeks = useMemo(() => {
    const chunks: DayAvailability[][] = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
      chunks.push(calendarDays.slice(i, i + 7));
    }
    return chunks;
  }, [calendarDays]);

  const [selectedDateKey, setSelectedDateKey] = useState<string | undefined>(defaultDateKey);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [service, setService] = useState(services[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const selectedDay = selectedDateKey
    ? availabilityMap.get(selectedDateKey) ?? calendarDays.find((day) => day.key === selectedDateKey)
    : undefined;

  const isSubmitDisabled =
    !selectedDay ||
    !selectedSlot ||
    !name.trim() ||
    !email.trim() ||
    !phone.trim() ||
    selectedDay.status !== "disponible";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitDisabled || !selectedDay || !selectedSlot) return;

    setSubmitting(true);
    setStatusMessage("");
    setStatusType(null);

    try {
      const response = await fetch("/api/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          date: selectedDay.key,
          slot: selectedSlot,
        }),
      });

      if (!response.ok) throw new Error("No se pudo registrar la reserva");
      const result = await response.json();
      setStatusMessage(result.message ?? "Reserva registrada. Enviaremos la confirmación por correo.");
      setStatusType("success");
      setSelectedSlot(null);
    } catch {
      setStatusMessage("Hubo un problema al enviar la reserva. Intenta nuevamente.");
      setStatusType("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SectionShell
      eyebrow="Reserva principal"
      title="Agenda profesional con disponibilidad en vivo"
      description="Calendario móvil-first que resalta horarios disponibles en verde y bloquea feriados o cupos ocupados en rojo. Sin login, solo tus datos esenciales."
      className="pb-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="glass-panel panel-hover flex flex-col gap-6 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="small-caps text-xs text-[#d4af37]">Disponibilidad</p>
              <h3 className="section-title text-2xl font-semibold text-[#f7f1e3]">
                Selecciona la fecha y el horario
              </h3>
            </div>
            <span className="rounded-full bg-[#0f0b0b] px-4 py-2 text-xs font-semibold text-[#d4af37] ring-1 ring-[#d4af37]/30">
              Lun a Sáb · 09:00 - 18:00
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-[#d8d0c0]">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0f0b0b] px-3 py-1 ring-1 ring-[#d4af37]/20">
              <span className="h-3 w-3 rounded-full bg-emerald-400/80 ring-2 ring-emerald-500/40" />
              Disponible
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0f0b0b] px-3 py-1 ring-1 ring-[#d4af37]/20">
              <span className="h-3 w-3 rounded-full bg-amber-400/80 ring-2 ring-amber-500/40" />
              Sin cupos / bloqueado
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0f0b0b] px-3 py-1 ring-1 ring-[#d4af37]/20">
              <span className="h-3 w-3 rounded-full bg-rose-600 ring-2 ring-rose-700/70" />
              Feriado / domingo (rojo)
            </span>
          </div>

          <div className="rounded-2xl border border-[#d4af37]/25 bg-[#0b0b0b]/80 p-4 sm:p-5">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#d4af37]">Calendario</p>
                <p className="text-sm text-[#d8d0c0]">Vista compacta 5 semanas · toca un día para ver horarios.</p>
              </div>
              <span className="rounded-full bg-[#0f0b0b] px-3 py-1 text-xs font-semibold text-[#f7f1e3] ring-1 ring-[#d4af37]/30">
                {selectedDay?.date.toLocaleDateString("es-ES", { month: "long", year: "numeric" })}
              </span>
            </div>

            <div className="mb-2 grid grid-cols-7 text-center text-[11px] font-semibold uppercase tracking-wide text-[#d8d0c0]">
              {weekDayLabels.map((label) => (
                <span key={label} className="py-1">
                  {label}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1.5 overflow-hidden sm:gap-2">
              {weeks.map((week, idx) => (
                <div key={idx} className="contents">
                  {week.map((day) => {
                    const isActive = day.key === selectedDateKey;
                    const disabled = day.status !== "disponible";
                    return (
                      <button
                        key={day.key}
                        onClick={() => {
                          if (disabled) return;
                          setSelectedDateKey(day.key);
                          setSelectedSlot(null);
                        }}
                        disabled={disabled}
                        className={`group flex aspect-[6/7] min-h-[54px] w-full flex-col items-center justify-center gap-1 rounded-xl px-1.5 py-1.5 text-center text-[11px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] ${
                          statusColor(day.status)
                        } ${isActive ? "shadow-[0_0_0_1px_rgba(212,175,55,0.6),0_10px_30px_rgba(0,0,0,0.35)]" : "shadow-[0_10px_30px_rgba(0,0,0,0.25)]"} ${
                          disabled ? "opacity-70" : "hover:scale-[1.02]"
                        }`}
                        aria-label={`Día ${day.label} ${day.status === "disponible" ? "disponible" : "no disponible"}`}
                      >
                        <span className="text-lg leading-none text-[#f7f1e3]">
                          {day.date.getDate().toString().padStart(2, "0")}
                        </span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusBadgeClasses(day.status)}`}>
                          {day.status === "disponible"
                            ? `${day.availableSlots.length} cupos`
                            : day.status === "feriado"
                              ? "Feriado"
                              : "Ocupado"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#d4af37]/30 bg-[#0b0b0b]/80 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-[#f7f1e3]">Horarios del día</p>
              {selectedDay?.status !== "disponible" && (
                <span className="rounded-full bg-rose-500/15 px-3 py-1 text-xs font-semibold text-rose-200 ring-1 ring-rose-500/40">
                  No disponible
                </span>
              )}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {selectedDay?.availableSlots.length ? (
                selectedDay.availableSlots.map((slot) => {
                  const isActive = slot === selectedSlot;
                  return (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`rounded-xl px-3 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] ${
                        isActive
                          ? "border border-[#d4af37] bg-[#0f0b0b] text-[#f7f1e3] shadow-[0_0_0_1px_rgba(212,175,55,0.35)]"
                          : "border border-[#d4af37]/20 bg-[#0a0a0a] text-[#f7f1e3] hover:border-[#d4af37]/60"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })
              ) : (
                <p className="col-span-full text-sm text-[#d8d0c0]">Elige otra fecha para ver horarios disponibles.</p>
              )}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-panel panel-hover flex flex-col gap-5 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="small-caps text-xs text-[#d4af37]">Confirmación</p>
              <h3 className="section-title text-2xl font-semibold text-[#f7f1e3]">Datos para agendar y notificar</h3>
            </div>
            <span className="rounded-full bg-[#4a1f2f]/60 px-3 py-1 text-xs font-semibold text-[#f7f1e3]">Correo al barbero y cliente</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-[#d8d0c0]">
              Nombre completo
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-xl border border-[#d4af37]/30 bg-[#0a0a0a] px-3 py-2 text-[#f7f1e3] placeholder:text-[#8b7f6c] focus:border-[#d4af37] focus:outline-none"
                placeholder="Tu nombre"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[#d8d0c0]">
              Correo electrónico
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl border border-[#d4af37]/30 bg-[#0a0a0a] px-3 py-2 text-[#f7f1e3] placeholder:text-[#8b7f6c] focus:border-[#d4af37] focus:outline-none"
                placeholder="nombre@correo.com"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[#d8d0c0]">
              Teléfono / WhatsApp
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="rounded-xl border border-[#d4af37]/30 bg-[#0a0a0a] px-3 py-2 text-[#f7f1e3] placeholder:text-[#8b7f6c] focus:border-[#d4af37] focus:outline-none"
                placeholder="Ej: +57 300 000 0000"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[#d8d0c0]">
              Servicio deseado
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="rounded-xl border border-[#d4af37]/30 bg-[#0a0a0a] px-3 py-2 text-[#f7f1e3] focus:border-[#d4af37] focus:outline-none"
              >
                {services.map((item) => (
                  <option key={item} value={item} className="bg-[#0a0a0a] text-[#f7f1e3]">
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="rounded-2xl border border-[#d4af37]/25 bg-[#0b0b0b]/70 p-4 text-xs text-[#d8d0c0]">
            <p className="font-semibold text-[#f7f1e3]">Correos automáticos</p>
            <p className="mt-2 leading-relaxed">
              Recomiendo usar la API gratuita de Resend (3k emails/mes) para enviar confirmaciones sin login. Al confirmar,
              saldrá un correo al barbero y otro al cliente. Configura tus credenciales en el endpoint
              <code className="rounded bg-[#0f0f0f] px-1 py-0.5 text-[#d4af37]">/api/reservas</code> y sigue el paso a paso en
              <code className="rounded bg-[#0f0f0f] px-1 py-0.5 text-[#d4af37]">docs/email-setup.md</code>.
            </p>
          </div>

          <CTAButton
            type="submit"
            className="w-full justify-center"
            disabled={isSubmitDisabled || submitting}
          >
            {submitting ? "Agendando..." : "Agendar"}
          </CTAButton>

          {statusMessage && (
            <p
              className={`rounded-xl border px-4 py-3 text-sm ${
                statusType === "success"
                  ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-100"
                  : "border-rose-500/50 bg-rose-500/10 text-rose-100"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </SectionShell>
  );
}
