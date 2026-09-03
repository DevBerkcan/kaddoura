import { CAR_HIGHLIGHTS, SERVICES, SITE, TEAM } from "./constants";

const dealerId = `${SITE.url}/#autodealer`;
const websiteId = `${SITE.url}/#website`;
const homePageId = `${SITE.url}/#webpage`;

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "@id": dealerId,
  name: SITE.name,
  alternateName: SITE.legalName,
  legalName: SITE.legalName,
  description: SITE.description,
  url: SITE.url,
  logo: `${SITE.url}/Logo_neu-remove.png`,
  image: [
    `${SITE.url}/ueber-uns.jpg`,
    `${SITE.url}/1767029764837-hero-no-logo.png`,
  ],
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: String(SITE.foundingYear),
  founder: {
    "@type": "Person",
    name: "Ahmad Kaddoura",
  },
  sameAs: [
    SITE.instagram,
    SITE.mobileDeUrl,
    SITE.kleinanzeigenUrl,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: "Nordrhein-Westfalen",
    postalCode: SITE.address.zip,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  hasMap: SITE.googleMapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  knowsAbout: [
    "Gebrauchtwagen",
    "Jahreswagen",
    "Fahrzeugankauf und Inzahlungnahme",
    "Fahrzeugzulassung",
    "Gebrauchtwagengarantie",
    "Fahrzeugexport",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Wuppertal",
      "@id": "https://www.wikidata.org/wiki/Q2758",
    },
    {
      "@type": "AdministrativeArea",
      name: "Nordrhein-Westfalen",
    },
  ],
  knowsLanguage: SITE.languages,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.salesEmail,
      contactType: "sales",
      availableLanguage: SITE.languages,
      areaServed: "DE",
    },
    {
      "@type": "ContactPoint",
      telephone: SITE.phoneLandline,
      email: SITE.email,
      contactType: "customer service",
      availableLanguage: SITE.languages,
      areaServed: "DE",
    },
  ],
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  image: `${SITE.url}/ueber-uns.jpg`,
  inLanguage: SITE.language,
  publisher: { "@id": dealerId },
});

export const generateHomePageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": homePageId,
  url: SITE.url,
  name: `${SITE.name} – Gebrauchtwagen und Jahreswagen in Wuppertal`,
  description: SITE.description,
  inLanguage: SITE.language,
  isPartOf: { "@id": websiteId },
  about: { "@id": dealerId },
  mainEntity: { "@id": dealerId },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE.url}/1767029764837-hero-no-logo.png`,
  },
  dateModified: SITE.contentLastModified,
});

export const generateVehicleCollectionPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE.url}/fahrzeuge#webpage`,
  url: `${SITE.url}/fahrzeuge`,
  name: `Aktuelle Gebrauchtwagen und Jahreswagen bei ${SITE.name}`,
  description:
    "Aktueller Fahrzeugbestand mit geprüften Gebrauchtwagen und Jahreswagen in Wuppertal.",
  inLanguage: SITE.language,
  isPartOf: { "@id": websiteId },
  about: { "@id": dealerId },
  mainEntity: { "@id": `${SITE.url}/fahrzeuge#vehicle-list` },
  dateModified: SITE.contentLastModified,
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateFAQSchema = (
  faqs: readonly { question: string; answer: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const generateVehicleSchema = (vehicle: {
  name: string;
  image: string;
  url: string;
  description?: string;
  price?: string;
  mileage?: string;
  fuelType?: string;
  transmission?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Car",
  "@id": vehicle.url,
  name: vehicle.name,
  url: vehicle.url,
  image: vehicle.image,
  description: vehicle.description || "",
  priceCurrency: "EUR",
  price: vehicle.price || "",
  mileageFromOdometer: vehicle.mileage || "",
  fuelType: vehicle.fuelType || "Diesel",
  vehicleTransmission: vehicle.transmission || "Automatic",
  manufacturer: vehicle.name.split(" ")[0],
  seller: {
    "@type": "AutoDealer",
    "@id": dealerId,
    name: SITE.name,
    url: SITE.url,
  },
});

export const generateServiceSchema = (pageUrl: string = SITE.url) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${pageUrl}#services`,
  name: `Leistungen von ${SITE.name}`,
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": `${SITE.url}/leistungen#${service.slug}`,
      url: `${SITE.url}/leistungen#${service.slug}`,
      name: service.title,
      description: service.description,
      provider: {
        "@type": "AutoDealer",
        "@id": dealerId,
        name: SITE.name,
      },
      areaServed: {
        "@type": "City",
        name: SITE.address.city,
      },
    },
  })),
});

export const generateAboutPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE.url}/ueber-uns#webpage`,
  url: `${SITE.url}/ueber-uns`,
  name: `Über ${SITE.name}`,
  description: `${SITE.name} ist ein familiengeführter Gebrauchtwagenhändler in Wuppertal und besteht seit ${SITE.foundingYear}.`,
  inLanguage: SITE.language,
  isPartOf: { "@id": websiteId },
  mainEntity: { "@id": dealerId },
  dateModified: SITE.contentLastModified,
});

export const generateTeamSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE.url}/ueber-uns#team`,
  name: `Ansprechpartner bei ${SITE.name}`,
  itemListElement: TEAM.map((member, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.description,
      ...(member.image ? { image: `${SITE.url}${member.image}` } : {}),
      ...(member.phone ? { telephone: member.phone } : {}),
      ...(member.email ? { email: member.email } : {}),
      worksFor: { "@id": dealerId },
    },
  })),
});

export const generateArticleSchema = ({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE.url}${path}#article`,
  headline: title,
  description,
  url: `${SITE.url}${path}`,
  inLanguage: SITE.language,
  datePublished: SITE.contentLastModified,
  dateModified: SITE.contentLastModified,
  author: { "@id": dealerId },
  publisher: { "@id": dealerId },
  mainEntityOfPage: { "@id": `${SITE.url}${path}#webpage` },
});

export const generateVehicleItemListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE.url}/fahrzeuge#vehicle-list`,
  name: `Gebrauchtwagen und Jahreswagen bei ${SITE.name}`,
  url: `${SITE.url}/fahrzeuge`,
  itemListElement: CAR_HIGHLIGHTS.map((car, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Car",
      name: car.model,
      image: `${SITE.url}${car.src}`,
      url: `${SITE.url}/fahrzeuge`,
      seller: {
        "@type": "AutoDealer",
        "@id": dealerId,
        name: SITE.name,
      },
    },
  })),
});
