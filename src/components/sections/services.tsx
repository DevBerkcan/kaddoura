"use client";

import { Car, Eye, Globe, Wrench, FileCheck, Shield } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { SERVICES } from "@/lib/constants";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  car: <Car size={22} />,
  eye: <Eye size={22} />,
  globe: <Globe size={22} />,
  wrench: <Wrench size={22} />,
  filecheck: <FileCheck size={22} />,
  shield: <Shield size={22} />,
};

export function Services() {
  return (
    <section id="services" className="py-28 px-6 sm:px-10 bg-brand-secondary">
      <div className="max-w-[1200px] mx-auto">
        <Reveal><Eyebrow center>Unsere Leistungen</Eyebrow></Reveal>
        <Reveal delay={0.08}>
          <h2
            className="font-display font-extrabold text-brand-tertiary text-center mb-4"
            style={{ fontSize: "clamp(30px, 3.8vw, 44px)" }}
          >
            Mehr als nur <span className="text-brand-primary">Autohandel</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="font-body text-[15px] text-brand-neutral text-center max-w-[550px] mx-auto mb-12 leading-relaxed">
            Umfassender Service rund um Ihren Autokauf in Wuppertal. Wir sind
            für Sie da - vor, während und nach dem Kauf.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06}>
              <TiltCard className="p-8 bg-white rounded-2xl border border-[var(--border)] h-full cursor-default">
                <div className="w-11 h-11 rounded-xl bg-brand-primary/[0.06] flex items-center justify-center text-brand-primary mb-5">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-display text-[17px] font-bold text-brand-tertiary mb-2.5">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-[var(--text-body)] leading-relaxed">
                  {service.description}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.38}>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="/#kontakt" variant="primary">
              Service zum Fahrzeugkauf anfragen
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
