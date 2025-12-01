import { CTAButton } from "../components/CTAButton";
import { SectionShell } from "../components/SectionShell";

const slots = ["10:00", "11:30", "13:00", "15:00", "17:30", "19:00"];

export default function ReservarPage() {
  return (
    <SectionShell
      eyebrow="Reserva principal"
      title="Agenda dorada, pensada para móvil"
      description="El corazón del sitio: un flujo de reserva claro, rápido y accesible. Preparado para integrar pagos y recordatorios."
      className="pb-20"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel panel-hover flex flex-col gap-5 rounded-2xl p-8">
          <div>
            <p className="small-caps text-xs text-[#d4af37]">Proceso</p>
            <h3 className="section-title text-3xl font-semibold text-[#f7f1e3]">Reserva en tres pasos</h3>
          </div>
          <ol className="space-y-4 text-sm text-[#d8d0c0]">
            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full border border-[#d4af37]/50 text-center text-xs leading-6 text-[#d4af37]">
                1
              </span>
              Selecciona fecha y horario disponible.
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full border border-[#d4af37]/50 text-center text-xs leading-6 text-[#d4af37]">
                2
              </span>
              Elige el servicio y confirma tus datos. Integración de pago llegará después.
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full border border-[#d4af37]/50 text-center text-xs leading-6 text-[#d4af37]">
                3
              </span>
              Recibe confirmación y recordatorios automáticos en tu correo o WhatsApp.
            </li>
          </ol>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {slots.map((slot) => (
              <button
                key={slot}
                className="rounded-xl border border-[#d4af37]/30 bg-[#0f0f0f] px-3 py-3 text-sm font-semibold text-[#f7f1e3] transition hover:border-[#d4af37] hover:bg-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]"
              >
                {slot}
              </button>
            ))}
          </div>
          <CTAButton className="w-full justify-center">Continuar con mis datos</CTAButton>
          <p className="text-xs text-[#d8d0c0]">
            El flujo está listo para conectar con tu sistema de reservas o pagos preferido. Pensado para ser un ancla en el menú y
            siempre accesible.
          </p>
        </div>

        <div className="glass-panel panel-hover flex flex-col gap-5 rounded-2xl p-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="small-caps text-xs text-[#d4af37]">Acceso rápido</p>
              <h3 className="section-title text-2xl font-semibold text-[#f7f1e3]">Botón destacado siempre visible</h3>
            </div>
            <span className="rounded-full bg-[#4a1f2f]/60 px-3 py-1 text-xs font-semibold text-[#f7f1e3]">CTA</span>
          </div>
          <p className="text-sm leading-relaxed text-[#d8d0c0]">
            El botón “Reservar hora” vive en el header y se replica en cada sección clave. En móvil, el menú hamburguesa lo
            mantiene a un toque; en desktop, está siempre en la barra.
          </p>
          <div className="rounded-2xl border border-[#d4af37]/20 bg-[#0a0a0a]/70 p-4 text-sm text-[#f7f1e3]">
            <p className="font-semibold">Próximos pasos</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[#d8d0c0]">
              <li>Conectar con motor de reservas.</li>
              <li>Habilitar pagos y recordatorios automáticos.</li>
              <li>Agregar login para clientes frecuentes.</li>
            </ul>
          </div>
          <CTAButton href="/" variant="ghost" className="w-full justify-center">
            Volver al inicio
          </CTAButton>
        </div>
      </div>
    </SectionShell>
  );
}
