"use client";

import Image from "next/image";
import { Shield, Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IMAGES } from "@/lib/constants";
import { MagneticButton } from "@/components/motion/magnetic-button";

const badges = [
  { icon: <Shield size={16} />, label: "Familienunternehmen seit 2000" },
  { icon: <Check size={16} />, label: "Persönlicher Service" },
];

export function About() {
  return (
    <section id="ueber-uns" className="py-28 px-6 sm:px-10 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <Reveal><Eyebrow>Über uns</Eyebrow></Reveal>
          <Reveal delay={0.08}>
            <h2
              className="font-display font-extrabold text-brand-tertiary leading-tight mb-6"
              style={{ fontSize: "clamp(30px, 3.8vw, 44px)" }}
            >
              Ihr Autohaus für{" "}
              <span className="text-brand-primary">Qualitätsfahrzeuge in Wuppertal</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="font-body text-[15px] leading-relaxed text-[var(--text-body)] mb-4">
              Wir sind seit mehr als 25 Jahren Ihr
              vertrauensvoller Partner, wenn es um hochwertige Jahres- und
              Gebrauchtwagen geht. Unser Familienunternehmen steht für{" "}
              Professionalität, Kompetenz und Zuverlässigkeit.
              Diese Werte leben wir täglich und geben unseren Kunden damit echte
              Sicherheit.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-[15px] leading-relaxed text-[var(--text-body)]">
              Bei uns finden Sie eine sorgfältig ausgewählte Fahrzeugpalette,
              persönlichen Service, ehrliche Beratung und transparente Abläufe.
              Ihre Zufriedenheit steht für uns an erster Stelle - vom ersten
              Kontakt bis zur Fahrzeugübergabe.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="flex gap-4 mt-8 flex-wrap">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 px-3.5 py-2 bg-brand-primary/[0.04] rounded-md"
                >
                  <span className="text-brand-primary">{b.icon}</span>
                  <span className="font-body text-xs font-semibold text-brand-tertiary">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-8">
              <MagneticButton href="/fahrzeuge" variant="secondary">
                Gebrauchtwagenbestand ansehen
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} direction="left">
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative border border-[var(--border)] shadow-xl">
              <Image
                src={IMAGES.dealership}
                alt="Autohaus Autocenter Kaddoura an der Friedrich-Ebert-Straße in Wuppertal"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-brand-primary/80 to-transparent">
                <div className="font-display text-base font-bold text-white">
                  Friedrich-Ebert-Straße 150
                </div>
                <div className="font-body text-[12px] text-white/70 mt-0.5">
                  42117 Wuppertal
                </div>
              </div>
            </div>
            <div className="absolute -top-3.5 -right-3.5 w-16 h-16 border-2 border-brand-primary rounded-xl opacity-[0.12]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
