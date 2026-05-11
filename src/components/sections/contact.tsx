"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle, Instagram, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SITE } from "@/lib/constants";
import { sendContactEmail } from "@/app/actions/contact";

const contactItems = [
  {
    icon: <MapPin size={18} />,
    label: "Adresse",
    value: `${SITE.address.street}\n${SITE.address.zip} ${SITE.address.city}`,
  },
  {
    icon: <Phone size={18} />,
    label: "Telefon",
    value: `${SITE.phone}\n${SITE.phone2}\n${SITE.phoneLandline}`,
  },
  {
    icon: <Mail size={18} />,
    label: "E-Mail",
    value: SITE.email,
  },
  {
    icon: <Clock size={18} />,
    label: "Öffnungszeiten",
    value: `Mo–Fr: ${SITE.hours.weekdays}\nSa: ${SITE.hours.saturday}\nSo: ${SITE.hours.sunday}`,
  },
];

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const result = await sendContactEmail(new FormData(e.currentTarget));
      if (result.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setErrorMsg(result.error ?? "Ein Fehler ist aufgetreten.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Verbindungsfehler. Bitte versuchen Sie es später erneut.");
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="py-28 px-6 sm:px-10 bg-brand-secondary">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info side */}
          <div>
            <Reveal><Eyebrow>Kontakt & Anfahrt</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2
                className="font-display font-extrabold text-brand-tertiary mb-9"
                style={{ fontSize: "clamp(30px, 3.8vw, 44px)" }}
              >
                Kontakt, Probefahrt und{" "}
                <span className="text-brand-primary">Anfahrt</span>
              </h2>
            </Reveal>

            {contactItems.map((item, i) => (
              <Reveal key={item.label} delay={0.14 + i * 0.06}>
                <div className="flex gap-3.5 py-4 border-b border-[var(--border)]">
                  <div className="w-9 h-9 rounded-xl bg-brand-primary/[0.06] flex items-center justify-center text-brand-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-display text-[11px] font-bold tracking-wider uppercase text-brand-neutral mb-1">
                      {item.label}
                    </div>
                    <div className="font-body text-[14px] text-brand-tertiary whitespace-pre-line leading-relaxed">
                      {item.value}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.5}>
              <div className="font-body text-sm text-brand-neutral mt-5 mb-2">
                Wir sprechen: <strong className="text-brand-tertiary">Deutsch · English · العربية</strong>
              </div>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="flex gap-2.5 mt-6">
                <MagneticButton href={`tel:${SITE.phone}`} variant="primary">
                  <Phone size={14} /> Autocenter Kaddoura anrufen
                </MagneticButton>
                <MagneticButton href={SITE.whatsapp} variant="secondary" target="_blank">
                  <MessageCircle size={14} /> WhatsApp
                </MagneticButton>
                <MagneticButton href={SITE.instagram} variant="secondary" target="_blank">
                  <Instagram size={14} />
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          {/* Form side */}
          <Reveal delay={0.15} direction="left">
            <div className="bg-white rounded-2xl border border-[var(--border)] p-9">
              <h3 className="font-display text-xl font-bold text-brand-tertiary mb-6">
                Nachricht senden
              </h3>

              {status === "success" ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <CheckCircle2 size={48} className="text-green-500" />
                  <p className="font-display font-bold text-brand-tertiary text-lg">Nachricht gesendet!</p>
                  <p className="font-body text-sm text-brand-neutral">
                    Vielen Dank. Wir melden uns so schnell wie möglich bei Ihnen.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 font-body text-xs text-brand-primary underline"
                  >
                    Neue Nachricht senden
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-3.5" onSubmit={handleSubmit} noValidate>
                  <input
                    name="name"
                    placeholder="Name *"
                    required
                    className="w-full px-4 py-3 font-body text-sm border-2 border-[var(--border)] rounded-lg outline-none bg-white text-brand-tertiary transition-all duration-300 focus:border-brand-primary focus:ring-[3px] focus:ring-brand-primary/[0.08]"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="E-Mail *"
                    required
                    className="w-full px-4 py-3 font-body text-sm border-2 border-[var(--border)] rounded-lg outline-none bg-white text-brand-tertiary transition-all duration-300 focus:border-brand-primary focus:ring-[3px] focus:ring-brand-primary/[0.08]"
                  />
                  <input
                    name="phone"
                    placeholder="Telefon"
                    className="w-full px-4 py-3 font-body text-sm border-2 border-[var(--border)] rounded-lg outline-none bg-white text-brand-tertiary transition-all duration-300 focus:border-brand-primary focus:ring-[3px] focus:ring-brand-primary/[0.08]"
                  />
                  <textarea
                    name="message"
                    placeholder="Nachricht *"
                    required
                    rows={4}
                    className="w-full px-4 py-3 font-body text-sm border-2 border-[var(--border)] rounded-lg outline-none bg-white text-brand-tertiary resize-y transition-all duration-300 focus:border-brand-primary focus:ring-[3px] focus:ring-brand-primary/[0.08]"
                  />
                  <label className="flex gap-2 items-start font-body text-xs text-brand-neutral leading-snug cursor-pointer">
                    <input
                      name="privacy"
                      type="checkbox"
                      required
                      className="mt-0.5 accent-brand-primary"
                    />
                    Ich habe die{" "}
                    <a href="/datenschutz" className="underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zur Kenntnis genommen. *
                  </label>

                  {status === "error" && (
                    <div className="flex items-center gap-2 px-3 py-2.5 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle size={15} className="text-red-500 shrink-0" />
                      <p className="font-body text-xs text-red-600">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-primary text-white rounded-lg font-display text-[13px] font-bold tracking-wide hover:bg-brand-primary-light transition-colors mt-1 cursor-pointer border-none disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <><Loader2 size={14} className="animate-spin" /> Wird gesendet…</>
                    ) : (
                      <>Anfrage an Autocenter Kaddoura senden <ArrowRight size={14} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
