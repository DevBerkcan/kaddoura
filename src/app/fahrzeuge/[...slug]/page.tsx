import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/seo-schema";
import { CarShowroom } from "@/components/sections/car-showroom";

export const metadata: Metadata = {
  title: "Fahrzeugdetails anfragen",
  description: `Fahrzeugdetails und aktuelle Angebote bei ${SITE.name} in Wuppertal ansehen. Jetzt Verfügbarkeit prüfen, Probefahrt vereinbaren oder direkt Kontakt aufnehmen.`,
  alternates: { canonical: `${SITE.url}/fahrzeuge` },
  robots: {
    index: false,
    follow: true,
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Startseite", url: SITE.url },
  { name: "Fahrzeuge", url: `${SITE.url}/fahrzeuge` },
  { name: "Fahrzeugdetails", url: `${SITE.url}/fahrzeuge` },
]);

export default function FahrzeugDetailPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-white pt-28 pb-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="mb-10">
            <p className="font-body text-[11px] font-medium text-brand-neutral/70 tracking-[0.15em] uppercase mb-3">
              Fahrzeugdetails
            </p>
            <h1
              className="font-display font-extrabold text-brand-tertiary leading-tight"
              style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
            >
              Fahrzeug ansehen und Verfügbarkeit prüfen
            </h1>
            <p className="font-body text-brand-neutral/70 mt-3 max-w-[680px] leading-relaxed">
              Prüfen Sie aktuelle Fahrzeugdaten direkt im Bestand von {SITE.name}.
              Für verbindliche Angaben, Probefahrt und Reservierung beraten wir
              Sie persönlich in Wuppertal.
            </p>
          </div>
          <CarShowroom />
        </div>
      </main>
    </>
  );
}
