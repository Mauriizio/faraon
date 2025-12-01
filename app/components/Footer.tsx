import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer-grid mt-16 border-t border-[#d4af37]/25">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <h3 className="section-title text-2xl font-semibold text-[#f7f1e3]">Faraón Barber</h3>
            <p className="text-sm leading-relaxed text-[#d8d0c0]">
              Cortes de autor con precisión faraónica. Inspirado en la elegancia del antiguo Egipto y el estilo urbano
              contemporáneo.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="small-caps text-xs text-[#d4af37]">Contacto</h4>
            <p className="text-sm text-[#f7f1e3]">+56 9 5555 5555</p>
            <p className="text-sm text-[#f7f1e3]">contacto@faraon.barber</p>
            <p className="text-sm text-[#f7f1e3]">Av. Real 1234, Santiago</p>
          </div>
          <div className="space-y-3">
            <h4 className="small-caps text-xs text-[#d4af37]">Redes</h4>
            <div className="flex gap-3 text-sm text-[#f7f1e3]">
              <Link href="#" className="transition hover:text-[#d4af37]">
                Instagram
              </Link>
              <Link href="#" className="transition hover:text-[#d4af37]">
                TikTok
              </Link>
              <Link href="#" className="transition hover:text-[#d4af37]">
                WhatsApp
              </Link>
            </div>
            <div className="space-y-1 text-sm text-[#f7f1e3]">
              <p className="small-caps text-xs text-[#d4af37]">Horario</p>
              <p>Mar - Sáb: 10:00 - 20:00</p>
              <p>Domingo: 11:00 - 17:00</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-[#d4af37]/15 pt-6 text-xs text-[#8f8574] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Faraón Barber. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="transition hover:text-[#d4af37]">
              Política de privacidad
            </Link>
            <Link href="#" className="transition hover:text-[#d4af37]">
              Términos de servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
