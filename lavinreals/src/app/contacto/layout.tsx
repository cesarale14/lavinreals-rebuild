import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Lavin Reals",
  description:
    "Contacta con Lavin Reals para consultas sobre suelo urbanizable en Madrid. Respuesta personalizada en menos de 24 horas laborables. Oficina en El Plantío, Madrid.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
