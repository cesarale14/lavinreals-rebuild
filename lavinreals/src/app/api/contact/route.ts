import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting: 5 requests per IP per hour
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 3600_000 });
    return true;
  }

  if (entry.count >= 5) return false;

  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Inténtelo más tarde." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, reason, message } = body;

    // Validation
    if (!name || !email || !reason) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email no válido." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Lavinreals Web <onboarding@resend.dev>",
      to: ["pablo@lavinreals.es", "luis@lavinreals.es"],
      subject: `Nueva consulta: ${reason} — ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d6ab54; border-bottom: 2px solid #d6ab54; padding-bottom: 10px;">
            Nueva consulta desde lavinreals.com
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Nombre:</td>
              <td style="padding: 8px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;">${escapeHtml(email)}</td>
            </tr>
            ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold;">Teléfono:</td><td style="padding: 8px 0;">${escapeHtml(phone)}</td></tr>` : ""}
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Motivo:</td>
              <td style="padding: 8px 0;">${escapeHtml(reason)}</td>
            </tr>
          </table>
          ${message ? `<div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 6px;"><strong>Mensaje:</strong><p style="margin: 8px 0 0; white-space: pre-wrap;">${escapeHtml(message)}</p></div>` : ""}
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el mensaje." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
