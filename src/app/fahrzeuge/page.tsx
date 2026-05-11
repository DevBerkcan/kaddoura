import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { CarShowroom } from "@/components/sections/car-showroom";

export const metadata: Metadata = {
  title: "Fahrzeuge",
  description: `Entdecken Sie unsere aktuellen Fahrzeugangebote bei ${SITE.name} in Wuppertal. Hochwertige Jahres- und Gebrauchtwagen zu fairen Preisen.`,
  alternates: { canonical: `${SITE.url}/fahrzeuge` },
};

export default function FahrzeugePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-brand-primary dark:to-brand-primary-dark pt-28 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="mb-10">
          <p className="font-body text-[11px] font-medium text-brand-neutral/70 dark:text-white/40 tracking-[0.15em] uppercase mb-3">
            Fahrzeugangebote
          </p>
          <h1
            className="font-display font-extrabold text-brand-tertiary dark:text-white leading-tight"
            style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
          >
            Unsere Fahrzeuge
          </h1>
          <p className="font-body text-brand-neutral/70 dark:text-white/50 mt-3 max-w-[520px] leading-relaxed">
            Aktuelle Angebote von {SITE.name} — geprüfte Qualitätsfahrzeuge mit
            persönlicher Beratung.
          </p>
        </div>
        <CarShowroom />
      </div>
    </main>
  );
}
