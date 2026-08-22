import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung der ${SITE.name} GmbH, Friedrich-Ebert-Str. 150, 42117 Wuppertal.`,
  alternates: { canonical: `${SITE.url}/impressum` },
  robots: { index: false },
};

// ↓ Legal Cockpit: HTML-Code hier einfügen
const IMPRESSUM_HTML = `
  <p><strong>Angaben gemäß § 5 TMG</strong><br/>
  Autocenter Kaddoura GmbH<br/>
  Friedrich-Ebert-Str. 150<br/>
  42117 Wuppertal<br/>
  Deutschland</p>

  <p><strong>Kontakt</strong><br/>
  Mobil: +49 157 37015935<br/>
  Telefon: +49 202 2443611<br/>
  Fax: +49 202 2443613<br/>
  Mail Verkauf: <a href="mailto:rami@autocenter-kaddoura.de">rami@autocenter-kaddoura.de</a><br/>
  Mail Verwaltung: <a href="mailto:info@autocenter-kaddoura.de">info@autocenter-kaddoura.de</a><br/>
  Web: <a href="https://www.autocenter-kaddoura.de" target="_blank" rel="noopener noreferrer">www.autocenter-kaddoura.de</a></p>

  <p><strong>Rechtsform</strong><br/>
  Gesellschaft mit beschränkter Haftung (GmbH)</p>

  <p><strong>Vertretungsberechtigte Geschäftsführung</strong><br/>
  Rami Kaddoura</p>

  <p>Die Autocenter Kaddoura GmbH wird vertreten durch den Geschäftsführer Rami Kaddoura.</p>

  <p><strong>Handelsregister</strong><br/>
  Amtsgericht Wuppertal<br/>
  Handelsregisternummer: HRB 36861</p>

  <p><strong>Umsatzsteuer-Identifikationsnummer</strong><br/>
  USt-IdNr. gemäß § 27a Umsatzsteuergesetz:<br/>
  DE463320411</p>

  <p><strong>Steuernummer</strong><br/>
  132/5912/1491</p>

  <p><strong>Berufsbezeichnung und berufsrechtliche Regelungen</strong><br/>
  Berufsbezeichnung: Kraftfahrzeughändler<br/>
  Zuständige Kammer: IHK Wuppertal-Solingen-Remscheid<br/>
  Verliehen in: Deutschland</p>

  <p><strong>Streitschlichtung</strong><br/>
  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a></p>

  <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

  <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

  <p><strong>Haftung für Inhalte</strong><br/>
  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

  <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

  <p><strong>Haftung für Links</strong><br/>
  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>

  <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

  <p><strong>Urheberrecht</strong><br/>
  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>

  <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
`;

export default function ImpressumPage() {
  return <LegalPage eyebrow="Rechtliches" title="Impressum" html={IMPRESSUM_HTML} />;
}
