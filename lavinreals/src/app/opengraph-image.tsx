import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lavin Reals";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
        {/* LR Monogram with square border */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            border: "2px solid #ffffff",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 104,
              height: 104,
              border: "1px solid #ffffff",
            }}
          >
            <span
              style={{
                fontSize: 80,
                color: "#ffffff",
                fontFamily: '"Times New Roman", Times, serif',
                letterSpacing: "-0.05em",
                lineHeight: 1,
              }}
            >
              LR
            </span>
          </div>
        </div>

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
