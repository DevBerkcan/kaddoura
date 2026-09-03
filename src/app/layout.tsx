import type { Metadata } from "next";
import { manrope, inter } from "@/lib/fonts";
import { SEO_KEYWORDS, SITE } from "@/lib/constants";
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
  description:
    "Geprüfte Gebrauchtwagen und Jahreswagen in Wuppertal: persönliche Beratung, faire Inzahlungnahme, Probefahrt und Zulassungsservice beim Autocenter Kaddoura.",
  keywords: [...SEO_KEYWORDS],
  applicationName: SITE.name,
  category: "Automotive",
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} - Gebrauchtwagen & Jahreswagen in Wuppertal`,
    description:
      "Geprüfte Gebrauchtwagen und Jahreswagen in Wuppertal mit persönlicher Beratung, fairer Inzahlungnahme und Zulassungsservice.",
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#003057" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
