import type { Metadata } from "next";
import { manrope, inter } from "@/lib/fonts";
import { SEO_KEYWORDS, SITE } from "@/lib/constants";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo-schema";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} - Gebrauchtwagen & Jahreswagen in Wuppertal`,
    template: `%s | ${SITE.name}`,
  },
  description: "🏆 Autocenter Kaddoura - Ihr vertrauensvoller Autohandel in Wuppertal. Hochwertige Gebrauchtwagen & Jahreswagen seit 25 Jahren. ✓ Faire Preise ✓ Persönlicher Service ✓ Schnelle Zulassung.",
  keywords: [...SEO_KEYWORDS],
  applicationName: SITE.name,
  category: "Automotive",
  creator: SITE.name,
  publisher: SITE.name,
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} - Gebrauchtwagen & Jahreswagen in Wuppertal`,
    description: "Hochwertige Gebrauchtwagen & Jahreswagen in Wuppertal. Seit 25 Jahren Ihr vertrauensvoller Partner mit fairem Service.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE.name,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@autocenterkaddoura",
    creator: "@autocenterkaddoura",
    title: `${SITE.name} - Gebrauchtwagen in Wuppertal`,
    description: "Hochwertige Gebrauchtwagen & Jahreswagen. Faire Preise, persönlicher Service, schnelle Zulassung.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

const organizationSchema = generateOrganizationSchema();
const websiteSchema = generateWebsiteSchema();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#003057" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="font-body antialiased">
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
