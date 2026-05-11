import type { Metadata } from "next";
import { SEO_KEYWORDS, SITE } from "@/lib/constants";
import { generateBreadcrumbSchema, generateVehicleItemListSchema } from "@/lib/seo-schema";
import { CarShowroom } from "@/components/sections/car-showroom";

export const metadata: Metadata = {
  title: "Fahrzeuge kaufen in Wuppertal | Aktuelle Gebrauchtwagen",
  description:
    "Aktuelle Gebrauchtwagen und Jahreswagen bei Autocenter Kaddoura in Wuppertal. Geprüfte Fahrzeuge, faire Preise, Probefahrt, Inzahlungnahme und schnelle Zulassung.",
  keywords: [...SEO_KEYWORDS, "Fahrzeuge Wuppertal", "Volvo Wuppertal"],
  openGraph: {
    title: "Fahrzeuge kaufen in Wuppertal | Autocenter Kaddoura",
    description: "Aktuelle Gebrauchtwagen und Jahreswagen in Wuppertal mit fairer Beratung, Probefahrt und Zulassungsservice.",
    type: "website",
    url: `${SITE.url}/fahrzeuge`,
    siteName: SITE.name,
    locale: SITE.locale,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Fahrzeugbestand von ${SITE.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahrzeuge kaufen in Wuppertal | Autocenter Kaddoura",
    description: "Finden Sie geprüfte Gebrauchtwagen und Jahreswagen in unserem aktuellen Bestand.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: `${SITE.url}/fahrzeuge` },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Startseite", url: SITE.url },
  { name: "Fahrzeuge", url: `${SITE.url}/fahrzeuge` },
]);
const vehicleItemListSchema = generateVehicleItemListSchema();

export default function FahrzeugePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleItemListSchema) }}
      />
      <main className="min-h-screen bg-white pt-28 pb-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="mb-10">
            <p className="font-body text-[11px] font-medium text-brand-neutral/70 tracking-[0.15em] uppercase mb-3">
              Fahrzeugauswahl in Wuppertal
            </p>
            <h1
              className="font-display font-extrabold text-brand-tertiary leading-tight"
              style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
            >
              Gebrauchtwagen und Jahreswagen kaufen
            </h1>
            <p className="font-body text-brand-neutral/70 mt-3 max-w-[680px] leading-relaxed">
              Aktuelle Angebote von {SITE.name} in Wuppertal: geprüfte
              Qualitätsfahrzeuge, transparente Beratung, faire Inzahlungnahme,
              Probefahrt und schnelle Zulassung aus einer Hand.
            </p>
          </div>
          <CarShowroom />
        </div>
      </main>
    </>
  );
}
