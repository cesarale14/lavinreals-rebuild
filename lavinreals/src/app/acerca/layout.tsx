import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de Nosotros — Lavin Reals",
  description:
    "Conoce la misión y visión de Lavin Reals: consultora independiente especializada en gestión y comercialización discrecional de suelo urbanizable en España.",
};

export default function AcercaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
