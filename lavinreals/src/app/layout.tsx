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
  metadataBase: new URL("https://lavinreals.es"),
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
    images: [{ url: "/logo.png", width: 800, height: 800, type: "image/png" }],
  },
  twitter: {
    card: "summary",
    images: ["/logo.png"],
  },
  verification: {
    google: "DCTExfsB3-NkE4KTpE8s00qjg709Tb6vMpjLL2U0K-A",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Lavin Reals",
              "url": "https://lavinreals.es",
              "telephone": "+34605237593",
              "email": "pablo@lavinreals.es",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C/Gobelas, 35, El Plantío",
                "addressLocality": "Madrid",
                "postalCode": "28023",
                "addressCountry": "ES"
              },
              "description": "Consultora independiente líder en gestión y comercialización discrecional de suelo urbanizable en España.",
              "areaServed": "Comunidad de Madrid"
            }),
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
