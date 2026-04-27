import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mediheart S. de R.L de C.V. | Dispositivos Médicos Cardiovasculares",
  description:
    "Empresa hondureña especializada en comercialización y distribución de dispositivos médicos para cardiología intervencionista en San Pedro Sula, Honduras. Más de 4 años de experiencia.",
  keywords:
    "dispositivos médicos, cardiología, cardiología intervencionista, Honduras, San Pedro Sula, electrofisiología, intervencionismo estructural",
  authors: [{ name: "Mediheart S. de R.L de C.V." }],
  openGraph: {
    title: "Mediheart | Innovación Cardiovascular en Honduras",
    description:
      "Soluciones médicas cardiovasculares de alta calidad para profesionales de la salud en Honduras.",
    type: "website",
    locale: "es_HN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
