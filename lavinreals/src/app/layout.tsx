import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lavinreals - Cartera de suelo urbanizable en Madrid y Areas Prime",
  description:
    "Consultora independiente lider en gestion y comercializacion discrecional de suelo urbanizable en España. Cartera privada para inversores, promotores y particulares.",
  openGraph: {
    locale: "es_ES",
    siteName: "Lavinreals",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${jost.variable} font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
