import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Lavin Reals";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  const logoPath = join(process.cwd(), "public", "logo.jpeg");
  const logoData = readFileSync(logoPath);
  const logoBase64 = `data:image/jpeg;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          padding: "60px",
        }}
      >
        {/* Logo image — inverted to white on black */}
        <img
          src={logoBase64}
          width={200}
          height={200}
          style={{
            height: 200,
            width: "auto",
            marginBottom: 28,
          }}
        />

        {/* Brand name */}
        <span
          style={{
            fontSize: 36,
            color: "#ffffff",
            letterSpacing: "0.3em",
            fontWeight: 400,
            marginBottom: 20,
          }}
        >
          LAVIN REALS
        </span>

        {/* Tagline */}
        <span
          style={{
            fontSize: 20,
            color: "#d6ab54",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
            marginBottom: 40,
          }}
        >
          Cartera de suelo urbanizable en Madrid y Áreas Prime
        </span>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 1,
            backgroundColor: "#d6ab54",
            marginBottom: 20,
          }}
        />

        {/* URL */}
        <span
          style={{
            fontSize: 14,
            color: "#ccbaad",
            letterSpacing: "0.1em",
          }}
        >
          lavinreals.es
        </span>
      </div>
    ),
    { ...size }
  );
}
