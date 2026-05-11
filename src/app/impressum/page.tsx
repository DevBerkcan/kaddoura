import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${SITE.name}`,
  alternates: { canonical: `${SITE.url}/impressum` },
  robots: { index: false },
};

// ↓ Legal Cockpit: HTML-Code hier einfügen
const IMPRESSUM_HTML = `
  <p><strong>${SITE.name}</strong><br/>
  ${SITE.address.street}<br/>
  ${SITE.address.zip} ${SITE.address.city}</p>
  <p>Telefon: ${SITE.phone}<br/>
  E-Mail: <a href="mailto:${SITE.email}">${SITE.email}</a></p>
  <p><em>Vollständiger Inhalt folgt via Legal Cockpit.</em></p>
`;

export default function ImpressumPage() {
  return <LegalPage eyebrow="Rechtliches" title="Impressum" html={IMPRESSUM_HTML} />;
}
