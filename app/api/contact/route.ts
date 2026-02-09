import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  budget?: unknown;
  details?: unknown;
  locale?: unknown;
  honeypot?: unknown;
};

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  // Honeypot: silently accept bots without sending email
  const honeypot = asString(body.honeypot).trim();
  if (honeypot) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const fullName = asString(body.fullName).trim();
  const email = asString(body.email).trim();
  const phone = asString(body.phone).trim();
  const company = asString(body.company).trim();
  const budget = asString(body.budget).trim();
  const details = asString(body.details).trim();
  const locale = asString(body.locale).trim() || "unknown";

  if (!fullName) {
    return NextResponse.json({ ok: false, error: "Full name is required." }, { status: 400 });
  }
  if (!email) {
    return NextResponse.json({ ok: false, error: "Email is required." }, { status: 400 });
  }
  if (!details) {
    return NextResponse.json({ ok: false, error: "Message details are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "Email service is not configured." }, { status: 500 });
  }

  const timestamp = new Date().toISOString();
  const subject = `New website lead — ${fullName}`;

  const lines = [
    "New website lead",
    "",
    `Timestamp: ${timestamp}`,
    `Locale: ${locale}`,
    "",
    `Full name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Company: ${company || "-"}`,
    `Budget: ${budget || "-"}`,
    "",
    "Details:",
    details,
  ];

  const text = lines.join("\n");

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Ravello Studio <onboarding@resend.dev>",
        to: ["shohamsdesign@gmail.com"],
        reply_to: email,
        subject,
        text,
        html: `<pre style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; white-space: pre-wrap;">${text.replace(
          /&/g,
          "&amp;"
        ).replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text().catch(() => "");
      console.error("Resend email failed:", resendRes.status, errText.slice(0, 300));
      return NextResponse.json({ ok: false, error: "Failed to send message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Resend request error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send message. Please try again." }, { status: 502 });
  }
}

