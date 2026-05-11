import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${SITE.name}`,
  alternates: { canonical: `${SITE.url}/datenschutz` },
  robots: { index: false },
};

// ↓ Legal Cockpit: HTML-Code hier einfügen
const DATENSCHUTZ_HTML = `
  <p><em>Vollständiger Inhalt folgt via Legal Cockpit.</em></p>
`;

export default function DatenschutzPage() {
  return <LegalPage eyebrow="Rechtliches" title="Datenschutzerklärung" html={DATENSCHUTZ_HTML} />;
}
