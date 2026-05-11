"use client";

import { CalendarCheck, Car, BadgeCheck, KeyRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MagneticButton } from "@/components/motion/magnetic-button";

const STEPS: {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    num: "01",
    icon: CalendarCheck,
    title: "Termin vereinbaren",
    desc: "Kontaktieren Sie uns telefonisch, per WhatsApp oder über unser Kontaktformular. Wir finden gemeinsam einen Termin, der zu Ihnen passt.",
  },
  {
    num: "02",
    icon: Car,
    title: "Besichtigung & Probefahrt",
    desc: "Kommen Sie zu uns nach Wuppertal oder lassen Sie sich das Fahrzeug per WhatsApp-Video-Live in Echtzeit zeigen — bequem von zu Hause.",
  },
  {
    num: "03",
    icon: BadgeCheck,
    title: "Kaufabschluss",
    desc: "Wir beraten Sie ehrlich und transparent. Inzahlungnahme Ihres Fahrzeugs, flexible Zahlungswege und optionale Gebrauchtwagengarantie inklusive.",
  },
  {
    num: "04",
    icon: KeyRound,
    title: "Zulassung & Übergabe",
    desc: "Wir übernehmen die Zulassung deutschlandweit — in nur 10 Minuten. Sie fahren Ihr neues Fahrzeug direkt vom Hof.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-28 bg-brand-secondary/20 ">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <Reveal>
          <Eyebrow>So einfach geht's</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="font-display font-extrabold text-brand-tertiary mb-3"
            style={{ fontSize: "clamp(30px, 3.8vw, 44px)" }}
          >
            Ihr Weg zum{" "}
            <span className="text-brand-primary">Traumfahrzeug</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="font-body text-[15px] text-brand-neutral max-w-[500px] leading-relaxed mb-16">
            Von der ersten Anfrage bis zur Schlüsselübergabe in Wuppertal:
            schnell, persönlich und ohne Umwege.
          </p>
        </Reveal>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+8px)] right-[calc(12.5%+8px)] h-px bg-gradient-to-r from-brand-primary/20 via-brand-primary/40 to-brand-primary/20 z-0" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="relative z-[1] bg-white rounded-2xl border border-[var(--border)] p-6 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  {/* Number + icon row */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-display text-[40px] font-extrabold leading-none text-brand-primary/10 select-none">
                      {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-brand-primary/[0.07] flex items-center justify-center text-brand-primary flex-shrink-0">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Step indicator dot */}
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-primary mb-3" />

                  <h3 className="font-display text-[17px] font-bold text-brand-tertiary mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-body text-[13px] text-brand-neutral leading-relaxed flex-1">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={0.35}>
          <div className="mt-12 flex justify-center">
            <MagneticButton href="/#kontakt" variant="primary">
              Probefahrt in Wuppertal vereinbaren
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
