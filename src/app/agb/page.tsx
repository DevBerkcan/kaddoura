import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: `AGB von ${SITE.name}`,
  alternates: { canonical: `${SITE.url}/agb` },
  robots: { index: false },
};

// ↓ Legal Cockpit: HTML-Code hier einfügen
const AGB_HTML = `
  <p><em>Vollständiger Inhalt folgt via Legal Cockpit.</em></p>
`;

export default function AGBPage() {
  return <LegalPage eyebrow="Rechtliches" title="Allgemeine Geschäftsbedingungen" html={AGB_HTML} />;
}
