"use client";

import { useEffect, useMemo, useState } from "react";
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

function buildDayAvailability(date: Date, holidaySet: Set<string>, todayKey: string): DayAvailability {
  const key = date.toISOString().split("T")[0];
  const dayOfWeek = date.getDay();
  const isSunday = dayOfWeek === 0;
  const isHoliday = holidaySet.has(key);
  const isPast = key < todayKey;
  const blockedDay = isSunday || isHoliday || isPast;

  const existing = bookedSlots[key] ?? [];
  const availableSlots = blockedDay ? [] : workingHours.filter((slot) => !existing.includes(slot));

  let status: AvailabilityStatus = "disponible";
  if (blockedDay) status = isHoliday || isSunday ? "feriado" : "sin-cupos";
  else if (availableSlots.length === 0) status = "sin-cupos";

  return {
    date,
    key,
    label: date.toLocaleDateString("es-ES", { day: "2-digit", month: "short" }),
    status,
    availableSlots,
  };
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
  const today = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }, []);

  const todayKey = useMemo(() => today.toISOString().split("T")[0], [today]);

  const [currentMonth, setCurrentMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const holidaySet = useMemo(() => buildHolidaySet(currentMonth, 400), [currentMonth]);

  const monthCells = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const startDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;

    const cells: Array<DayAvailability | null> = Array.from({ length: totalCells }, () => null);

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(year, month, day);
      cells[startDay + day - 1] = buildDayAvailability(date, holidaySet, todayKey);
    }

    return cells;
  }, [currentMonth, holidaySet, todayKey]);

  const weeks = useMemo(() => {
    const chunks: Array<Array<DayAvailability | null>> = [];
    for (let i = 0; i < monthCells.length; i += 7) {
      chunks.push(monthCells.slice(i, i + 7));
    }
    return chunks;
  }, [monthCells]);

  const [selectedDateKey, setSelectedDateKey] = useState<string | undefined>(() => {
    const firstAvailable = monthCells.find((day) => day && day.status === "disponible") as DayAvailability | undefined;
    const firstDay = monthCells.find((day): day is DayAvailability => Boolean(day));
    return firstAvailable?.key ?? firstDay?.key;
  });
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [service, setService] = useState(services[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const flatDays = monthCells.filter((day): day is DayAvailability => Boolean(day));
    if (!selectedDateKey || !flatDays.some((day) => day.key === selectedDateKey)) {
      const fallback = flatDays.find((day) => day.status === "disponible") ?? flatDays[0];
      setSelectedDateKey(fallback?.key);
      setSelectedSlot(null);
    }
  }, [monthCells, selectedDateKey]);

  const selectedDay = selectedDateKey
    ? (monthCells.find((day) => day?.key === selectedDateKey) as DayAvailability | undefined)
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
      const flatDays = monthCells.filter((day): day is DayAvailability => Boolean(day));
      setSelectedDateKey(flatDays.find((day) => day.status === "disponible")?.key ?? selectedDateKey);
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
      description="Calendario compacto con cupos reales y confirmación inmediata."
      className="pt-2 pb-6 sm:pt-3 sm:pb-8"
      headerClassName="items-center text-center lg:w-full"
      headerWidthClassName="w-full"
      titleClassName="mx-auto max-w-5xl text-pretty text-xl sm:text-2xl lg:text-[26px] lg:leading-tight"
      descriptionClassName="mx-auto max-w-3xl text-[12px] sm:text-sm"
    >
      <div className="mx-auto grid w-full max-w-5xl items-start gap-2.5 sm:gap-3.5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-panel panel-hover flex min-w-0 flex-col gap-2.5 rounded-2xl p-2.5 sm:p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
            <div>
              <p className="small-caps text-[10px] text-[#d4af37]">Disponibilidad</p>
              <h3 className="section-title text-sm font-semibold text-[#f7f1e3] sm:text-base">Selecciona la fecha y el horario</h3>
            </div>
            <span className="rounded-full bg-[#0f0b0b] px-3 py-1 text-[10px] font-semibold text-[#d4af37] ring-1 ring-[#d4af37]/30">
              Lun a Sáb · 09:00 - 18:00
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-[#d8d0c0]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0f0b0b] px-2 py-1 ring-1 ring-[#d4af37]/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 ring-2 ring-emerald-500/40" />
              Disponible
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0f0b0b] px-2 py-1 ring-1 ring-[#d4af37]/20">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80 ring-2 ring-amber-500/40" />
              Sin cupos / bloqueado
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0f0b0b] px-2 py-1 ring-1 ring-[#d4af37]/20">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-600 ring-2 ring-rose-700/70" />
              Feriado / domingo (rojo)
            </span>
          </div>

          <div className="rounded-2xl border border-[#d4af37]/25 bg-[#0b0b0b]/80 p-3 sm:p-3.5 max-w-[540px] w-full mx-auto">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#d4af37]">Calendario</p>
                <p className="text-[11px] text-[#d8d0c0]">Selecciona directamente el día disponible.</p>
              </div>
            <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const minMonth = new Date(today.getFullYear(), today.getMonth(), 1);
                    if (currentMonth <= minMonth) return;
                    const prev = new Date(currentMonth);
                    prev.setMonth(prev.getMonth() - 1);
                    setCurrentMonth(prev);
                    setSelectedSlot(null);
                    setSelectedDateKey(undefined);
                  }}
                  className="rounded-full border border-[#d4af37]/30 bg-[#0f0b0b] px-2.5 py-1 text-[11px] font-semibold text-[#f7f1e3] transition hover:border-[#d4af37]/60 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Mes anterior"
                  disabled={currentMonth <= new Date(today.getFullYear(), today.getMonth(), 1)}
                >
                  ←
                </button>
                <span className="rounded-full bg-[#0f0b0b] px-3 py-1 text-[11px] font-semibold text-[#f7f1e3] ring-1 ring-[#d4af37]/30">
                  {currentMonth.toLocaleDateString("es-ES", { month: "long", year: "numeric" })}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const next = new Date(currentMonth);
                    next.setMonth(next.getMonth() + 1);
                    setCurrentMonth(next);
                    setSelectedSlot(null);
                    setSelectedDateKey(undefined);
                  }}
                  className="rounded-full border border-[#d4af37]/30 bg-[#0f0b0b] px-2.5 py-1 text-[11px] font-semibold text-[#f7f1e3] transition hover:border-[#d4af37]/60"
                  aria-label="Mes siguiente"
                >
                  →
                </button>
              </div>
            </div>

            <div className="mb-1.5 grid grid-cols-7 text-center text-[10px] font-semibold uppercase tracking-wide text-[#d8d0c0]">
              {weekDayLabels.map((label) => (
                <span key={label} className="py-1">
                  {label}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-0.5 overflow-hidden sm:gap-1">
              {weeks.map((week, idx) => (
                <div key={idx} className="contents">
                  {week.map((day, dayIdx) => {
                    if (!day) {
                      return <div key={`empty-${idx}-${dayIdx}`} className="aspect-square rounded-lg" aria-hidden />;
                    }

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
                        className={`group flex aspect-square min-h-[30px] w-full flex-col items-center justify-center gap-0.5 rounded-lg px-1 py-1 text-center text-[10px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] ${
                          statusColor(day.status)
                        } ${
                          isActive
                            ? "shadow-[0_0_0_1px_rgba(212,175,55,0.6),0_8px_22px_rgba(0,0,0,0.28)]"
                            : "shadow-[0_6px_18px_rgba(0,0,0,0.22)]"
                        } ${disabled ? "opacity-70" : "hover:scale-[1.01]"}`}
                        aria-label={`Día ${day.label} ${day.status === "disponible" ? "disponible" : "no disponible"}`}
                      >
                        <span className="text-xs leading-none text-[#f7f1e3]">
                          {day.date.getDate().toString().padStart(2, "0")}
                        </span>
                        <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${statusBadgeClasses(day.status)}`}>
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

          <div className="rounded-2xl border border-[#d4af37]/30 bg-[#0b0b0b]/80 p-3 sm:p-3.5 max-w-[540px] w-full mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-[#f7f1e3]">Horarios del día</p>
              {selectedDay?.status !== "disponible" && (
                <span className="rounded-full bg-rose-500/15 px-3 py-1 text-xs font-semibold text-rose-200 ring-1 ring-rose-500/40">
                  No disponible
                </span>
              )}
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-4">
              {selectedDay?.availableSlots.length ? (
                selectedDay.availableSlots.map((slot) => {
                  const isActive = slot === selectedSlot;
                  return (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`rounded-lg px-2 py-2 text-[13px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] ${
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
          className="glass-panel panel-hover mx-auto flex w-full max-w-[520px] min-w-0 flex-col gap-2.5 rounded-2xl p-3 sm:p-3.5"
        >
          <div className="text-center">
            <p className="small-caps text-[10px] text-[#d4af37]">Confirmación</p>
            <h3 className="section-title mt-1 text-base font-semibold text-[#f7f1e3]">Datos para agendar y notificar</h3>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm text-[#d8d0c0]">
              Nombre completo
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-xl border border-[#d4af37]/30 bg-[#0a0a0a] px-3 py-2 text-[#f7f1e3] placeholder:text-[#8b7f6c] focus:border-[#d4af37] focus:outline-none"
                placeholder="Tu nombre"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-[#d8d0c0]">
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
            <label className="flex flex-col gap-1.5 text-sm text-[#d8d0c0]">
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
            <label className="flex flex-col gap-1.5 text-sm text-[#d8d0c0]">
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

          <div className="rounded-2xl border border-[#d4af37]/25 bg-[#0b0b0b]/70 p-2.5 text-xs text-[#d8d0c0]">
            <p className="font-semibold text-[#f7f1e3]">Correos automáticos</p>
            <p className="mt-2 leading-relaxed">
              Usa la API gratuita de Resend (3k emails/mes) para confirmar citas. Configura tus credenciales en
              <code className="rounded bg-[#0f0f0f] px-1 py-0.5 text-[#d4af37]">/api/reservas</code> y sigue los pasos en
              <code className="rounded bg-[#0f0f0f] px-1 py-0.5 text-[#d4af37]">docs/email-setup.md</code>.
            </p>
          </div>

          <CTAButton type="submit" className="w-full justify-center" disabled={isSubmitDisabled || submitting}>
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
