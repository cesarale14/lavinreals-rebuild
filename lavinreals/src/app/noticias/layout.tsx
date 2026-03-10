import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Observatorio del Mercado de Suelo — Lavin Reals",
  description:
    "Noticias y análisis en tiempo real del mercado de suelo urbanizable en España. Seguimiento de desarrollos urbanísticos, precios y tendencias del sector inmobiliario.",
};

export default function NoticiasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
