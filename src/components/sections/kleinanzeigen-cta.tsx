"use client";

import Image from "next/image";
import { Disc3, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { SITE } from "@/lib/constants";

export function KleinanzeigenCta() {
  return (
    <section className="py-20 px-6 sm:px-10">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-brand-tertiary px-8 py-12 sm:px-14 sm:py-14">
            <div className="absolute top-1/2 right-[-60px] -translate-y-1/2 w-[260px] h-[260px] border border-white/10 rounded-full" />
            <div className="absolute bottom-[-90px] right-[80px] w-[180px] h-[180px] border border-white/10 rounded-full" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-[560px]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <Disc3 size={22} />
                  </div>
                  <div className="inline-flex items-center bg-white rounded-lg px-3 py-2">
                    <Image
                      src="/logos/kleinanzeigen-logo.svg"
                      alt="Kleinanzeigen"
                      width={140}
                      height={24}
                      unoptimized
                      className="h-4 w-auto"
                    />
                  </div>
                </div>
                <h3 className="font-display font-extrabold text-white leading-tight mb-3 text-[26px] sm:text-[30px]">
                  Große Auswahl an Originalrädern &amp; Kompletträdern
                </h3>
                <p className="font-body text-[15px] text-white/70 leading-relaxed">
                  Entdecken Sie unseren aktuellen Räderbestand auf Kleinanzeigen –
                  mit einer großen Auswahl an Originalrädern und Kompletträdern
                  für verschiedene Fahrzeugmodelle. Jetzt stöbern und das
                  passende Angebot finden.
                </p>
              </div>
              <div className="shrink-0">
                <MagneticButton
                  href={SITE.kleinanzeigenUrl}
                  target="_blank"
                  variant="inverted"
                >
                  Räderbestand ansehen <ArrowRight size={15} />
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
