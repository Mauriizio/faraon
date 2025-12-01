# Configurar correos de confirmación con Resend (gratuito)

Resend ofrece un plan gratuito con 3k emails/mes y una API sencilla. Estos pasos conectan el endpoint `POST /api/reservas` para enviar confirmaciones al barbero y al cliente.

## 1) Crear cuenta y obtener API key
1. Entra a https://resend.com y crea tu cuenta.
2. En el dashboard, genera una API key con permisos de envío (copiala, se usa como `RESEND_API_KEY`).

## 2) Verificar dominio o usar `onboarding@resend.dev`
- **Producción**: agrega y verifica tu dominio en Resend (DNS TXT + registros DKIM/Return-Path que te indica el panel). Tarda minutos.
- **Pruebas rápidas**: puedes usar el dominio sandbox `onboarding@resend.dev` sin configurar DNS, ideal para validar el flujo.

## 3) Agregar variables de entorno
En `.env.local` agrega:
```
RESEND_API_KEY=tu_clave_resend
BOOKING_INBOX=barbero@tudominio.com
BOOKING_FROM=reservas@tudominio.com
```

## 4) Actualizar el endpoint `/api/reservas`
Ejemplo mínimo usando la SDK oficial:
```ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const bookingInbox = process.env.BOOKING_INBOX ?? "barbero@tudominio.com";
const bookingFrom = process.env.BOOKING_FROM ?? "reservas@tudominio.com";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, service, date, slot } = body ?? {};
  if (!name || !email || !phone || !service || !date || !slot) {
    return NextResponse.json({ message: "Faltan datos" }, { status: 400 });
  }

  await resend.emails.send({
    from: bookingFrom,
    to: [bookingInbox],
    subject: `Nueva cita: ${name} (${service})`,
    text: `Cliente: ${name}\nCorreo: ${email}\nTel: ${phone}\nServicio: ${service}\nFecha: ${date} ${slot}`,
  });

  await resend.emails.send({
    from: bookingFrom,
    to: [email],
    subject: "Tu cita está confirmada",
    text: `Hola ${name}, tu cita para ${service} quedó agendada para ${date} a las ${slot}.`,
  });

  return NextResponse.json({ message: "Reserva registrada y correos enviados" });
}
```

## 5) Probar en local
- Instala la SDK: `npm i resend`.
- Ejecuta `npm run dev` con `.env.local` configurado.
- Haz un POST a `http://localhost:3000/api/reservas` o agenda desde la UI. Revisa bandejas de entrada.

## 6) Producción
- Configura las mismas variables en tu hosting (Vercel, etc.).
- Revisa que el dominio esté verificado en Resend para evitar filtros de spam.

## Por qué Resend
- Plan gratuito generoso, API simple y buen deliverability.
- Alternativas: SendGrid (free 100/día), Mailgun (trial), SMTP clásico (requiere servidor y reputación).
