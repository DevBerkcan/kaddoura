"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { TEAM } from "@/lib/constants";

export function Team() {
  return (
    <section id="team" className="py-28 px-6 sm:px-10 max-w-[1200px] mx-auto">
      <Reveal><Eyebrow>Unser Team</Eyebrow></Reveal>
      <Reveal delay={0.08}>
        <h2
          className="font-display font-extrabold text-brand-tertiary mb-3"
          style={{ fontSize: "clamp(30px, 3.8vw, 44px)" }}
        >
          Kompetenz, Erfahrung und{" "}
          <span className="text-brand-primary">Leidenschaft</span>
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="font-body text-[15px] text-brand-neutral max-w-[550px] leading-relaxed mb-12">
          Lernen Sie das Team kennen, das sich täglich für Ihre Zufriedenheit
          einsetzt.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TEAM.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.1}>
            <TiltCard className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
              <div className="relative h-80 bg-gradient-to-br from-brand-secondary to-[#dde0e6] flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} bei Autocenter Kaddoura in Wuppertal`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <span className="font-display text-[56px] font-extrabold text-brand-primary/[0.08]">
                    {member.initials}
                  </span>
                )}
              </div>
              <div className="p-6 pb-7">
                <h3 className="font-display text-[19px] font-bold text-brand-tertiary mb-1">
                  {member.name}
                </h3>
                <div className="font-body text-xs font-semibold text-brand-primary tracking-wide uppercase mb-2.5">
                  {member.role}
                </div>
                <p className="font-body text-[13px] text-[var(--text-body)] leading-relaxed">
                  {member.description}
                </p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
