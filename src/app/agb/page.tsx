import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: `Allgemeine Geschäftsbedingungen von ${SITE.name} für den Fahrzeugkauf in Wuppertal.`,
  alternates: { canonical: `${SITE.url}/agb` },
  robots: { index: false },
};

// ↓ Legal Cockpit: HTML-Code hier einfügen
const AGB_HTML = `
  <h2>ALLGEMEINE GESCHÄFTSBEDINGUNGEN</h2>
  <h3>§ 1 Geltungsbereich</h3>
  <p>(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge, die zwischen Autocenter Kaddoura, Friedrich-Ebert-Straße 150, 42117 Wuppertal (nachfolgend „Verkäufer") und dem Kunden (nachfolgend „Käufer") über den Kauf von Gebrauchtfahrzeugen geschlossen werden.</p>
  <p>(2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Käufers werden nur dann und insoweit Vertragsbestandteil, als der Verkäufer ihrer Geltung ausdrücklich schriftlich zugestimmt hat.</p>

  <h3>§ 2 Vertragsschluss</h3>
  <p>(1) Die Darstellung der Fahrzeuge auf unserer Website und bei Mobile.de stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar.</p>
  <p>(2) Der Kaufvertrag kommt erst mit Unterzeichnung eines schriftlichen Kaufvertrags durch beide Parteien zustande.</p>
  <p>(3) Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung.</p>

  <h3>§ 3 Preise und Zahlung</h3>
  <p>(1) Alle angegebenen Preise verstehen sich als Bruttopreise inklusive der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.</p>
  <p>(2) Der Kaufpreis ist bei Übergabe des Fahrzeugs fällig und in bar oder per bestätigter Banküberweisung zu zahlen.</p>
  <p>(3) Bei Finanzierung gelten die Bedingungen des jeweiligen Finanzierungsvertrags.</p>

  <h3>§ 4 Übergabe und Gefahrübergang</h3>
  <p>(1) Die Übergabe des Fahrzeugs erfolgt nach vollständiger Kaufpreiszahlung am Standort des Verkäufers, sofern nichts anderes vereinbart wurde.</p>
  <p>(2) Mit der Übergabe geht die Gefahr des zufälligen Untergangs und der zufälligen Verschlechterung auf den Käufer über.</p>
  <p>(3) Der Käufer ist verpflichtet, das Fahrzeug bei Übergabe zu untersuchen und etwaige Mängel unverzüglich zu rügen.</p>

  <h3>§ 5 Eigentumsvorbehalt</h3>
  <p>Das Fahrzeug bleibt bis zur vollständigen Bezahlung des Kaufpreises Eigentum des Verkäufers.</p>

  <h3>§ 6 Gewährleistung</h3>
  <p>(1) Für Gebrauchtfahrzeuge gilt eine Gewährleistungsfrist von 12 Monaten ab Übergabe, sofern der Käufer Verbraucher ist.</p>
  <p>(2) Gegenüber Unternehmern wird die Gewährleistung ausgeschlossen, soweit gesetzlich zulässig.</p>
  <p>(3) Die Gewährleistung bezieht sich nicht auf Verschleißteile und natürliche Abnutzung.</p>
  <p>(4) Der Kilometerstand wurde nach bestem Wissen und Gewissen angegeben. Eine Garantie für die Richtigkeit kann jedoch nicht übernommen werden, es sei denn, dies ist ausdrücklich schriftlich vereinbart.</p>

  <h3>§ 7 Haftung</h3>
  <p>(1) Der Verkäufer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.</p>
  <p>(2) Bei leichter Fahrlässigkeit haftet der Verkäufer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und begrenzt auf den vorhersehbaren, vertragstypischen Schaden.</p>
  <p>(3) Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.</p>

  <h3>§ 8 Inzahlungnahme</h3>
  <p>(1) Bei Inzahlungnahme eines Fahrzeugs wird dessen Wert einvernehmlich festgelegt.</p>
  <p>(2) Der Käufer garantiert, dass er Eigentümer des in Zahlung gegebenen Fahrzeugs ist und dieses frei von Rechten Dritter ist.</p>
  <p>(3) Das in Zahlung gegebene Fahrzeug muss den vereinbarten Zustand haben.</p>

  <h3>§ 9 Widerrufsrecht</h3>
  <p><strong>Widerrufsrecht</strong><br/>
  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Ware in Besitz genommen haben bzw. hat.</p>

  <p><strong>Ausübung des Widerrufsrechts</strong><br/>
  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns:</p>
  <p>Autocenter Kaddoura<br/>
  Friedrich-Ebert-Straße 150<br/>
  42117 Wuppertal<br/>
  E-Mail: <a href="mailto:info@autocenter-kaddoura.de">info@autocenter-kaddoura.de</a><br/>
  Telefon: +49 157 37015935</p>
  <p>mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
  <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>

  <p><strong>Folgen des Widerrufs</strong><br/>
  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.</p>
  <p>Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
  <p>Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.</p>

  <p><strong>Rücksendung der Ware</strong><br/>
  Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.</p>
  <p>Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.</p>
  <p>Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</p>

  <p><strong>Ausschluss des Widerrufsrechts</strong><br/>
  Das Widerrufsrecht besteht nicht bei Verträgen:</p>
  <ul>
    <li>die in Geschäftsräumen geschlossen werden (Kauf vor Ort)</li>
    <li>zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind</li>
    <li>zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde</li>
  </ul>

  <h4>Muster-Widerrufsformular</h4>
  <p>Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück:</p>
  <p>An Autocenter Kaddoura<br/>
  Friedrich-Ebert-Straße 150<br/>
  42117 Wuppertal<br/>
  E-Mail: <a href="mailto:info@autocenter-kaddoura.de">info@autocenter-kaddoura.de</a></p>
  <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)</p>
  <p>_________________________________</p>
  <p>Bestellt am (*): _____________</p>
  <p>Erhalten am (*): _____________</p>
  <p>Name des/der Verbraucher(s): _____________</p>
  <p>Anschrift des/der Verbraucher(s): _____________</p>
  <p>Unterschrift des/der Verbraucher(s): _____________</p>
  <p>Datum: _____________</p>
  <p>(*) Unzutreffendes streichen</p>

  <h3>§ 10 Datenschutz</h3>
  <p>Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung, die unter https://www.autocenter-kaddoura.de/datenschutz abrufbar ist.</p>

  <h3>§ 11 Schlussbestimmungen</h3>
  <p>(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</p>
  <p>(2) Ist der Käufer Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der Geschäftssitz des Verkäufers.</p>
  <p>(3) Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>

  <p>Stand: Januar 2026<br/>
  Autocenter Kaddoura<br/>
  Friedrich-Ebert-Straße 150, 42117 Wuppertal</p>
`;

export default function AGBPage() {
  return <LegalPage eyebrow="Rechtliches" title="Allgemeine Geschäftsbedingungen" html={AGB_HTML} />;
}
