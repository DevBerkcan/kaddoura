import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, TEAM } from "@/lib/constants";
import {
  generateAboutPageSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateTeamSchema,
} from "@/lib/seo-schema";

const pageUrl = `${SITE.url}/ueber-uns`;

export const metadata: Metadata = {
  title: { absolute: `Über ${SITE.name} | Autohaus in Wuppertal` },
  description:
    "Lernen Sie das Autocenter Kaddoura kennen: familiengeführter Gebrauchtwagenhandel in Wuppertal seit 2000, Ansprechpartner, Standort und Arbeitsweise.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Über ${SITE.name}`,
    description:
      "Familiengeführter Gebrauchtwagenhandel in Wuppertal seit 2000 – mit persönlichen Ansprechpartnern und transparenten Abläufen.",
    url: pageUrl,
    type: "website",
    images: [{ url: "/ueber-uns.jpg", alt: `${SITE.name} in Wuppertal` }],
  },
};

const schemas = [
  generateOrganizationSchema(),
  generateAboutPageSchema(),
  generateTeamSchema(),
  generateBreadcrumbSchema([
    { name: "Startseite", url: SITE.url },
    { name: "Über uns", url: pageUrl },
  ]),
];

export default function UeberUnsPage() {
  return (
    <main className="bg-white pt-28 pb-24">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <header className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center py-12">
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.16em] uppercase text-brand-primary mb-4">
              Familienunternehmen aus Wuppertal
            </p>
            <h1 className="font-display font-extrabold text-brand-tertiary leading-tight text-4xl sm:text-5xl lg:text-6xl">
              Über das Autocenter Kaddoura
            </h1>
            <p className="font-body text-lg leading-relaxed text-[var(--text-body)] mt-6 max-w-[680px]">
              Das Autocenter Kaddoura ist ein familiengeführter
              Gebrauchtwagenhändler in Wuppertal. Seit 2000 bietet das
              Unternehmen geprüfte Jahres- und Gebrauchtwagen sowie persönliche
              Unterstützung von der Fahrzeugauswahl bis zur Übergabe an.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/fahrzeuge"
                className="rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white"
              >
                Aktuelle Gebrauchtwagen ansehen
              </Link>
              <Link
                href="/leistungen"
                className="rounded-full border border-brand-primary px-6 py-3 text-sm font-bold text-brand-primary"
              >
                Leistungen kennenlernen
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)]">
            <Image
              src="/ueber-uns.jpg"
              alt={`Standort von ${SITE.name} in Wuppertal`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </header>

        <section aria-labelledby="fakten" className="py-14 border-y border-[var(--border)]">
          <h2 id="fakten" className="font-display text-3xl font-extrabold text-brand-tertiary mb-8">
            Unternehmensfakten
          </h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Unternehmen", SITE.legalName],
              ["Gegründet", String(SITE.foundingYear)],
              ["Standort", `${SITE.address.zip} ${SITE.address.city}`],
              ["Beratung", SITE.languages.join(" · ")],
            ].map(([term, value]) => (
              <div key={term} className="rounded-xl bg-brand-secondary p-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-neutral">
                  {term}
                </dt>
                <dd className="mt-2 font-display font-bold text-brand-tertiary">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="arbeitsweise" className="py-16 max-w-[850px]">
          <h2 id="arbeitsweise" className="font-display text-3xl font-extrabold text-brand-tertiary">
            Beratung und Arbeitsweise
          </h2>
          <p className="mt-5 leading-relaxed text-[var(--text-body)]">
            Das Autocenter Kaddoura begleitet Kaufinteressenten persönlich bei
            Besichtigung, Probefahrt, Inzahlungnahme und Zulassung. Wer nicht
            direkt nach Wuppertal kommen kann, kann ein Fahrzeug vorab per
            WhatsApp-Video besichtigen. Für internationale Käufer unterstützt
            das Team außerdem bei Ausfuhrdokumenten und den erforderlichen
            Formalitäten.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-body)]">
            Die angebotenen Leistungen werden je nach Fahrzeug und Bedarf
            abgestimmt. Verbindliche Angaben zu Zustand, Ausstattung, Preis und
            Verfügbarkeit erhalten Interessenten immer zum konkreten Fahrzeug.
          </p>
        </section>

        <section aria-labelledby="ansprechpartner" className="py-16 border-t border-[var(--border)]">
          <h2 id="ansprechpartner" className="font-display text-3xl font-extrabold text-brand-tertiary">
            Ansprechpartner
          </h2>
          <p className="mt-4 max-w-[760px] leading-relaxed text-brand-neutral">
            Für Verkauf, Beratung und Verwaltung stehen feste Ansprechpartner
            zur Verfügung.
          </p>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {TEAM.map((member) => (
              <article key={member.name} className="rounded-2xl border border-[var(--border)] p-6">
                <h3 className="font-display text-xl font-bold text-brand-tertiary">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-brand-primary mt-1">{member.role}</p>
                <p className="text-sm leading-relaxed text-[var(--text-body)] mt-4">
                  {member.description}
                </p>
                {member.phone && (
                  <a className="block text-sm font-semibold text-brand-primary mt-5" href={`tel:${member.phone}`}>
                    {member.phone}
                  </a>
                )}
                {member.email && (
                  <a className="block text-sm text-brand-primary mt-1" href={`mailto:${member.email}`}>
                    {member.email}
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <aside className="rounded-2xl bg-brand-primary p-8 sm:p-10 text-white mt-8">
          <h2 className="font-display text-2xl font-bold">Besuch in Wuppertal planen</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            {SITE.address.street}, {SITE.address.zip} {SITE.address.city}. Geöffnet
            montags bis freitags von {SITE.hours.weekdays} und samstags von {SITE.hours.saturday}.
          </p>
          <Link href="/#kontakt" className="inline-block mt-6 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-primary">
            Kontakt und Anfahrt
          </Link>
        </aside>
      </article>
    </main>
  );
}
