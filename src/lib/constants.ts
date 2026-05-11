export const SITE = {
  name: "Autocenter Kaddoura",
  tagline: "Qualitätsfahrzeuge in Wuppertal",
  description:
    "Seit über 25 Jahren Ihr vertrauensvoller Partner für hochwertige Jahres- und Gebrauchtwagen. Familienunternehmen mit Herz, Kompetenz und persönlichem Service.",
  url: "https://www.autocenter-kaddoura.de",
  phone: "+49 157 37015935",
  phone2: "+49 172 2812576",
  phoneLandline: "+49 (0)202 2443611",
  email: "info@autocenter-kaddoura.de",
  address: {
    street: "Friedrich-Ebert-Straße 150",
    city: "Wuppertal",
    zip: "42117",
    country: "Deutschland",
  },
  hours: {
    weekdays: "09:00 – 18:00 Uhr",
    saturday: "10:00 – 13:00 Uhr",
    sunday: "Geschlossen",
  },
  mobileDeUrl: "https://home.mobile.de/KADDOURA#ses",
  googleMapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=51.2639,7.1467",
  googleReviewsUrl:
    "https://www.google.com/search?sa=X&sca_esv=d412fff20e7449cb&q=Autocenter+Kaddoura+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NjYzNTM1MLMwtTAyMTAzNDI038DI-IpR3rG0JD85Na8ktUjBOzElJb-0KFEhKLUqNa84Mz8vNW8RKyEVAEHMAQxeAAAA&rldimm=3365650685824061217&tbm=lcl&hl=de-DE&ved=2ahUKEwi-xbnio-CRAxVd2wIHHXtTARAQ9fQKegQIJxAG",
  instagram: "https://instagram.com/autocenterkaddoura",
  whatsapp: "https://wa.me/4915737015935",
  languages: ["Deutsch", "English", "العربية"],
  logo: "/Logo_neu-remove.png",
} as const;

export const IMAGES = {
  heroCar: "/1767029764837.jpeg",
  dealership: "/ueber-uns.jpg",
  rami: "/chef.png",
  ahmad: "/chefbaba.png",
} as const;

export const CAR_HIGHLIGHTS = [
  { src: "/1765802905938.jpeg", model: "Volvo XC40" },
  { src: "/1767029675652.jpeg", model: "Volvo V60" },
  { src: "/1767029685190.jpeg", model: "Volvo C40 Recharge" },
  { src: "/1767029697164.jpeg", model: "Volvo XC60" },
  { src: "/1767029764837.jpeg", model: "Volvo XC90" },
] as const;


export const NAV_LINKS = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Services", href: "#services" },
  { label: "Fahrzeuge", href: "/fahrzeuge" },
  { label: "Team", href: "#team" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const STATS = [
  { end: 25, suffix: "+", label: "Jahre Erfahrung" },
  { end: 379, suffix: ".000+", label: "Besucher" },
  { end: 100, suffix: "%", label: "Familienunternehmen" },
] as const;

export const SERVICES = [
  {
    icon: "car" as const,
    title: "Faire Inzahlungnahme",
    description:
      "Wir bewerten Ihr Auto transparent und bieten Ihnen einen fairen Preis. Gerne nehmen wir Ihr aktuelles Fahrzeug in Zahlung.",
  },
  {
    icon: "eye" as const,
    title: "Online-Besichtigung",
    description:
      "Sehen Sie Ihr Wunschfahrzeug bequem von zu Hause aus live per WhatsApp-Video in Echtzeit.",
  },
  {
    icon: "globe" as const,
    title: "Internationaler Verkauf",
    description:
      "Netto-Abrechnung, Ausfuhrdokumente und alle Formalitäten für Nicht-EU-Länder.",
  },
  {
    icon: "wrench" as const,
    title: "Rundum-Service",
    description:
      "TÜV, Inspektion, DEKRA-Gebrauchtwagencheck, Zulassung und optionale Garantie.",
  },
  {
    icon: "filecheck" as const,
    title: "Zulassungsdienst",
    description:
      "Fahrzeugzulassung Deutschlandweit innerhalb von 10 Minuten",
  },
  {
    icon: "shield" as const,
    title: "Gebrauchtwagengarantie",
    description:
      "Optionale Garantie für maximale Sicherheit und Komfort nach dem Kauf.",
  },
] as const;

export const TEAM = [
  {
    name: "Rami Kaddoura",
    role: "Geschäftsführer",
    description:
      "Geschäftsführer und Ihr Hauptansprechpartner für alle Fragen rund um hochwertige Fahrzeuge und unseren Service.",
    initials: "RK",
    image: IMAGES.rami,
  },
  {
    name: "Ahmad Kaddoura",
    role: "Geschäftsführer",
    description:
      "Geschäftsführer mit langjähriger Expertise im Automobilhandel und persönlicher Kundenbetreuung.",
    initials: "AK",
    image: IMAGES.ahmad,
  },
  {
    name: "Jennifer Scholl",
    role: "Verwaltung",
    description:
      "Verwaltungsfachkraft, zuständig für Büroorganisation und Kundenanfragen.",
    initials: "JS",
    image: null,
  },
] as const;

export const REVIEWS = [
  {
    name: "Fabian Fromm",
    text: "Ich habe vor kurzem einen XC90 beim Autocenter Kaddoura gekauft und bin absolut begeistert. Besonders hervorheben möchte ich den Verkäufer und Eigentümer Rami – äußerst freundlich, kompetent und ehrlich.",
    time: "vor 2 Wochen",
  },
  {
    name: "Ronni Holzapfel",
    text: "So macht Autokauf Spaß. Unkompliziert, freundlich, ehrlich, zuverlässig. Herr Kaddoura hat das Fahrzeug ausführlich erklärt. Ein klares Weiterempfehlen.",
    time: "vor 1 Monat",
  },
  {
    name: "Rene Deutsch",
    text: "Von A bis Z alles bestens, vom Erstgespräch bis zur Übergabe eines wunderschönen XC90! Absolut weiterzuempfehlen.",
    time: "vor 3 Wochen",
  },
  {
    name: "Dieter Schulte",
    text: "Herr Kaddoura bietet günstige junge Volvos von guter Qualität an. Ich bin mit meinem Volvo XC60 B4 Diesel sehr zufrieden und kann Herrn Kaddoura und sein Team sehr empfehlen.",
    time: "vor 2 Monaten",
  },
  {
    name: "Mo Ghazaleh",
    text: "5 Sterne seit 10 Jahren. Schnelle Umsetzung, ehrliche Beratung von A–Z, vertrauenswürdig durch Transparenz, sehr faire Preise, engagiert.",
    time: "vor 1 Monat",
  },
  {
    name: "Dr. Hermann Teutemacher",
    text: "Seit mehr als 13 Jahren Kunde. Fairness, Zuverlässigkeit, Engagement — ich werde wohl nie mehr woanders meine Autos kaufen.",
    time: "vor 3 Monaten",
  },
  {
    name: "Sami Alkhatib",
    text: "Der gesamte Kaufablauf war äußerst professionell und angenehm. Herr Kaddoura war sehr hilfsbereit. Ich kann das Autohaus absolut weiterempfehlen.",
    time: "vor 2 Wochen",
  },
] as const;

export const FAQS = [
{
  question: "Wie schnell erhalte ich mein Fahrzeug?",
  answer:
    "Unsere Fahrzeuge sind sofort verfügbar. Nach erfolgreichem Zahlungseingang können Sie Ihr Fahrzeug in der Regel innerhalb von nur 10 Minuten mitnehmen und direkt vom Hof fahren.",
},
  {
    question: "Kann ich vor dem Kauf eine Probefahrt machen?",
    answer:
      "Selbstverständlich! Vereinbaren Sie einfach telefonisch oder per WhatsApp einen Termin für eine Probefahrt.",
  },
  {
    question: "Sind die Fahrzeuge geprüft?",
    answer:
      "Ja, alle unsere Fahrzeuge werden vor dem Verkauf sorgfältig geprüft und bei Bedarf professionell aufbereitet.",
  },
  {
    question: "Bieten Sie eine Garantie auf Gebrauchtwagen an?",
    answer:
      "Ja, wir bieten optional eine Gebrauchtwagengarantie für zusätzliche Sicherheit nach dem Kauf an.",
  },
  {
    question: "Nehmen Sie mein altes Fahrzeug in Zahlung?",
    answer:
      "Ja, wir bewerten Ihr Fahrzeug transparent und bieten Ihnen eine faire Inzahlungnahme an.",
  },
  {
    question: "Verkaufen Sie auch Fahrzeuge ins Ausland?",
    answer:
      "Ja, wir bieten Netto-Auslandsverkauf mit kompletter Abwicklung inklusive Ausfuhrdokumenten an.",
  },
  {
    question: "In welchen Sprachen kann ich beraten werden?",
    answer:
      "Wir beraten Sie gerne auf Deutsch, Englisch und Arabisch.",
  },
] as const;
