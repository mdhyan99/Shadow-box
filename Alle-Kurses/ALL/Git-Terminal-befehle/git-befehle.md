**git --version**
Sie können die Installationsanleitung aufrufen, falls git noch nicht installiert ist.

# Nutzername und E-Mail-Adresse hinzufügen #
Ihr Git-Nutzername und Ihre E-Mail-Adresse werden verwendet, um Sie als Autor:in zu identifizieren, wenn Sie Code in ein Repository hinzufügen.
Geben Sie folgenden Befehl ein, um Ihren Nutzernamen zu konfigurieren:

**git config --global user.name "IHR_NUTZERNAME"**
Lassen Sie sich Ihren eingegebenen Nutzernamen anzeigen:

**git config --global user.name**
Geben Sie nun Ihre E-Mail-Adresse ein.

git config --global user.email "adresse@example.com"
Lassen Sie sich Ihre eingegebene E-Mail-Adresse anzeigen:

**git config --global user.email**
Sie können auch alle eingegebenen Informationen gleichzeitig auslesen:

**git config --global --list**
Mit Projekten arbeiten
Eine Visualisierung des git-Workflow hilft, die verschiedenen Befehle wie clone, push, pull, merge und fetch zu verstehen.

Git ist eine dezentrale Versionsverwaltung. Dies bedeutet, dass Entwickler- und Serverumgebung nicht getrennt sind. Jeder Entwickler hat sowohl einen Workspace (dies sind die Dateien, an denen man derzeit arbeitet) sowie ein Repository, auch Klon genannt, welches alle Versionen und Branches eines Projekts enthält.

Wird GitLab verwendet, gibt es gleichzeitig ein zentrales Repository, mit denen das Projekt verwaltet wird.

Wenn Sie ein Projekt in der Web-Anwendung von GitLab angelegt haben und mit diesem auf Ihrem Rechner arbeiten möchten, dann müssen Sie zunächst eine lokale Kopie erzeugen.

Klonen Sie das Projekt in das Verzeichnis auf Ihrem Rechner, in dem Sie sich derzeit befinden. Navigieren Sie dazu in der Web-Anwendung zu dem Projekt, an dem Sie arbeiten möchten. Im Drop-down-Menü unter dem Titel wählen Sie SSH aus und kopieren dann die Zeile, die rechts davon angegeben ist.
clone project

Fügen Sie diese dann im folgenden Terminal-Befehl ein:

**git clone SSH_HIER_EINFUEGEN**
- Wenn Sie sich nun über den list-Befehl (ls) den Inhalt des aktuellen lokalen Verzeichnisses anzeigen lassen, finden Sie eine Kopie des GitLab-Projektes, welches Sie eben geklont haben. Sie können nun Dateien zum Projekt hinzufügen, bearbeiten oder löschen.
- Über den status-Befehl werden alle Dateien angezeigt, bei denen im Vergleich zum letzten Commit eine Änderung registriert wurde. Geänderte Dateien sind rot hinterlegt.

**git status**
Wenn Sie Änderungen vorgenommen haben, dann sollten Sie diese zum Index hinzufügen. Dies ist eine Auflistung von Dateien, die für den nächsten Commit vorbereitet sind. Ein Commit ist bei git eine Projektversion.
So können Sie alle geänderten Dateien gleichzeitig zum Index hinzufügen:

**git add .**
Wenn Sie nun erneut den status-Befehl eingeben, dann sind alle Dateien, die für den nächsten Commit vorgesehen sind, grün hinterlegt.
Sie können nun einen Commit einschließlich einer Kurzbeschreibung der Änderung durchführen. Beachten Sie bitte, dass dadurch nicht das Repository auf GitLab aktualisiert wird, sondern nur Ihr lokales Repository.

**git commit -m „Added index.html“**
Wenn Sie nun Ihre Änderungen zum entfernten Repository (remote repository), also dem GitLab-Projekt, hinzufügen möchten, können Sie dies über den push-Befehl machen.

**git push REMOTE BRANCHNAME**
REMOTE ist dabei der Name des entfernten Servers. Wenn Sie ein Projekt klonen, dann ist der von git vergebene Standardname origin. Zudem können Sie angeben, in welchen Branch das Projekt hinzugefügt werden soll.
So können Sie Ihre Änderungen zum Master-Branch hinzufügen:

**git push origin master**
- Wenn Sie jetzt über die GitLab-Web-Anwendung in den Projektordner navigieren und im linken Seitenmenü in der Kategorie Repository auf Commits klicken, dann erscheint die Änderung in der Commit-Übersicht. Zudem wurde das Projekt mit den Änderungen, die Sie lokal vorgenommen haben, aktualisiert.
commit project

- Historie betrachten
Über folgenden Befehl können Sie sich die vergangenen Commits ansehen, wobei der aktuellste Commit an erster Stelle steht:

**git log**
- git fetch, git merge, git pull
Es gibt drei git-Befehle, um Änderungen aus dem entfernten Repository abzuholen und mit Ihren lokalen Dateien zu synchronisieren.

- fetch holt Änderungen aus dem entfernten Repository, aber wendet diese nicht auf Ihren Code an.
merge synchronisiert per fetch abgeholte Änderungen mit dem Workspace.
pull führt fetch und merge aus. Dadurch werden Änderungen aus dem entfernten Repository abgeholt und mit dem Workspace synchronisiert.
git fetch
- Der fetch-Befehl erlaubt es, Änderungen aus einem entfernten Repository in das lokale Repository abzuholen. Änderungen werden im lokalen Repository in einem Remote-Branch gespeichert und können so erst einmal angesehen werden. Anschließend können sie mit dem merge-Befehl integriert werden. Da die abgeholten Änderungen in einem Branch im lokalen Repository gespeichert werden, können sie mit dem checkout-Befehl angesehen werden.

- Holen Sie zunächst die Änderungen aus dem entfernten Repository ab:

**git fetch**
Lassen Sie sich dann alle Branches anzeigen:

**git branch -a**
Im folgenden Beispiel ist master der lokale Branch, auf dem Sie sich derzeit befinden. Über den fetch-Befehl wurde die Projektversion des entfernten Repository im Branch remotes/origin/master gespeichert.

***master<br>**
remotes/origin/master
Um die soeben abgeholten Änderungen anzusehen, führen Sie folgenden Befehl aus:

**git checkout BRANCH**
In diesem aufschlussreichen Video wird der fetch-Befehl genauer erklärt.

**git pull**
Mit dem pull-Befehl können Sie Änderungen aus einem entfernten Repository abholen und mit Ihrem Workspace, also den Dateien, an denen Sie derzeit arbeiten, synchronisieren. Sie können dabei den Pfad zu einem Repository angeben sowie den Branch, aus dem Sie Änderungen abholen möchten. Kurz gesagt: git pull = git fetch + git merge.

**git pull PFAD BRANCH**
*Branch erstellen*
Ein Branch ist ein unabhängiger Entwicklungszweig. Mit folgendem Befehl können Sie alle Branches anzeigen, sowohl im lokalen als auch im Remote-Repository:

**git branch -a**
Geben Sie folgenden Befehl ein, um den neuen lokalen Branch (hier: new_Feature) zu erstellen und in diesen Branch zu wechseln:

**git checkout -b new_feature**
Mit dem checkout-Befehl können Sie jederzeit zwischen den verschiedenen Branches wechseln (hier: Wechsel in den master-Branch):

**git checkout master**
Mit folgendem Befehl können Sie Ihren Code zum entfernten Branch new_feature Ihres GitLab-Projekts hinzufügen:

**git push origin new_feature**
Wenn Sie nun in der GitLab-Web-Anwendung zu Ihrem Projekt navigieren, wird der neue Branch in der Branch-Übersicht angezeigt.