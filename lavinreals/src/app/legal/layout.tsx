import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal, Privacidad y Cookies — Lavin Reals",
  description:
    "Aviso legal, política de privacidad, condiciones de uso y política de cookies de Lavin Reals, S.L.U.",
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
