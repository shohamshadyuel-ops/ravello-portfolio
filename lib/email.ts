import { Resend } from "resend";

type LeadNotificationPayload = {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  budgetRange?: string;
  locale?: string;
  timestamp?: string;
};

/**
 * Sends a lead notification email via Resend.
 * If RESEND_API_KEY is not set or sending fails, the error is logged and swallowed.
 */
export async function sendLeadNotificationEmail(payload: LeadNotificationPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set; skipping email notification.");
    return;
  }

  const resend = new Resend(apiKey);

  const {
    fullName,
    email,
    phone = "",
    company = "",
    message,
    budgetRange = "",
    locale = "en",
    timestamp = new Date().toISOString(),
  } = payload;

  const safeFrom = process.env.RESEND_FROM || "onboarding@resend.dev";

  const html = `
    <h2>New Ravello Studio Lead — ${fullName}</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Budget Range:</strong> ${budgetRange}</p>
    <p><strong>Locale:</strong> ${locale}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br/>")}</p>
    <p><strong>Submitted At:</strong> ${timestamp}</p>
  `;

  try {
    await resend.emails.send({
      from: safeFrom,
      to: "shohamsdesign@gmail.com",
      subject: `New Ravello Studio Lead — ${fullName}`,
      html,
    });
  } catch (error) {
    console.error("Failed to send lead notification email:", error);
  }
}
