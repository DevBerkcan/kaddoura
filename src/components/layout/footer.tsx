import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

const quickLinks = [
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Fahrzeuge", href: "/fahrzeuge" },
  { label: "Services", href: "/#services" },
  { label: "Team", href: "/#team" },
  { label: "Kontakt", href: "/#kontakt" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Cookie-Einstellungen", href: "/cookies-einstellungen" },
  { label: "AGB", href: "/agb" },
  { label: "Widerruf", href: "/widerruf" },
];

export function Footer() {
  return (
    <footer className="pt-12 pb-5 px-6 sm:px-10 bg-white ">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-8 border-b border-[var(--border)] ">
          {/* Brand */}
          <div>
            <Link href="/" aria-label={SITE.name}>
              <Image
                src={SITE.logo}
                alt={SITE.name}
                width={120}
                height={32}
                className="h-8 w-auto mb-3.5 "
              />
            </Link>
            <p className="font-body text-[13px] text-brand-neutral leading-relaxed ">
              Ihr zuverlässiger Partner für Qualitätsfahrzeuge in Wuppertal.
              Kompetente Beratung und erstklassiger Service.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-xs font-bold text-brand-neutral/70 tracking-wider uppercase mb-4 ">
              Schnellzugriff
            </h4>
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block font-body text-[13px] text-brand-neutral/70 hover:text-brand-primary transition-colors mb-2 "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs font-bold text-brand-neutral/70 tracking-wider uppercase mb-4 ">
              Kontakt
            </h4>
            <p className="font-body text-[13px] text-brand-neutral/70 leading-relaxed ">
              {SITE.address.street}
              <br />
              {SITE.address.zip} {SITE.address.city}
            </p>
            <a
              href={`tel:${SITE.phone}`}
              className="block font-body text-[13px] text-brand-neutral/70 mt-2 hover:text-brand-primary transition-colors "
            >
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="block font-body text-[13px] text-brand-neutral/70 mt-1 hover:text-brand-primary transition-colors "
            >
              {SITE.email}
            </a>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xs font-bold text-brand-neutral/70 tracking-wider uppercase mb-4 ">
              Öffnungszeiten
            </h4>
            <p className="font-body text-[13px] text-brand-neutral/70 leading-loose ">
              Mo–Fr: {SITE.hours.weekdays}
              <br />
              Sa: {SITE.hours.saturday}
              <br />
              So: {SITE.hours.sunday}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center pt-5 flex-wrap gap-3">
          <span className="font-body text-xs text-brand-neutral/70 ">
            © {new Date().getFullYear()} {SITE.name}. Alle Rechte vorbehalten.
          </span>
          <div className="flex gap-5 flex-wrap">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[11px] text-brand-neutral/70 hover:text-brand-primary transition-colors "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
