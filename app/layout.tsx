import "./globals.css";

export const metadata = {
  title: "Faraon Barber",
  description: "El corte de los reyes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
