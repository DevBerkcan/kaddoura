import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SITE } from "@/lib/constants";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo-schema";

const pageUrl = `${SITE.url}/leistungen`;

export const metadata: Metadata = {
  title: { absolute: `Leistungen beim Autokauf | ${SITE.name} Wuppertal` },
  description:
    "Inzahlungnahme, Probefahrt, Online-Besichtigung, Zulassungsdienst, Gebrauchtwagengarantie und Exportservice beim Autocenter Kaddoura in Wuppertal.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Leistungen rund um den Autokauf | ${SITE.name}`,
    description:
      "Alle Leistungen rund um Auswahl, Kauf, Zulassung und Übergabe eines Gebrauchtwagens in Wuppertal.",
    url: pageUrl,
    type: "website",
    images: [{ url: "/og-image.png", alt: `Leistungen von ${SITE.name}` }],
  },
};

const schemas = [
  generateServiceSchema(pageUrl),
  generateBreadcrumbSchema([
    { name: "Startseite", url: SITE.url },
    { name: "Leistungen", url: pageUrl },
  ]),
];

const process = [
  ["1", "Anfrage", "Wunschfahrzeug auswählen und telefonisch, per WhatsApp oder über die Website Kontakt aufnehmen."],
  ["2", "Prüfen", "Verfügbarkeit klären, Fahrzeug besichtigen und eine Probefahrt oder Online-Besichtigung vereinbaren."],
  ["3", "Kauf abstimmen", "Preis, mögliche Inzahlungnahme, Garantie und gewünschte Zusatzleistungen verbindlich besprechen."],
  ["4", "Zulassung und Übergabe", "Zulassung nach Bedarf vorbereiten und das Fahrzeug am Standort in Wuppertal übernehmen."],
];

export default function LeistungenPage() {
  return (
    <main className="bg-white pt-28 pb-24">
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <article className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <header className="py-12 max-w-[850px]">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-brand-primary mb-4">
            Services in Wuppertal
          </p>
          <h1 className="font-display font-extrabold text-brand-tertiary leading-tight text-4xl sm:text-5xl lg:text-6xl">
            Leistungen rund um den Gebrauchtwagenkauf
          </h1>
          <p className="text-lg leading-relaxed text-[var(--text-body)] mt-6">
            Das Autocenter Kaddoura unterstützt Fahrzeugkäufer in Wuppertal bei
            Auswahl, Besichtigung, Inzahlungnahme, Kauf, Zulassung und Übergabe.
            Für Interessenten außerhalb der Region stehen Online-Besichtigung
            und Unterstützung beim internationalen Verkauf zur Verfügung.
          </p>
        </header>

        <section aria-labelledby="leistungsuebersicht" className="py-12 border-t border-[var(--border)]">
          <h2 id="leistungsuebersicht" className="font-display text-3xl font-extrabold text-brand-tertiary">
            Leistungsübersicht
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {SERVICES.map((service) => (
              <section id={service.slug} key={service.slug} className="scroll-mt-28 rounded-2xl border border-[var(--border)] p-7">
                <h3 className="font-display text-xl font-bold text-brand-tertiary">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)]">{service.description}</p>
                <a href={`mailto:${SITE.email}?subject=${encodeURIComponent(service.title)}`} className="inline-block mt-5 text-sm font-bold text-brand-primary">
                  {service.title} anfragen
                </a>
              </section>
            ))}
          </div>
        </section>

        <section aria-labelledby="ablauf" className="py-16 border-t border-[var(--border)]">
          <h2 id="ablauf" className="font-display text-3xl font-extrabold text-brand-tertiary">
            So läuft ein Fahrzeugkauf ab
          </h2>
          <ol className="grid md:grid-cols-2 gap-5 mt-8">
            {process.map(([number, title, description]) => (
              <li key={number} className="rounded-2xl bg-brand-secondary p-6">
                <span className="text-sm font-bold text-brand-primary">Schritt {number}</span>
                <h3 className="font-display text-lg font-bold text-brand-tertiary mt-2">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-body)] mt-2">{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="vergleich" className="py-16 border-t border-[var(--border)] overflow-x-auto">
          <h2 id="vergleich" className="font-display text-3xl font-extrabold text-brand-tertiary">
            Besichtigung vor Ort oder online?
          </h2>
          <table className="w-full min-w-[620px] mt-8 text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="p-4">Option</th><th className="p-4">Geeignet für</th><th className="p-4">Enthalten</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--border)]">
                <th className="p-4 font-semibold">Vor Ort in Wuppertal</th>
                <td className="p-4">Interessenten, die das Fahrzeug selbst prüfen und fahren möchten</td>
                <td className="p-4">Persönliche Besichtigung, Beratung und Probefahrt nach Termin</td>
              </tr>
              <tr className="border-b border-[var(--border)]">
                <th className="p-4 font-semibold">WhatsApp-Video</th>
                <td className="p-4">Interessenten mit längerer Anreise oder aus dem Ausland</td>
                <td className="p-4">Live-Ansicht des Fahrzeugs und direkte Rückfragen per Video</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section aria-labelledby="leistungen-faq" className="py-16 border-t border-[var(--border)] max-w-[850px]">
          <h2 id="leistungen-faq" className="font-display text-3xl font-extrabold text-brand-tertiary">
            Häufige Fragen zu den Leistungen
          </h2>
          <div className="mt-8 space-y-7">
            <div><h3 className="font-display text-lg font-bold">Was kosten die Zusatzleistungen?</h3><p className="mt-2 leading-relaxed text-[var(--text-body)]">Die Kosten hängen vom Fahrzeug und vom gewünschten Leistungsumfang ab. Verbindliche Preise werden vor dem Kauf individuell mitgeteilt.</p></div>
            <div><h3 className="font-display text-lg font-bold">Ist eine Probefahrt möglich?</h3><p className="mt-2 leading-relaxed text-[var(--text-body)]">Ja. Eine Probefahrt kann telefonisch oder per WhatsApp für ein verfügbares Fahrzeug vereinbart werden.</p></div>
            <div><h3 className="font-display text-lg font-bold">Kann ein vorhandenes Fahrzeug angerechnet werden?</h3><p className="mt-2 leading-relaxed text-[var(--text-body)]">Ja. Das Autocenter Kaddoura bewertet das vorhandene Fahrzeug und erstellt ein Angebot für die Inzahlungnahme.</p></div>
          </div>
        </section>

        <aside className="rounded-2xl bg-brand-primary p-8 sm:p-10 text-white">
          <h2 className="font-display text-2xl font-bold">Nächster Schritt</h2>
          <p className="mt-3 text-white/80">Wählen Sie zuerst ein verfügbares Fahrzeug oder lassen Sie sich persönlich beraten.</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/fahrzeuge" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-primary">Fahrzeugbestand ansehen</Link>
            <Link href="/#kontakt" className="rounded-full border border-white/50 px-6 py-3 text-sm font-bold text-white">Beratung anfragen</Link>
          </div>
        </aside>
      </article>
    </main>
  );
}
