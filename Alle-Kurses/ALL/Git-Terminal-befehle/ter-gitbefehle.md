
# Terminalbefehle #

**pwd**
- eigt das aktuelle Verzeichnis an, in dem wir uns befinden.
**ls**
- Zeigt den Inhalt des aktuellen Verzeichnisses an.
- ls irgendein/pfad
- Zeigt den Inhalt des angegebenen Verzeichnisses an.
**ls -l**
- Listet den Inhalt eines Verzeichnisses mit weiteren Details auf.
**ls -a**
- Zeigt auch die versteckten Dateien und Verzeichnisse an (versteckte 
-  Elemente beginnen mit einem Punkt, z.B.: .ssh).
**ls -lh**
- Listet den Inhalt eines Verzeichnisses mit weiteren Details auf und -formatiert die Dateigrößen in ein besser lesbares Format.
**cd**
- Wechselt in das Home-Verzeichnis, wenn kein Pfad angegeben wird.
cd /irgendein/pfad
Wechselt in das angegebene Verzeichnis. Das / am Anfang bedeutet, dass wir im Hauptverzeichnis beginnen.
Geben wir das / nicht am Anfang an, wechseln wir vom aktuellen Verzeichnis (siehe pwd) in ein Unterverzeichnis.
Wichtige Befehle für das Arbeiten mit Dateien und Verzeichnissen
------------------------------------------------------------------
## mkdir verzeichnisname ##

Erstellt ein neues Verzeichnis mit dem angegebenen Namen.

**touch dateiname**
Erstellt eine neue Datei mit dem angegebenen Namen.

**mv quelle ziel**

- Verschiebt eine Datei von der Quelle zum Ziel. Wird ein anderer Dateiname als Ziel angegeben, kann mv auch umbenennen.
**cp quelle ziel**
- Kopiert eine Datei von der Quelle zum Ziel. Wird ein anderer Dateiname als Ziel angegeben, wird die Kopie umbenannt.
  
**cp -r quelle ziel**
- Kopiert ein Verzeichnis von der Quelle zum Ziel. Mit -r werden alle Inhalte kopiert.

**rm dateiname**

Löscht eine Datei. (Achtung, es gibt keinen Papierkorb! Was weg ist, ist weg)

**rm -r verzeichnisname**
Löscht ein Verzeichnis. Mit -r wird der gesamte Inhalt des Verzeichnisses gelöscht. Das ist notwendig, da wir das Verzeichnis nur löschen können, wenn es leer ist.
Dateien anzeigen und bearbeiten
------------------------------------------------------------------

**less dateiname**
Zeigt den Inhalt einer Datei an. Mit den Pfeiltasten und Bild-rauf/Bild-runter kann durch längere Dateien geblättert werden.
Beenden mit Q.
**nano dateiname**
Öffnet den Editor "nano", um die Datei zu bearbeiten.
Beenden mit STRG + X. Wenn die Datei verändert wurde, folgt eine Frage, ob gespeichert werden soll. Mit bestätigen J oder N ablehnen, anschließend Dateiname mit ENTER bestätigen.