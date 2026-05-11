import { CAR_HIGHLIGHTS, SERVICES, SITE } from "./constants";

const dealerId = `${SITE.url}/#autodealer`;
const websiteId = `${SITE.url}/#website`;

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["AutoDealer", "LocalBusiness", "Organization"],
  "@id": dealerId,
  name: SITE.name,
  legalName: SITE.name,
  description: SITE.description,
  url: SITE.url,
  logo: `${SITE.url}/Logo_neu-remove.png`,
  image: `${SITE.url}/ueber-uns.jpg`,
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: "2000",
  sameAs: [
    SITE.instagram,
    SITE.whatsapp,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    postalCode: SITE.address.zip,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "320",
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "€€",
  areaServed: {
    "@type": "City",
    name: "Wuppertal",
    "@id": "https://www.wikidata.org/wiki/Q2758",
  },
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  image: `${SITE.url}/ueber-uns.jpg`,
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

export const generateServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE.url}/#services`,
  name: `Leistungen von ${SITE.name}`,
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
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
