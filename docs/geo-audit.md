# SEO- und GEO-Audit – Autocenter Kaddoura

Stand: 3. September 2026  
Scope: vollständige öffentlich erreichbare Website im Repository  
Bewertung: Zustand nach der in diesem Audit dokumentierten Umsetzung

## 1. Executive Summary

Autocenter Kaddoura ist als familiengeführter Gebrauchtwagenhändler in Wuppertal klar positioniert. Die Website nennt seit der Optimierung eindeutig Unternehmen, Rechtsname, Gründungsjahr, Standort, Leistungen, Zielgruppen, Ansprechpartner und Einzugsgebiet. Zentrale Informationen liegen als sichtbarer HTML-Inhalt und als konsistentes Schema.org-Markup vor.

Die größten Verbesserungen sind:

- klare Unternehmens-Entity mit `AutoDealer`, `AboutPage`, `Person`, `Service`, `WebPage` und `CollectionPage`;
- eigenständige, indexierbare Seiten für Unternehmen, Leistungen und Wissen;
- belegter Ratgeber mit Definitionen, Vergleich, Prozess und Primärquellen;
- serverseitig vorgerenderte Fahrzeug-Highlights auf der Startseite;
- korrekte Canonicals, indexierbare URL-Struktur, stabile Änderungsdaten und Bild-Sitemap;
- direkte Antworten auf lokale und transaktionale Nutzerfragen;
- semantische interne Links statt ausschließlich fragmentbasierter Navigation.

Der aktuelle Gesamt-GEO-Score beträgt **80/100**. Das ist eine gute technische und semantische Basis. Die größten verbleibenden Hebel sind individuelle, indexierbare Fahrzeugdetailseiten, mehr eigene Erfahrungsdaten und nachprüfbare externe Entity-Signale.

## 2. Website- und Zielgruppenmodell

### Unternehmens-Entity

- Marke: Autocenter Kaddoura
- Rechtlicher Name: Autocenter Kaddoura GmbH
- Branche: Gebrauchtwagenhandel / AutoDealer
- Standort: Friedrich-Ebert-Straße 150, 42117 Wuppertal
- Gründung: 2000
- Kernangebot: geprüfte Jahres- und Gebrauchtwagen
- Leistungen: Inzahlungnahme, Online-Besichtigung, internationaler Verkauf, Rundum-Service, Zulassungsdienst und optionale Gebrauchtwagengarantie
- Ansprechpartner: Rami Kaddoura, Ahmad Kaddoura und Jennifer Scholl
- Beratungssprachen: Deutsch, Englisch und Arabisch

### Primäre Zielgruppen

- Kaufinteressenten aus Wuppertal und Nordrhein-Westfalen;
- Interessenten mit längerer Anreise, die eine Online-Besichtigung benötigen;
- Käufer mit einem Fahrzeug zur Inzahlungnahme;
- internationale Käufer mit Bedarf an Ausfuhrdokumenten und Formalitäten.

### Markenpositionierung

Die glaubwürdig belegbaren Differenzierungsmerkmale sind die persönliche Betreuung im Familienunternehmen, der Standort seit 2000, die WhatsApp-Live-Besichtigung, der Zulassungsservice, die mehrsprachige Beratung und die Unterstützung bei internationalen Verkäufen. Nicht belegte Superlative oder Marktführerschaft werden nicht verwendet.

## 3. GEO-Score

| Bereich | Vorher | Nachher | Begründung |
|---|---:|---:|---|
| Technical GEO | 68 | 88 | SSG/SSR, Canonicals, Robots, Sitemap und initiales HTML verbessert |
| Content Structure | 60 | 84 | klare Seitenintentionen, H-Struktur, Listen, Prozesse und Vergleiche |
| Entity Clarity | 68 | 92 | Rechtsname, Standort, Personen, Leistungen und Beziehungen eindeutig |
| Topical Authority | 35 | 64 | Wissenshub und erster belegter Ratgeber vorhanden; Cluster noch ausbaufähig |
| E-E-A-T / Trust | 62 | 80 | feste Ansprechpartner, Herausgeber, Quellen und Aktualisierungsdatum |
| Structured Data | 70 | 90 | passendes und sichtbarem Inhalt entsprechendes Schema.org-Markup |
| Citation Readiness | 42 | 80 | answer-first Aussagen, Definitionen, Faktenblöcke und Quellen |
| Original Information | 48 | 60 | eigene Prozesse sichtbar; belastbare eigene Daten/Fallbeispiele fehlen |
| Internal Linking | 55 | 86 | Entität, Leistungen, Bestand und Wissen sind semantisch verbunden |
| Content Freshness | 40 | 73 | festes Änderungsdatum und Artikelstand vorhanden; redaktioneller Prozess fehlt |
| **Gesamt** | **55** | **80** | arithmetischer Mittelwert |

## 4. Technische Prüfung

### Behoben

- Der Händler wird nicht mehr unnötig auf jeder Unterseite mehrfach als Organisation ausgezeichnet.
- Canonical URLs sind pro indexierbarer Seite eindeutig.
- `lastModified` ändert sich nicht mehr künstlich bei jedem Sitemap-Aufruf.
- Die Sitemap enthält ausschließlich gewünschte indexierbare Seiten und relevante Bilder.
- FAQ-Antworten stehen im initial ausgelieferten HTML und nicht erst nach einer Interaktion.
- Fahrzeug-Highlights werden serverseitig geladen und als HTML ausgeliefert; der Client aktualisiert sie anschließend.
- Rechtstexte und technische Fahrzeug-Catch-all-URLs bleiben bewusst auf `noindex`.
- Open-Graph-, Twitter-, Icon- und Manifest-Metadaten werden über die Next.js Metadata API ausgeliefert.

### Verbleibendes technisches Risiko

Der vollständige Bestand unter `/fahrzeuge` wird weiterhin durch ein externes Carcuro-Web-Component geladen. Suchmaschinen mit vollständigem JavaScript-Rendering können das verarbeiten; einfache KI-Crawler erhalten jedoch nur Einleitung und strukturierte statische Fahrzeug-Highlights. Individuelle Fahrzeugdetailseiten sind aktuell bewusst nicht indexiert, weil die Website dort keine eindeutig serverseitig verfügbaren Detaildaten bereitstellt.

**Empfehlung P1 / HIGH / L:** Carcuro-Fahrzeugdaten serverseitig pro Fahrzeug abrufen, stabile Slugs erzeugen und jede Detailseite mit sichtbaren Daten, `Product`/`Car`/`Offer`, Preis, Verfügbarkeit, Bildern und individuellem Canonical rendern.

## 5. Content-, Entity- und Trust-Prüfung

### Behoben

- `/ueber-uns` beantwortet direkt, wer das Unternehmen ist, wo es sitzt, seit wann es besteht und wer verantwortlich ist.
- `/leistungen` trennt die sechs Leistungen fachlich und beschreibt Anfrage, Prüfung, Kauf und Übergabe.
- `/wissen` bildet einen erweiterbaren Themenhub.
- `/wissen/gebrauchtwagenkauf` liefert Definitionen, einen Vergleich, Prüfpunkte, einen Prozess und sichtbare Quellen.
- Unternehmensdaten, Ansprechpartner und Servicebezeichnungen stammen aus einer zentralen Datenquelle und bleiben konsistent.
- Fachliche Aussagen werden vom Unternehmen als Herausgeber verantwortet; es wird kein nicht bestätigter persönlicher Autor erfunden.

### Trust-Lücken

- Qualifikationen, Zertifizierungen und Verbandsmitgliedschaften wurden nicht angegeben und dürfen nicht ergänzt werden.
- Für die Mitarbeiter fehlen bestätigte Profil-URLs und gegebenenfalls LinkedIn-Profile.
- Die Herkunft und Aktualität der sichtbaren Bewertungszahlen sollte regelmäßig intern dokumentiert werden.
- Eigene Fallbeispiele, Übergabeberichte oder anonymisierte Kaufberatungsfälle fehlen.

## 6. Strukturierte Daten

Implementiert:

- `AutoDealer`
- `WebSite`
- `WebPage`
- `AboutPage`
- `CollectionPage`
- `Person` als Team-ItemList
- `Service` als Leistungs-ItemList
- `Article`
- `BreadcrumbList`
- `FAQPage`
- `Car` als kuratierte Fahrzeug-ItemList

Das selbstbezogene `AggregateRating` wurde aus dem Händler-Markup entfernt. Google schränkt selbstbezogene Review-Snippets für `LocalBusiness`/`Organization` ein; sichtbare Bewertungen bleiben als Vertrauenssignal auf der Seite erhalten.

## 7. Robots und AI-Crawler

### Aktueller Zustand

- Allgemeine Crawler: öffentliche Seiten erlaubt; `/api/`, `/admin/` und Filterparameter ausgeschlossen.
- OAI-SearchBot und ChatGPT-User: ausdrücklich erlaubt.
- GPTBot, ClaudeBot und PerplexityBot: ausdrücklich erlaubt.
- Rechtstexte und technische Catch-all-Seiten: über Meta-Robots nicht indexierbar.

### Abwägung

- **Vorteil des Erlaubens:** Inhalte können für Suche, Antwortgenerierung und potenzielle Zitate abgerufen werden.
- **Nachteil:** Manche Bots dienen zusätzlich oder primär der Modellverbesserung. Das Erlauben ist daher auch eine geschäftliche Inhaltsnutzungsentscheidung.
- **Empfehlung:** OAI-SearchBot und ChatGPT-User für ChatGPT-Sichtbarkeit erlauben. Über GPTBot und andere Trainingscrawler sollte der Betreiber bewusst entscheiden. Eine spätere Sperre von GPTBot beeinträchtigt laut OpenAI nicht automatisch die OAI-SearchBot-basierte Suchsichtbarkeit.

## 8. Wettbewerbsbeobachtung

Die Suchstichprobe für „Gebrauchtwagen Jahreswagen Wuppertal“ zeigt unter anderem F&P Becker, Autohaus Widukind und den Volvo-Vertragspartner Moll.

- F&P Becker kommuniziert Bestand, Ankauf, Finanzierung, Mitgliedschaft und konkrete Reaktionszeit deutlich.
- Autohaus Widukind stellt Fahrzeugankauf, Gewährleistung und lokale Abholung stark heraus.
- Moll profitiert von der Volvo-Vertragshändler-Entity, modellbezogenen Landingpages und umfangreichen Herstellerinhalten.

Autocenter Kaddoura kann sich glaubwürdig über Online-Live-Besichtigung, Export-Unterstützung, mehrsprachige Beratung, feste Ansprechpartner und den familiengeführten Betrieb seit 2000 differenzieren. Finanzierung, Mitgliedschaften, Zertifizierungen oder Garantiedauern dürfen erst nach Bestätigung ergänzt werden.

Referenzseiten:

- https://auto-becker.info/
- https://www.autohauswidukind.de/
- https://www.volvocars-haendler.de/moll-automobile/wuppertal

## 9. Content-Gaps und neue Seiten

| Priorität | Maßnahme | Wirkung | Aufwand | Voraussetzung |
|---|---|---|---|---|
| P1 / HIGH | individuelle Fahrzeugdetailseiten | indexierbare Long-Tail- und Angebotsdaten | L | stabile Carcuro-Detail-API |
| P1 / HIGH | Ratgeber „Inzahlungnahme vorbereiten“ | unterstützt Leistung und Nutzerentscheidung | M | bestätigter interner Bewertungsprozess |
| P1 / HIGH | Ratgeber „Probefahrt-Checkliste“ | hohe Nutzernähe und Zitierfähigkeit | M | eigene Beratungserfahrung ergänzen |
| P2 / MEDIUM | Seite zum Fahrzeugexport | klare internationale Intention | M | Länder, Ablauf, Dokumente und Kosten bestätigen |
| P2 / MEDIUM | Garantie-Erklärung | reduziert Unsicherheit | M | Anbieter, Laufzeit, Umfang und Ausschlüsse bestätigen |
| P2 / MEDIUM | anonymisierte Kauf-Fallbeispiele | Original Information und E-E-A-T | M | echte Fälle und Freigaben |
| P2 / MEDIUM | Mitarbeiter-Profilseiten | Experten-Entity und Trust | M | Erfahrung, Fachgebiete, Profilfreigaben |
| P3 / LOW | Glossar | nur bei ausreichend tiefen Inhalten sinnvoll | L | mindestens 8–12 fachlich belastbare Begriffe |

Keine Standort-Doorway-Pages für umliegende Städte erstellen. Eine einzelne starke Standortseite für Wuppertal ist ausreichend, solange keine echten weiteren Niederlassungen existieren.

## 10. Original Information

Folgende eigene Daten würden die Zitierfähigkeit am stärksten verbessern, sind aber noch nicht verifiziert:

- Anzahl jährlich verkaufter Fahrzeuge;
- durchschnittliche Zeit von Anfrage bis Übergabe;
- Anteil online vorbesichtigter oder international verkaufter Fahrzeuge;
- häufigste Fragen aus echten Verkaufsgesprächen;
- dokumentierter Prüf- und Aufbereitungsprozess;
- anonymisierte Beispiele für Inzahlungnahme und Exportabwicklung;
- nachvollziehbare Herkunft der Besucher- und Bewertungszahlen.

Diese Daten erst nach interner Prüfung und mit Zeitraum/Methodik veröffentlichen.

## 11. Content-Freshness

Regelmäßig zu prüfen:

- Fahrzeugbestand und Verfügbarkeit: automatisiert, mindestens alle fünf Minuten;
- Preise und Ausstattungsdaten: aus der Fahrzeugquelle;
- Öffnungszeiten und Kontaktdaten: quartalsweise und vor Feiertagen;
- Team und Rollen: bei jeder personellen Änderung;
- Serviceumfang, Garantie und Exportbedingungen: quartalsweise;
- Ratgeber und externe Quellen: mindestens jährlich;
- strukturierte Daten und Rich-Result-Richtlinien: mindestens halbjährlich.

Das zentrale Feld `SITE.contentLastModified` darf nur bei einer tatsächlichen inhaltlichen Änderung aktualisiert werden.

## 12. KPI-Modell

### Klassische SEO-KPIs

- organische Klicks, Impressionen und CTR;
- Rankings für lokale und transaktionale Suchanfragen;
- indexierte Seiten und Crawlfehler;
- Anrufe, WhatsApp-Klicks, Fahrzeuganfragen und Probefahrt-Leads;
- Conversion-Rate je Landingpage;
- relevante lokale Verweise und Marken-Suchen.

### GEO-KPIs

- Markennennungen in ChatGPT, Google AI und Microsoft Copilot;
- Anzahl und Anteil zitierter eigener URLs;
- Themen, Fragen und Orte, bei denen Autocenter Kaddoura genannt wird;
- Share of Voice gegenüber den beobachteten lokalen Wettbewerbern;
- AI-Referral-Traffic, soweit Referrer übermittelt werden;
- Wachstum markenbezogener Suchanfragen nach GEO-Aktivitäten.

AI-Sichtbarkeit ist probabilistisch und nicht vollständig deterministisch messbar. Ergebnisse sollten monatlich mit einem festen Satz reproduzierbarer Fragen geprüft und durch Search Console sowie Bing Webmaster Tools ergänzt werden.

## 13. Priorisierte nächsten Schritte

### CRITICAL

Keine offenen, unmittelbar indexierungsverhindernden Fehler im geprüften Repository.

### HIGH

1. **L:** Serverfähige Fahrzeugdetail-API und indexierbare Angebotsseiten umsetzen.
2. **S:** Nach Deployment Sitemap in Google Search Console und Bing Webmaster Tools einreichen.
3. **S:** NAP-Daten in Google Business Profile, Bing Places, mobile.de, Kleinanzeigen und Instagram abgleichen.
4. **M:** Interne Prozesse für Inzahlungnahme, Prüfung, Garantie und Export verifizieren und als Original Content veröffentlichen.

### MEDIUM

1. **M:** Zwei weitere erfahrungsbasierte Ratgeber veröffentlichen.
2. **M:** Mitarbeiterprofile nach fachlicher Freigabe ausbauen.
3. **S:** Search-Console- und Bing-AI-Performance-Monitoring einrichten.
4. **M:** echte Partner-, Verbands- und Medienerwähnungen aufbauen; kein Spam-Linkbuilding.

### LOW

1. **L:** Glossar erst bei ausreichender fachlicher Tiefe aufbauen.
2. **M:** strukturierte Fallbeispiele und Übergabeberichte veröffentlichen.

## 14. Abschlussprüfung

Ein KI-System kann aus dem initialen HTML jetzt eindeutig beantworten:

- **Wer?** Autocenter Kaddoura GmbH, familiengeführter Gebrauchtwagenhändler.
- **Was?** Jahres- und Gebrauchtwagen plus sechs klar getrennte Kaufleistungen.
- **Wo?** Friedrich-Ebert-Straße 150, 42117 Wuppertal; Einzugsgebiet Wuppertal/NRW.
- **Für wen?** lokale Käufer, Interessenten mit längerer Anreise, Kunden mit Inzahlungnahme und internationale Käufer.
- **Seit wann?** seit 2000.
- **Wer sind die Ansprechpartner?** Rami Kaddoura, Ahmad Kaddoura und Jennifer Scholl mit Rollen und Kontaktdaten.
- **Warum vertrauenswürdig?** rechtliche Anbieterangaben, fester Standort, reale Ansprechpartner, sichtbare Prozesse, Quellen und konsistente externe Händlerprofile.
- **Welche Seite ist wofür maßgeblich?** `/ueber-uns` für die Entity, `/leistungen` für Services, `/fahrzeuge` für Bestand und `/wissen/gebrauchtwagenkauf` für die Kaufentscheidung.

Offen bleiben nur Fakten, die das Unternehmen selbst bestätigen oder aus einer stabileren Fahrzeugdatenquelle bereitstellen muss.
