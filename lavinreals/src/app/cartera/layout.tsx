import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cartera de Parcelas Disponibles — Lavin Reals",
  description:
    "Explora nuestra cartera exclusiva de suelo urbanizable en la Comunidad de Madrid. Parcelas residenciales, terciarias y dotacionales disponibles para promotores e inversores.",
};

export default function CarteraLayout({ children }: { children: React.ReactNode }) {
  return children;
}
