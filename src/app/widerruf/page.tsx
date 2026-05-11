import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Widerrufsbelehrung",
  description: `Widerrufsbelehrung von ${SITE.name}`,
  alternates: { canonical: `${SITE.url}/widerruf` },
  robots: { index: false },
};

// ↓ Legal Cockpit: HTML-Code hier einfügen
const WIDERRUF_HTML = `
  <p><em>Vollständiger Inhalt folgt via Legal Cockpit.</em></p>
`;

export default function WiderrufPage() {
  return <LegalPage eyebrow="Rechtliches" title="Widerrufsbelehrung" html={WIDERRUF_HTML} />;
}
