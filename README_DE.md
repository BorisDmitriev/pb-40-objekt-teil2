# Objekte: Teil 2

# **1. Überprüfe, ob eine Zahl innerhalb eines bestimmten Bereichs liegt.**
Erstelle eine Funktion namens `isWithinRange`, die überprüft, ob eine Zahl innerhalb des Bereichs der Eigenschaften min und max eines Objekts liegt. Nimm an, dass _min <= max_ immer wahr (also true) ist.

Beispiele:

- `isWithinRange(4, { min: 0, max: 5 })` ➞ true
- `isWithinRange(4, { min: 4, max: 5 })` ➞ true
- `isWithinRange(4, { min: 6, max: 10 })` ➞ false
- `isWithinRange(5, { min: 5, max: 5 })` ➞ true

# **2. Scrabble.**
Erstelle eine Funktion namens `calcMaxScrabbleScore`, die bei einem Array von Scrabble-Steinen die maximale Punktzahl zählt, die ein Spieler mit den Steinen in seiner Hand erreichen kann.

Beispiel:
```javascript
const scrabbleHand = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]
```
`console.log(calcMaxScrabbleScore(scrabbleHand));` ➞ 28

Hier wäre die maximale Punktzahl des Spielers `1 + 5 + 10 + 8 + 2 + 1 + 1` = 28

# **3. Ist es ein leeres Objekt?**
Erstelle eine Funktion `isEmptyObject`, die true zurückgibt, wenn ein Objekt leer ist, und false, wenn nicht.

Beispiele:

- `isEmptyObject({})` ➞ true
- `isEmptyObject({a: 1})` ➞ false

# **4. Buchstaben zählen.**
Erstelle eine Funktion `countLetters`, die die Anzahl der Vorkommen jedes Buchstabens in einer Zeichenkette zählt. Gib ein Objekt mit Schlüssel-Wert-Paaren von Buchstaben und der Anzahl der Vorkommen für jeden Buchstaben zurück.

Beispiel:

- `countLetters("tree")` ➞ {t: 1, r: 1, e: 2}

# **5. Kostenloser Versand.**
Erstelle eine Funktion `freeShipping`, die festlegt, ob eine Online-Bestellung kostenlos verschickt werden soll. Eine Bestellung wird kostenlos verschickt, wenn die Gesamtkosten der Artikel 50 € übersteigen.

Beispiele:

- `freeShipping({ "Sponge": 3.50, "Soap": 5.99 })` ➞ false
- `freeShipping({ "Surround Sound Equipment": 499.99 })` ➞ true
- `freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })` ➞ false

# **6. Programmier-Objekt.**

```javascript
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes"
};
```

- Schreibe einen Befehl, der die Sprache "Go" an das Ende des Arrays "languages" anfügt.

- Ändere die Schwierigkeit auf `7`.
- Schreibe eine Anweisung mit dem Schlüsselwort delete, um den Schlüssel "jokes" aus dem Programmier-Objekt zu entfernen.
- Schreibe eine Anweisung, um dem Programmier-Objekt einen neuen Schlüssel namens "isFun" mit dem Wert "true" hinzuzufügen.
- Durchlaufe in einer Schleife das Array "languages" und gib alle Sprachen mittels console.log aus.
- Gib in einer weiteren Schleife alle Schlüssel des Programmier-Objekts mittels console.log aus.
- Verwende ebenfalls eine Schleife, um alle Werte des Programmier-Objekts auszugeben.
- Füge die Methode `worthwhile` hinzu, die den Wert "Learning the programming languages: JavaScript, Python, Ruby, Go is rewarding and challenging", wenn die Schlüssel bzw. Eigenschaften "isChallenging" und "isRewarding" den Wert true haben. Falls "isChallenging" oder "isRewarding" den Wert false hat, wird false zurückgegeben.
- **Bonus:** Erkläre in einem Kommentar, was zu sehen ist, wenn wir eine Objektmethode über die Konsole ausgeben, ohne sie aufzurufen.

**Bonus**:
- Stelle sicher, dass kein anderer Code die Eigenschaften des Objekts löschen oder ändern kann.
