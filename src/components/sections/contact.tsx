"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SITE } from "@/lib/constants";

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

export function Contact() {
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

          {/* WhatsApp side */}
          <Reveal delay={0.15} direction="left">
            <div className="bg-white rounded-2xl border border-[var(--border)] p-9 h-full flex flex-col justify-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/[0.07] flex items-center justify-center text-brand-primary mb-6">
                <MessageCircle size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-tertiary mb-3">
                Direkt per WhatsApp schreiben
              </h3>
              <p className="font-body text-sm text-brand-neutral leading-relaxed mb-7">
                Senden Sie uns Ihre Frage, Fahrzeuganfrage oder Ihren
                Terminwunsch direkt per WhatsApp. Wir antworten so schnell wie
                möglich persönlich.
              </p>
              <MagneticButton href={SITE.whatsapp} variant="primary" target="_blank">
                <MessageCircle size={16} /> WhatsApp Chat starten
              </MagneticButton>
              <p className="font-body text-xs text-brand-neutral/70 mt-5">
                Alternativ erreichen Sie uns telefonisch unter {SITE.phone}.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
