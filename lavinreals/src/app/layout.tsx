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
  metadataBase: new URL("https://lavinreals-rebuild.vercel.app"),
  title: "Lavinreals — Cartera de suelo urbanizable en Madrid",
  description:
    "Consultora independiente líder en gestión y comercialización discrecional de suelo urbanizable en España.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Lavinreals — Cartera de suelo urbanizable en Madrid",
    description:
      "Consultora independiente líder en gestión y comercialización discrecional de suelo urbanizable en España.",
    locale: "es_ES",
    siteName: "Lavinreals",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lavin Reals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavinreals — Cartera de suelo urbanizable en Madrid",
    description:
      "Consultora independiente líder en gestión y comercialización discrecional de suelo urbanizable en España.",
    images: ["/og-image.png"],
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
