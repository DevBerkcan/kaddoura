import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo-schema";

const path = "/wissen/gebrauchtwagenkauf";
const pageUrl = `${SITE.url}${path}`;
const title = "Gebrauchtwagen oder Jahreswagen: Unterschiede und Kaufcheck";
const description =
  "Was unterscheidet Gebrauchtwagen und Jahreswagen? Definitionen, Vergleich, Prüfpunkte, Probefahrt und Kaufablauf verständlich erklärt.";

export const metadata: Metadata = {
  title: { absolute: `Gebrauchtwagen oder Jahreswagen? | ${SITE.name}` },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "article",
    modifiedTime: `${SITE.contentLastModified}T00:00:00+02:00`,
    images: [{ url: "/1767029764837-hero-no-logo.png", alt: "Volvo XC90 als Beispiel für einen jungen Gebrauchtwagen" }],
  },
};

const schemas = [
  generateArticleSchema({ path, title, description }),
  generateBreadcrumbSchema([
    { name: "Startseite", url: SITE.url },
    { name: "Wissen", url: `${SITE.url}/wissen` },
    { name: "Gebrauchtwagenkauf", url: pageUrl },
  ]),
];

export default function GebrauchtwagenkaufPage() {
  return (
    <main className="bg-white pt-28 pb-24">
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <article className="max-w-[900px] mx-auto px-6 sm:px-10">
        <header className="py-12">
          <nav aria-label="Breadcrumb" className="text-sm text-brand-neutral mb-5">
            <Link href="/wissen" className="hover:text-brand-primary">Wissen</Link> / Gebrauchtwagenkauf
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight text-brand-tertiary">
            Gebrauchtwagen oder Jahreswagen: Was ist der Unterschied?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-body)]">
            Ein Jahreswagen ist eine besondere Form des Gebrauchtwagens. Für die
            Kaufentscheidung sind nicht allein die Bezeichnung, sondern vor
            allem Erstzulassung, Laufleistung, Nutzung, dokumentierter Zustand,
            Ausstattung und Gesamtpreis des konkreten Fahrzeugs entscheidend.
          </p>
          <div className="mt-5 text-sm text-brand-neutral">
            Herausgeber: {SITE.legalName} · <time dateTime={SITE.contentLastModified}>Aktualisiert am 3. September 2026</time>
          </div>
        </header>

        <section aria-labelledby="definitionen" className="py-12 border-t border-[var(--border)]">
          <h2 id="definitionen" className="font-display text-3xl font-extrabold text-brand-tertiary">Definitionen</h2>
          <div className="mt-7 space-y-7">
            <div><h3 className="font-display text-xl font-bold">Was ist ein Gebrauchtwagen?</h3><p className="mt-2 leading-relaxed text-[var(--text-body)]">Ein Gebrauchtwagen ist ein Fahrzeug, das nicht mehr als Neuwagen gilt. Die Pkw-Energieverbrauchskennzeichnungsverordnung grenzt „gebraucht“ darüber ab, dass die Voraussetzungen für einen Neuwagen nicht erfüllt sind. Für Käufer bleiben die konkreten Angaben im Angebot und Kaufvertrag maßgeblich.</p></div>
            <div><h3 className="font-display text-xl font-bold">Was ist ein Jahreswagen?</h3><p className="mt-2 leading-relaxed text-[var(--text-body)]">„Jahreswagen“ ist eine Beschaffenheitsangabe für einen jungen Gebrauchtwagen. Der Bundesgerichtshof verbindet die Bezeichnung in seiner Rechtsprechung unter anderem mit einem begrenzten Zeitraum zwischen Herstellung und Erstzulassung. Deshalb sollten Herstellungsdatum, Erstzulassung und vorherige Nutzung konkret geprüft werden.</p></div>
          </div>
        </section>

        <section aria-labelledby="vergleich" className="py-12 border-t border-[var(--border)] overflow-x-auto">
          <h2 id="vergleich" className="font-display text-3xl font-extrabold text-brand-tertiary">Gebrauchtwagen und Jahreswagen im Vergleich</h2>
          <table className="w-full min-w-[650px] mt-8 text-left border-collapse">
            <thead><tr className="border-b border-[var(--border)]"><th className="p-4">Kriterium</th><th className="p-4">Jahreswagen</th><th className="p-4">Gebrauchtwagen allgemein</th></tr></thead>
            <tbody>
              <tr className="border-b border-[var(--border)]"><th className="p-4">Einordnung</th><td className="p-4">Junger Gebrauchtwagen mit besonderer Altersangabe</td><td className="p-4">Oberbegriff für bereits genutzte Fahrzeuge</td></tr>
              <tr className="border-b border-[var(--border)]"><th className="p-4">Auswahl</th><td className="p-4">Stärker auf junge Fahrzeuge begrenzt</td><td className="p-4">Breites Spektrum bei Alter, Laufleistung und Preis</td></tr>
              <tr className="border-b border-[var(--border)]"><th className="p-4">Prüfschwerpunkt</th><td className="p-4">Herstellung, Erstzulassung, Vornutzung und Ausstattung</td><td className="p-4">Zusätzlich Wartungshistorie, Verschleiß und Zahl der Vorhalter</td></tr>
              <tr className="border-b border-[var(--border)]"><th className="p-4">Entscheidung</th><td className="p-4">Geeignet, wenn ein relativ junges Fahrzeug gesucht wird</td><td className="p-4">Geeignet, wenn Auswahl und individuelles Budget wichtiger sind</td></tr>
            </tbody>
          </table>
        </section>

        <section aria-labelledby="kaufcheck" className="py-12 border-t border-[var(--border)]">
          <h2 id="kaufcheck" className="font-display text-3xl font-extrabold text-brand-tertiary">Was sollte vor dem Kauf geprüft werden?</h2>
          <p className="mt-4 leading-relaxed text-[var(--text-body)]">TÜV NORD empfiehlt, Fahrzeug und Unterlagen sorgfältig zu prüfen und Vereinbarungen schriftlich festzuhalten. Diese Punkte schaffen eine belastbare Entscheidungsgrundlage:</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {["Erstzulassung, Kilometerstand und Fahrzeug-Ident-Nummer", "Zulassungsbescheinigungen Teil I und II", "Serviceheft, Wartungsrechnungen und HU-Berichte", "Karosserie, Lack, Spaltmaße und erkennbare Schäden", "Reifen, Bremsen, Beleuchtung und Fahrzeugfunktionen", "Motor, Getriebe und auffällige Geräusche", "Vereinbarte Ausstattung und vorhandene Schlüssel", "Alle Zusagen schriftlich im Kaufvertrag"].map((item) => <li key={item} className="rounded-lg bg-brand-secondary p-4 text-sm leading-relaxed">{item}</li>)}
          </ul>
        </section>

        <section aria-labelledby="probefahrt" className="py-12 border-t border-[var(--border)]">
          <h2 id="probefahrt" className="font-display text-3xl font-extrabold text-brand-tertiary">Wie läuft die Auswahl praktisch ab?</h2>
          <ol className="mt-7 space-y-5 list-decimal pl-5">
            <li className="pl-2"><strong>Bedarf festlegen:</strong> Budget, Fahrzeuggröße, Antrieb, gewünschte Ausstattung und geplante Nutzung bestimmen.</li>
            <li className="pl-2"><strong>Angebot prüfen:</strong> Preis, Laufleistung, Erstzulassung, Ausstattung und Verfügbarkeit vergleichen.</li>
            <li className="pl-2"><strong>Besichtigung vereinbaren:</strong> Fahrzeug vor Ort ansehen oder bei längerer Anreise zunächst eine Online-Besichtigung nutzen.</li>
            <li className="pl-2"><strong>Probefahrt durchführen:</strong> Sitzposition, Bedienung, Geräusche, Bremsverhalten und relevante Funktionen prüfen.</li>
            <li className="pl-2"><strong>Vertrag und Übergabe:</strong> Fahrzeugdaten, Zustand, Zusagen, Dokumente und Übergabeumfang schriftlich festhalten.</li>
          </ol>
        </section>

        <section aria-labelledby="quellen" className="py-12 border-t border-[var(--border)]">
          <h2 id="quellen" className="font-display text-2xl font-extrabold text-brand-tertiary">Quellen und weiterführende Informationen</h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed">
            <li><a className="text-brand-primary underline" href="https://www.gesetze-im-internet.de/pkw-envkv/__2.html" target="_blank" rel="noopener noreferrer">Bundesministerium der Justiz: § 2 Pkw-EnVKV – Begriffsbestimmungen</a></li>
            <li><a className="text-brand-primary underline" href="https://juris.bundesgerichtshof.de/cgi-bin/rechtsprechung/document.py?Art=en&Blank=1.pdf&Gericht=bgh&anz=1&nr=75590&pos=0&sid=0" target="_blank" rel="noopener noreferrer">Bundesgerichtshof: Rechtsprechung zur Beschaffenheitsangabe „Jahreswagen“</a></li>
            <li><a className="text-brand-primary underline" href="https://www.tuev-nord.de/de/wissen/ratgeber-und-tipps-mobilitaet/tipps-zum-gebrauchtwagenkauf/" target="_blank" rel="noopener noreferrer">TÜV NORD: Tipps und Checkliste zum Gebrauchtwagenkauf</a></li>
            <li><a className="text-brand-primary underline" href="https://www.verbraucherzentrale.de/wissen/vertraege-reklamation/kundenrechte/regeln-beim-kaufvertrag-das-muessen-sie-wissen-5032" target="_blank" rel="noopener noreferrer">Verbraucherzentrale: Regeln beim Kaufvertrag</a></li>
          </ul>
          <p className="mt-5 text-xs text-brand-neutral">Dieser Ratgeber bietet eine allgemeine Orientierung und ersetzt keine Rechts- oder Sachverständigenberatung.</p>
        </section>

        <aside className="rounded-2xl bg-brand-primary p-8 sm:p-10 text-white">
          <h2 className="font-display text-2xl font-bold">Konkretes Fahrzeug vergleichen</h2>
          <p className="mt-3 text-white/80 leading-relaxed">Im aktuellen Bestand finden Sie die jeweiligen Angaben zu Preis, Erstzulassung, Laufleistung, Antrieb und Ausstattung.</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/fahrzeuge" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-primary">Fahrzeuge vergleichen</Link>
            <Link href="/leistungen" className="rounded-full border border-white/50 px-6 py-3 text-sm font-bold">Kaufleistungen ansehen</Link>
          </div>
        </aside>
      </article>
    </main>
  );
}
