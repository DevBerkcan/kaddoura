import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/seo-schema";

const pageUrl = `${SITE.url}/wissen`;

export const metadata: Metadata = {
  title: { absolute: `Autokauf-Wissen | ${SITE.name}` },
  description:
    "Sachliche Ratgeber und Antworten zu Gebrauchtwagen, Jahreswagen, Besichtigung, Probefahrt und Fahrzeugkauf – herausgegeben vom Autocenter Kaddoura.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Autokauf-Wissen | ${SITE.name}`,
    description: "Ratgeber und Entscheidungshilfen für den Kauf eines Gebraucht- oder Jahreswagens.",
    url: pageUrl,
    type: "website",
    images: [{ url: "/og-image.png", alt: `Autokauf-Ratgeber von ${SITE.name}` }],
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Startseite", url: SITE.url },
  { name: "Wissen", url: pageUrl },
]);

export default function WissenPage() {
  return (
    <main className="bg-white pt-28 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10">
        <header className="py-12 max-w-[800px]">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-brand-primary mb-4">Wissen & Orientierung</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-tertiary">
            Ratgeber zum Gebrauchtwagenkauf
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-body)]">
            Der Wissensbereich des Autocenter Kaddoura beantwortet häufige
            Fragen zu Fahrzeugauswahl, Besichtigung und Kaufprozess. Fachliche
            Aussagen werden, wo erforderlich, mit Primärquellen oder anerkannten
            Prüforganisationen belegt.
          </p>
        </header>

        <section aria-labelledby="ratgeber" className="py-12 border-t border-[var(--border)]">
          <h2 id="ratgeber" className="font-display text-3xl font-extrabold text-brand-tertiary">Aktueller Ratgeber</h2>
          <article className="mt-8 rounded-2xl border border-[var(--border)] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary">Kaufentscheidung</p>
            <h3 className="font-display text-2xl font-bold text-brand-tertiary mt-3">Gebrauchtwagen oder Jahreswagen?</h3>
            <p className="mt-4 leading-relaxed text-[var(--text-body)]">
              Definitionen, Unterschiede, Prüfpunkte und ein nachvollziehbarer
              Ablauf für Besichtigung und Probefahrt.
            </p>
            <Link href="/wissen/gebrauchtwagenkauf" className="inline-block mt-6 text-sm font-bold text-brand-primary">
              Ratgeber zum Gebrauchtwagenkauf lesen
            </Link>
          </article>
        </section>

        <section aria-labelledby="direkte-antworten" className="py-14 border-t border-[var(--border)]">
          <h2 id="direkte-antworten" className="font-display text-3xl font-extrabold text-brand-tertiary">Direkte Antworten</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-xl bg-brand-secondary p-6"><h3 className="font-display text-lg font-bold">Wo kann ich Fahrzeuge besichtigen?</h3><p className="mt-2 text-sm leading-relaxed">Am Standort Friedrich-Ebert-Straße 150 in Wuppertal oder vorab live per WhatsApp-Video.</p></div>
            <div className="rounded-xl bg-brand-secondary p-6"><h3 className="font-display text-lg font-bold">Wie starte ich eine Probefahrt?</h3><p className="mt-2 text-sm leading-relaxed">Wunschfahrzeug auswählen, Verfügbarkeit prüfen und telefonisch oder per WhatsApp einen Termin vereinbaren.</p></div>
            <div className="rounded-xl bg-brand-secondary p-6"><h3 className="font-display text-lg font-bold">Welche Kaufleistungen gibt es?</h3><p className="mt-2 text-sm leading-relaxed">Unter anderem Inzahlungnahme, Zulassungsservice, optionale Gebrauchtwagengarantie und Export-Unterstützung.</p></div>
            <div className="rounded-xl bg-brand-secondary p-6"><h3 className="font-display text-lg font-bold">Wo finde ich aktuelle Preise?</h3><p className="mt-2 text-sm leading-relaxed">Preis, Laufleistung, Erstzulassung und Ausstattung stehen beim jeweiligen Fahrzeug im aktuellen Bestand.</p></div>
          </div>
        </section>

        <nav aria-label="Weiterführende Inhalte" className="rounded-2xl bg-brand-primary p-8 text-white mt-8">
          <h2 className="font-display text-2xl font-bold">Weiterführende Inhalte</h2>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/fahrzeuge" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-primary">Aktuelle Fahrzeuge</Link>
            <Link href="/leistungen" className="rounded-full border border-white/50 px-5 py-2.5 text-sm font-bold">Leistungen</Link>
            <Link href="/ueber-uns" className="rounded-full border border-white/50 px-5 py-2.5 text-sm font-bold">Über das Autohaus</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
