import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CarGallery } from "@/components/sections/car-gallery";
import { About } from "@/components/sections/about";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
import { KleinanzeigenCta } from "@/components/sections/kleinanzeigen-cta";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import { Reviews } from "@/components/sections/reviews";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateHomePageSchema,
  generateOrganizationSchema,
  generateServiceSchema,
  generateWebsiteSchema,
} from "@/lib/seo-schema";
import { FAQS, SEO_KEYWORDS, SITE } from "@/lib/constants";
import { getCars } from "@/lib/cars";

const faqSchema = generateFAQSchema(FAQS);
const serviceSchema = generateServiceSchema();
const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Startseite", url: SITE.url }]);
const organizationSchema = generateOrganizationSchema();
const websiteSchema = generateWebsiteSchema();
const homePageSchema = generateHomePageSchema();

export const metadata: Metadata = {
  title: {
    absolute: "Gebrauchtwagen & Jahreswagen | Autocenter Kaddoura Wuppertal",
  },
  description:
    "Autocenter Kaddoura in Wuppertal: geprüfte Gebrauchtwagen und Jahreswagen, faire Inzahlungnahme, Probefahrt, Zulassung und persönliche Beratung. Jetzt Fahrzeug finden.",
  keywords: [...SEO_KEYWORDS],
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Autocenter Kaddoura | Gebrauchtwagen in Wuppertal",
    description:
      "Hochwertige Gebrauchtwagen und Jahreswagen in Wuppertal. Persönliche Beratung, faire Preise und schneller Zulassungsservice.",
    url: SITE.url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${SITE.name} in Wuppertal` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebrauchtwagen in Wuppertal | Autocenter Kaddoura",
    description:
      "Geprüfte Jahres- und Gebrauchtwagen in Wuppertal mit persönlicher Beratung, Probefahrt und Zulassungsservice.",
    images: ["/og-image.png"],
  },
};

export default async function Home() {
  const inventory = await getCars();

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
      <Hero />
      <CarGallery
        initialCars={inventory.cars.slice(0, 6)}
        initialTotal={inventory.total}
      />
      <About />
      <HowItWorks />
      <Team />
      <Services />
      <KleinanzeigenCta />
      <PhotoGallery />
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  );
}
