import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Cookie-Einstellungen",
  description: `Cookie-Einstellungen und Hinweise zur Cookie-Nutzung auf der Website von ${SITE.name}.`,
  alternates: { canonical: `${SITE.url}/cookies-einstellungen` },
  robots: { index: false },
};

// ↓ Legal Cockpit: Cookie-Einstellungs-Widget HTML hier einfügen
const COOKIES_HTML = `
  <p><em>Cookie-Einstellungen folgt via Legal Cockpit.</em></p>
`;

export default function CookiesPage() {
  return <LegalPage eyebrow="Datenschutz" title="Cookie-Einstellungen" html={COOKIES_HTML} />;
}
