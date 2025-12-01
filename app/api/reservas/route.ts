import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, service, date, slot } = body ?? {};

  if (!name || !email || !phone || !service || !date || !slot) {
    return NextResponse.json({ message: "Faltan datos para la reserva." }, { status: 400 });
  }

  // Aquí conectarías tu servicio de correo (SMTP, SendGrid, Resend, etc.).
  // Este endpoint devuelve éxito simulado para el demo.
  return NextResponse.json({
    message: "Reserva registrada (demo). Configura tu proveedor SMTP para enviar los correos al barbero y al cliente.",
    payload: { name, email, phone, service, date, slot },
  });
}
