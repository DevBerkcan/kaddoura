import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${SITE.name}`,
  alternates: { canonical: `${SITE.url}/datenschutz` },
  robots: { index: false },
};

// ↓ Legal Cockpit: HTML-Code hier einfügen
const DATENSCHUTZ_HTML = `
  <h2>Verantwortliche Stelle</h2>
  <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
  <p>Ahmad Kaddoura<br/>
  Friedrich-Ebert-Straße 150<br/>
  42117 Wuppertal</p>
  <p>Tel.: +49 157 37015935<br/>
  E-Mail: <a href="mailto:info@autocenter-kaddoura.de">info@autocenter-kaddoura.de</a></p>

  <h2>Ihre Betroffenenrechte</h2>
  <p>Unter den angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:</p>
  <ul>
    <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO)</li>
    <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
    <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
    <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO)</li>
    <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)</li>
    <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)</li>
  </ul>
  <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
  <p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
  <p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noopener noreferrer">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a></p>

  <h2>Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
  <p><strong>Art und Zweck der Verarbeitung:</strong><br/>
  Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.</p>
  <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
  <ul>
    <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website</li>
    <li>Sicherstellung einer reibungslosen Nutzung unserer Website</li>
    <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
    <li>zu weiteren administrativen Zwecken</li>
  </ul>
  <p>Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von uns ggfs. statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.</p>
  <p><strong>Rechtsgrundlage:</strong><br/>
  Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.</p>

  <h2>Server-Log-Dateien</h2>
  <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
  <ul>
    <li>Browsertyp und Browserversion</li>
    <li>verwendetes Betriebssystem</li>
    <li>Referrer URL</li>
    <li>Hostname des zugreifenden Rechners</li>
    <li>Uhrzeit der Serveranfrage</li>
    <li>IP-Adresse</li>
  </ul>
  <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
  <p>Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>

  <h2>Bestandsdaten</h2>
  <p>(1) Ihre personenbezogenen Daten, soweit diese für die Begründung, inhaltliche Ausgestaltung oder Änderung des Vertragsverhältnisses erforderlich sind (Bestandsdaten), werden ausschließlich zur Vertragsabwicklung verwendet. So muss z.B. zur Zustellung der Waren Ihr Name und Ihre Anschrift an den Warenlieferanten weitergegeben werden.</p>
  <p>(2) Ohne Ihre ausdrückliche Einwilligung oder ohne gesetzliche Grundlage werden Ihre personenbezogenen Daten nicht an außerhalb der Vertragsabwicklung stehende Dritte weitergegeben. Nach vollständiger Vertragsabwicklung werden Ihre Daten für die weitere Verwendung gesperrt. Nach Ablauf der steuer- und handelsrechtlichen Vorschriften werden diese Daten gelöscht, sofern Sie nicht ausdrücklich in die weitere Nutzung eingewilligt haben.</p>

  <h2>Kontaktformular</h2>
  <p><strong>Art und Zweck der Verarbeitung:</strong><br/>
  Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.</p>
  <p><strong>Rechtsgrundlage:</strong><br/>
  Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art 6 Abs. 1 lit. f DSGVO).</p>
  <p>Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.</p>
  <p>Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art 6 Abs. 1 lit. b DSGVO).</p>
  <p><strong>Speicherdauer:</strong><br/>
  Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.</p>
  <p>Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen.</p>

  <h2>Cookies</h2>
  <p><strong>Was sind Cookies?</strong><br/>
  Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie werden verwendet, um Websites funktionsfähig zu machen oder effizienter zu gestalten sowie um Informationen an die Betreiber der Website zu übermitteln.</p>

  <h3>Welche Arten von Cookies verwenden wir?</h3>
  <p><strong>1. Unbedingt erforderliche Cookies</strong><br/>
  Diese Cookies sind für den Betrieb der Website unerlässlich und können nicht deaktiviert werden. Sie werden normalerweise nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt, die einer Anforderung von Diensten gleichkommen, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen, das Anmelden oder das Ausfüllen von Formularen.</p>
  <p>Cloudflare Cookies:</p>
  <ul>
    <li>__cf_bm - Zur Unterscheidung zwischen Menschen und Bots (Gültigkeit: 30 Minuten)</li>
    <li>__cfruid - Sicherheits-Cookie zur Identifizierung von Clients (Gültigkeit: Session)</li>
    <li>cf_clearance - Zur Umgehung von Sicherheitsherausforderungen für vertrauenswürdige Clients (Gültigkeit: 1 Jahr)</li>
  </ul>

  <p><strong>2. Funktionelle Cookies</strong><br/>
  Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden. Wenn Sie diese Cookies nicht zulassen, funktionieren einige oder alle dieser Dienste möglicherweise nicht ordnungsgemäß.</p>
  <p>Google Maps Cookies:</p>
  <ul>
    <li>NID - Enthält eine eindeutige ID, um Präferenzen und andere Informationen zu speichern (Gültigkeit: 6 Monate)</li>
    <li>CONSENT - Speichert den Zustimmungsstatus des Benutzers (Gültigkeit: 20 Jahre)</li>
    <li>1P_JAR - Sammelt Website-Statistiken und misst Conversion-Raten (Gültigkeit: 1 Monat)</li>
  </ul>

  <p><strong>3. Performance & Analyse Cookies</strong><br/>
  Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns herauszufinden, welche Seiten am beliebtesten und welche am wenigsten beliebt sind, und zu sehen, wie sich Besucher auf der Website bewegen. Alle von diesen Cookies gesammelten Informationen werden aggregiert und sind daher anonym.</p>
  <p>Google Analytics Cookies:</p>
  <ul>
    <li>_ga - Zur Unterscheidung von Benutzern (Gültigkeit: 2 Jahre)</li>
    <li>_gid - Zur Unterscheidung von Benutzern (Gültigkeit: 24 Stunden)</li>
    <li>_gat - Zur Drosselung der Anfragerate (Gültigkeit: 1 Minute)</li>
    <li>_ga_<container-id> - Speichert den Session-Status (Gültigkeit: 2 Jahre)</li>
  </ul>

  <h3>Cookie-Einstellungen verwalten</h3>
  <p>Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie auf das Cookie-Banner klicken oder Ihre Browser-Einstellungen anpassen. Bitte beachten Sie, dass das Blockieren einiger Arten von Cookies Ihre Erfahrung auf unserer Website und die Dienste, die wir anbieten können, beeinträchtigen kann.</p>

  <h3>Browser-Einstellungen</h3>
  <p>Die meisten Webbrowser erlauben eine gewisse Kontrolle über Cookies über die Browser-Einstellungen. Weitere Informationen finden Sie unter:</p>
  <ul>
    <li>Google Chrome: Cookie-Einstellungen in Chrome</li>
    <li>Mozilla Firefox: Cookie-Einstellungen in Firefox</li>
    <li>Safari: Cookie-Einstellungen in Safari</li>
    <li>Microsoft Edge: Cookie-Einstellungen in Edge</li>
  </ul>

  <h3>Drittanbieter-Cookies</h3>
  <p>Einige Cookies auf unserer Website werden von Drittanbietern platziert. Wir haben keine Kontrolle über diese Cookies. Weitere Informationen zu diesen Cookies finden Sie in den Datenschutzrichtlinien der jeweiligen Drittanbieter:</p>
  <ul>
    <li>Google Analytics: Google Datenschutzerklärung</li>
    <li>Google Maps: Google Datenschutzerklärung</li>
    <li>Cloudflare: Cloudflare Datenschutzerklärung</li>
  </ul>

  <h3>Aktualisierungen dieser Cookie-Richtlinie</h3>
  <p>Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen in unseren Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen widerzuspiegeln. Bitte besuchen Sie diese Seite regelmäßig, um über unsere Verwendung von Cookies informiert zu bleiben.</p>

  <h3>Kontakt</h3>
  <p>Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte:</p>
  <p>Autocenter Kaddoura<br/>
  Friedrich-Ebert-Straße 150<br/>
  42117 Wuppertal<br/>
  Deutschland</p>
  <p>E-Mail: <a href="mailto:info@autocenter-kaddoura.de">info@autocenter-kaddoura.de</a><br/>
  Telefon: +49 202 2443611</p>

  <p>Letzte Aktualisierung: Dezember 2025</p>

  <h2>Verwendung von Google Maps</h2>
  <p><strong>Art und Zweck der Verarbeitung:</strong><br/>
  Auf dieser Webseite nutzen wir das Angebot von Google Maps. Google Maps wird von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (nachfolgend „Google") betrieben. Dadurch können wir Ihnen interaktive Karten direkt in der Webseite anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion.</p>
  <p>Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.</p>
  <p><strong>Rechtsgrundlage:</strong><br/>
  Rechtsgrundlage für die Einbindung von Google Maps und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>
  <p><strong>Empfänger:</strong><br/>
  Durch den Besuch der Webseite erhält Google Informationen, dass Sie die entsprechende Unterseite unserer Webseite aufgerufen haben. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind, oder ob keine Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet.</p>

  <h2>Verwendung von Google Analytics</h2>
  <p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Google Analytics verwendet sog. „Cookies", Textdateien, die auf dem verwendeten Gerät gespeichert werden und die eine Analyse der Benutzung der Website durch den Seitenbesucher ermöglichen.</p>
  <p>Google Analytics wird ausschließlich mit der Erweiterung "_anonymizeIp()" auf dieser Website verwendet. Diese Erweiterung stellt eine Anonymisierung der IP-Adresse durch Kürzung sicher und schließt eine direkte Personenbeziehbarkeit aus.</p>
  <p>Die gesendeten und mit Cookies, Nutzerkennungen (z. B. User-ID) oder Werbe-IDs verknüpften Daten werden nach 50 Monaten automatisch gelöscht. Die Löschung von Daten, deren Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im Monat.</p>

  <h2>Änderung unserer Datenschutzbestimmungen</h2>
  <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>

  <h2>Fragen zum Datenschutz</h2>
  <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>
  <p>Ahmad Kaddoura<br/>
  Friedrich-Ebert-Straße 150<br/>
  42117 Wuppertal</p>
  <p>Tel.: +49 157 37015935<br/>
  Mobil: +49 (0)202 2443611<br/>
  E-Mail: <a href="mailto:info@autocenter-kaddoura.de">info@autocenter-kaddoura.de</a></p>
`;

export default function DatenschutzPage() {
  return <LegalPage eyebrow="Rechtliches" title="Datenschutzerklärung" html={DATENSCHUTZ_HTML} />;
}
