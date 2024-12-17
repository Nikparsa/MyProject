# Beispiel Struktur einfach Website mit HTML und CSS

## Überblick

TODO Mini Webprojekt für Formulare

## Inhaltsverzeichnis
- [Technologien](#technologien)
- [Funktionen](#funktionen)
- [ToDo](#todo)
- [Installation](#installation)

## Technologien

- HTML5 Formulare

## Funktionen

### **Checkliste für HTML-Formulare**
Hier ist eine umfassende Checkliste für die Arbeit mit HTML-Formularee. Diese deckt wichtige Formularelemente ab, gibt Best Practices und weist auf mögliche Stolpersteine hin. Diese Checkliste hilft dabei, sicherzustellen, dass alle kritischen Aspekte eines Formulars berücksichtigt werden.

Mit dieser Checkliste können Sie als Entwickler sicherstellen, dass ihre HTML-Formulare benutzerfreundlich, sicher, zugänglich und funktionsfähig sind.

#### 1. **Grundstruktur des Formulars**
- [ ] Verwende das `<form>`-Tag, um alle Formularelemente zu umschließen.
  - [ ] Stelle sicher, dass das `action`-Attribut korrekt auf die URL oder den Endpunkt gesetzt ist, zu dem die Formulardaten gesendet werden.
  - [ ] Wähle das passende `method`-Attribut (`GET` oder `POST`), abhängig von den Daten, die übermittelt werden:
    - **GET** für Suchformulare oder nicht sensible Daten.
    - **POST** für sensible oder größere Datenmengen (z.B. Passwörter, Datei-Uploads).
  - [ ] Achte darauf, dass das Formular für Screenreader zugänglich ist und leicht navigierbar bleibt (ggf. das `tabindex`-Attribut verwenden).

#### 2. **Eingabefelder**
- [ ] **Text-Eingabefelder (`<input type="text">`)**
  - [ ] Setze das `name`-Attribut für jedes Eingabefeld, damit es mit den Formulardaten übermittelt wird.
  - [ ] Verwende das `maxlength`-Attribut, um die maximale Anzahl von Zeichen zu begrenzen.
  - [ ] Nutze das `placeholder`-Attribut, um dem Benutzer Hinweise zu geben, was in das Feld eingegeben werden soll.
  - [ ] Verwende das `required`-Attribut für Felder, die vor dem Absenden ausgefüllt werden müssen.
  - **Stolperstein**: Wenn das `name`-Attribut fehlt, werden die Daten des Feldes nicht an den Server gesendet.

- [ ] **Passwortfelder (`<input type="password">`)**
  - [ ] Setze `maxlength`, um die Länge von Passwörtern aus Sicherheitsgründen zu beschränken.
  - [ ] Stelle sicher, dass das Formular sicher übertragen wird (z.B. via HTTPS).
  - **Stolperstein**: Passwortfelder sollten nicht automatisch ausgefüllt werden, da dies ein Sicherheitsrisiko darstellen kann.

- [ ] **E-Mail-Felder (`<input type="email">`)**
  - [ ] Verwende `type="email"`, um automatisch das Format der E-Mail zu validieren.
  - [ ] Setze `required` für Pflichtfelder.
  - **Stolperstein**: Stelle sicher, dass die clientseitige Validierung für E-Mail-Felder browserübergreifend unterstützt wird (ältere Browser validieren eventuell nicht korrekt).

#### 3. **Spezialisierte Eingabefelder**
- [ ] **Zahlenfeld (`<input type="number">`)**
  - [ ] Setze `min` und `max`, um gültige Zahlenbereiche zu definieren.
  - [ ] Verwende das `step`-Attribut, um die Schrittweite für gültige Werte festzulegen (z.B. `step="0.01"` für Dezimalwerte).
  - **Stolperstein**: Achte auf Zahlenpräzision und stelle sicher, dass gültige Zahlenformate akzeptiert werden.

- [ ] **Datumseingabe (`<input type="date">`)**
  - [ ] Achte auf die Browserunterstützung für Datumseingabefelder, da ältere Browser keine Datumseingabefelder korrekt rendern können.
  - [ ] Verwende eine Fallback-JavaScript-Bibliothek, wenn die Browserunterstützung unzureichend ist.
  - **Stolperstein**: Unterschiedliche Datumsformate können zu Problemen führen. Stelle sicher, dass Datumsformate auf dem Server einheitlich verarbeitet werden.

#### 4. **Labels**
- [ ] Verknüpfe für jedes Eingabeelement ein `<label>`-Tag mit dem `for`-Attribut, das mit der `id` des Eingabefeldes übereinstimmt.
  - [ ] Labels müssen klar und beschreibend sein, um die Barrierefreiheit zu verbessern.
  - **Stolperstein**: Ohne Labels haben Benutzer mit Screenreadern oder anderen Hilfstechnologien möglicherweise Schwierigkeiten zu erkennen, wofür jedes Eingabefeld gedacht ist.

#### 5. **Textbereiche (`<textarea>`)**
- [ ] Verwende `<textarea>` für mehrzeilige Texteingaben.
  - [ ] Setze die Attribute `rows` und `cols`, um die Größe des Textbereichs zu steuern.
  - [ ] Füge das `maxlength`-Attribut hinzu, falls es eine Zeichenbeschränkung gibt.
  - [ ] Verwende das `placeholder`-Attribut, um Anweisungen für die Eingabe zu geben.
  - **Stolperstein**: Achte darauf, dass im Textfeld keine unnötigen Leerzeichen oder Zeilenumbrüche vorhanden sind.

#### 6. **Dropdowns und Auswahlmenüs (`<select>`)**
- [ ] Verwende das `<select>`-Element, um ein Dropdown-Menü zu erstellen.
  - [ ] Stelle sicher, dass jede `<option>` ein `value`-Attribut hat, das an den Server gesendet wird.
  - [ ] Verwende `selected`, um eine voreingestellte Auswahl zu definieren.
  - **Stolperstein**: Wenn das `name`-Attribut fehlt, wird die ausgewählte Option nicht übermittelt.

#### 7. **Radiobuttons (`<input type="radio">`)**
- [ ] Gruppiere zusammengehörige Radiobuttons, indem du ihnen das gleiche `name`-Attribut gibst, sodass nur eine Option ausgewählt werden kann.
  - [ ] Stelle sicher, dass jeder Radiobutton ein entsprechendes `<label>` hat, um die Barrierefreiheit zu verbessern.
  - **Stolperstein**: Wenn keine Option als `checked` voreingestellt ist, kann dies zu Verwirrung führen, wenn eine Auswahl erwartet wird.

#### 8. **Checkboxen (`<input type="checkbox">`)**
- [ ] Verwende Checkboxen, um mehrere Auswahlmöglichkeiten zu ermöglichen.
  - [ ] Achte darauf, dass jede Checkbox ein `value`-Attribut hat.
  - [ ] Gruppiere verwandte Checkboxen logisch.
  - **Stolperstein**: Wenn eine Checkbox nicht aktiviert ist, wird kein Wert an den Server gesendet. Dies muss serverseitig berücksichtigt werden.

#### 9. **Datei-Uploads (`<input type="file">`)**
- [ ] Verwende `type="file"`, um Benutzern das Hochladen von Dateien zu ermöglichen.
  - [ ] Stelle sicher, dass das `enctype="multipart/form-data"`-Attribut gesetzt ist, wenn Datei-Uploads verarbeitet werden.
  - [ ] Beschränke Dateitypen mit dem `accept`-Attribut (z.B. `accept=".jpg,.png"`).
  - **Stolperstein**: Achte auf Sicherheitsrisiken bei Datei-Uploads (z.B. bösartige Dateien). Dateitypen und -größen sollten serverseitig validiert werden.

#### 10. **Buttons**
- [ ] **Absende-Button (`<input type="submit">` oder `<button type="submit">`)**
  - [ ] Stelle sicher, dass es einen klar sichtbaren Absende-Button gibt, um die Formulardaten abzusenden.
  - **Stolperstein**: Stelle sicher, dass der Button innerhalb des `<form>`-Tags liegt, um die Formularübermittlung auszulösen.

- [ ] **Zurücksetzen-Button (`<input type="reset">`)**
  - [ ] Optional kann ein Zurücksetzen-Button hinzugefügt werden, um das Formular zu leeren.
  - **Stolperstein**: Sei vorsichtig, da Benutzer versehentlich das Formular zurücksetzen könnten. Eine Bestätigung vor dem Zurücksetzen könnte sinnvoll sein.

- [ ] **Allgemeine Buttons (`<button>`)**
  - [ ] Verwende Buttons, um benutzerdefinierte Aktionen auszulösen (z.B. mit JavaScript). Achte darauf, das `type="button"` anzugeben, um eine versehentliche Formularübermittlung zu verhindern.
  - **Stolperstein**: Wenn das `type`-Attribut fehlt, wird der Button standardmäßig als Absende-Button behandelt, was zu unbeabsichtigten Formularübermittlungen führen kann.

#### 11. **Formularvalidierung**
- [ ] Verwende HTML5-Validierungsattribute wie `required`, `pattern`, `min`, `max` und `maxlength`.
- [ ] Teste das Verhalten des Formulars in verschiedenen Browsern, um sicherzustellen, dass die eingebaute Validierung browserübergreifend funktioniert.
- [ ] Ziehe eine JavaScript-basierte Validierung für komplexere Anforderungen in Betracht.
  - **Stolperstein**: Verlasse dich nicht ausschließlich auf die clientseitige Validierung, da dies ein Sicherheitsrisiko darstellen kann. Alle Daten sollten auch serverseitig validiert werden.

#### 12. **Barrierefreiheit**
- [ ] Stelle sicher, dass jedes Eingabefeld mit einem `<label>`-Tag verknüpft ist, um die Barrierefreiheit zu gewährleisten.
- [ ] Verwende `aria-*`-Attribute für benutzerdefinierte Formularelemente oder Widgets (z.B. Schieb

eregler, Modale Fenster).
- [ ] Achte darauf, dass das Formular mit der Tastatur navigierbar ist, indem die Tab-Reihenfolge (`tabindex`) korrekt eingestellt ist.
  - **Stolperstein**: Formulare ohne Berücksichtigung der Barrierefreiheit können Benutzer mit Behinderungen oder Beeinträchtigungen ausschließen.

#### 13. **Formularsicherheit**
- [ ] Verwende HTTPS für alle Formulare, die sensible Daten verarbeiten (z.B. Passwörter, Kreditkartendaten).
- [ ] Implementiere serverseitige Validierung für alle Formulareinreichungen.
- [ ] Verwende Sicherheitsmaßnahmen wie **CAPTCHA** für Formulare, die anfällig für Spam-Einreichungen sind.
- [ ] Bereinige und validiere alle Formulareingaben auf dem Server, um SQL-Injection, XSS und andere Angriffe zu verhindern.
  - **Stolperstein**: Sich ausschließlich auf die clientseitige Validierung zu verlassen, kann das Formular für Angriffe anfällig machen. Daten müssen immer serverseitig validiert und bereinigt werden.

#### 14. **Verhalten des Formulars bei der Übermittlung**
- [ ] Definiere eine klare `action`-URL, die die Formulardaten verarbeitet.
- [ ] Stelle sicher, dass nach dem Absenden des Formulars eine Erfolgsmeldung oder Bestätigungsseite angezeigt wird.
- [ ] Verwende AJAX für asynchrone Formularübermittlungen, wenn gewünscht, um eine vollständige Seitenaktualisierung zu vermeiden.
  - **Stolperstein**: Ohne ordnungsgemäßes Feedback nach der Übermittlung können Benutzer verwirrt sein, ob das Formular erfolgreich gesendet wurde.

#### 15. **Browserkompatibilität**
- [ ] Teste das Formular in verschiedenen Browsern (Chrome, Firefox, Safari, Edge usw.).
- [ ] Stelle sicher, dass HTML5-Eingabetypen und die Validierung in älteren Browserversionen konsistent funktionieren.
- **Stolperstein**: Sich zu sehr auf moderne Browserfunktionen zu verlassen, ohne Fallbacks bereitzustellen, kann die Funktionalität für Benutzer mit älteren Browsern beeinträchtigen.

---

### Zusammenfassung der häufigsten Stolpersteine:
- **Fehlende `name`-Attribute**: Wichtig für die Übermittlung von Formulardaten an den Server.
- **Keine `label`-Elemente**: Reduziert die Barrierefreiheit und Benutzerfreundlichkeit.
- **Falsche Verwendung von `method` (`GET` vs. `POST`)**: Kann sensible Daten über die URL preisgeben.
- **Keine Validierung**: Führt zu unvollständigen oder fehlerhaften Dateneinreichungen.
- **Fehlende Formularsicherheit (HTTPS, serverseitige Validierung)**: Macht Formulare anfällig für Angriffe.
- **Inkonsistentes Verhalten in verschiedenen Browsern**: Teste die Kompatibilität des Formulars, um eine konsistente Benutzererfahrung zu gewährleisten.

## Installation

1. Pullen Sie das Übungs-repository
```
git clone https://git-iit.fh-joanneum.at/msd-webapp/ws24-exercises/html-css-forms
```

2. Gehen Sie die einzelnen Inhalte (Forms) zum Kennenlernen von HTML Formulare und der einzelnen Felder durch.
