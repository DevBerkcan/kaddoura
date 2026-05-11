"use server";

import nodemailer from "nodemailer";

export interface ContactResult {
  ok: boolean;
  error?: string;
}

export async function sendContactEmail(
  formData: FormData
): Promise<ContactResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Bitte alle Pflichtfelder ausfüllen." };
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailTo = process.env.MAIL_TO ?? smtpUser;

  if (!smtpUser || !smtpPass) {
    return {
      ok: false,
      error: "E-Mail-Versand ist noch nicht konfiguriert. Bitte rufen Sie uns an.",
    };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: { user: smtpUser, pass: smtpPass },
    tls: { ciphers: "SSLv3" },
  });

  await transporter.sendMail({
    from: `"Autocenter Kaddoura Website" <${smtpUser}>`,
    to: mailTo,
    replyTo: email,
    subject: `Neue Kontaktanfrage von ${name}`,
    text: [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      "",
      `Nachricht:`,
      message,
    ]
      .filter((l) => l !== null)
      .join("\n"),
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
      ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
      <hr/>
      <p><strong>Nachricht:</strong></p>
      <p style="white-space:pre-wrap">${message}</p>
    `,
  });

  return { ok: true };
}
