# Fortschritt – Büro- und Raumplanungssystem (SaaS)

Logbuch des Main Agents. Wird nach jedem abgeschlossenen Schritt aktualisiert. Architektur und Konzepte: [ARCHITECTURE.md](./ARCHITECTURE.md).

## 1. Status-Übersicht

| Phase | Inhalt | Status |
|---|---|---|
| 0 | Analyse und Planung | **freigegeben** (25.11.2026) – Werkzeug-Einrichtung (Supabase-Projekt, gh-Login, Docker) läuft |
| 1 | Fundament und Supabase | offen |
| 2 | Grundriss und Editor | offen |
| 3 | Mitarbeiter-Funktionen und Kalender | offen |
| 4 | Admin-Dashboard und Monitoring | offen |
| 5 | Automatisches 3D-Modell | offen |
| 6 | Qualität, Sicherheit und Politur | offen |

## 2. Quellen der Anforderungen

| Kürzel | Quelle |
|---|---|
| A | Auftrag (Prompt) |
| B1 | Bild IMG_0867 – „How it Works“ (5 Schritte) |
| B2 | Bild IMG_0868 – „Benefits“ (Organisation/Mitarbeiter) |
| B3 | Bild IMG_0869 – „Industries“ 01–03 |
| B4 | Bild IMG_0870 – „Industries“ 04–06 |
| B5 | Bild IMG_0871 – vier Screen-Skizzen (Grundriss, Buchung, Admin-Dashboard, Berichte) |
| B6 | Bild IMG_0872 – FAQ „Wie buchen Mitarbeiter?“ |
| B7 | Bild IMG_0873 – FAQ „Erscheinen Buchungen im Kalender?“ |
| B8 | Bild IMG_0874 – FAQ „Können Admins/Manager für andere buchen?“ |
| P1–P19 | PDF „Desk Booking Software … _ MLAI.pdf“, Seite n (S. 9–16 und 20 sind leer, da Website-Inhalte beim Druck nicht geladen wurden) |
| D | Dashboard-Screenshot, eingebettet in PDF S. 1 (wichtigste Design-Vorlage) |

> Hinweis: Alle Vorlagen stammen von der Marketing-Website eines Drittanbieters (MLAI Solution). Sie dienen als **Funktions- und Stilreferenz**. Logo, Markenname, Texte und Grafiken werden **nicht** übernommen.

## 3. Anforderungs-Matrix

Status: offen · in Arbeit · erledigt · **Frage** (Freigabe nötig, siehe Abschnitt 7)

| Nr. | Anforderung | Quelle | Zuständiger Agent | Status |
|---|---|---|---|---|
| R01 | Interaktiver Grundriss mit Live-Verfügbarkeit (frei / belegt / eigene Buchung / nicht verfügbar) und Legende | B1-01, B5-1, P2–P3, P7, D | 2D-Grundriss | offen |
| R02 | Filter nach Stockwerk, Zone, Datum und Ausstattung („what the desk offers“) | B1-01, A3.2 | Buchung & Kalender | offen |
| R03 | Platz wählen und ohne Genehmigung buchen; Ändern, Stornieren, „Meine Buchungen“ | B1-02, B6, P7, A3.2 | Buchung & Kalender | offen |
| R04 | Buchungsbestätigung als In-App-Benachrichtigung (E-Mail-Bestätigung abgewählt) | B1-02, B6 | Buchung & Kalender | offen |
| R05 | Buchung erscheint automatisch im In-App-Kalender (Single Source of Truth) | B1-03, B6, B7, P8, A3.4 | Buchung & Kalender | offen |
| R06 | Externe Kalender: persönlicher ICS-Abo-Feed (Phase 6) und Google-/Microsoft-Kalender per OAuth (später) | B7, P7–P8, A3.4 | Buchung & Kalender | offen (freigegeben) |
| R07 | Check-in bei Ankunft (QR-Code am Platz / Web), tatsächliche Zeit wird protokolliert | B1-04, D („Smart Check-in“), P5 („Avg Check-in Time“) | Buchung & Kalender | offen (freigegeben) |
| R08 | No-Show-Erkennung und automatische Freigabe (Auto-Release) | B1-05, P5–P6 | – | abgewählt |
| R09 | Admin-Live-Übersicht: genutzte Plätze, kommende Buchungen, No-Shows; Plätze freigeben | B1-05, D | Admin-Dashboard | offen |
| R10 | Vorausbuchung über Tage/Wochen (Buchungsfenster per Regel) | P7, A3.3 | Buchung & Kalender | offen |
| R11 | Serienbuchungen (regelmäßige Bürotage) | P7, A3.4 | – | abgewählt |
| R12 | Teams, Team-Sitzbereiche und Team-Buchung („Kollegen sitzen zusammen“) | P7–P8, B2, B3 | Buchung & Kalender | offen (freigegeben) |
| R13 | Rolle „Manager“: bucht für Personen/Teams und ändert Buchungen, ohne volle Admin-Rechte | B8, P8 | Supabase/DB/Auth + Buchung | offen (freigegeben) |
| R14 | Buchungsregeln pflegen, Zonen/Bereiche sperren | B8, P8, A3.3 | Admin-Dashboard | offen |
| R15 | Standorte, Stockwerke, Zonen, Plätze und Räume im Admin-Bereich pflegen | P7, A3.3 | Admin-Dashboard | offen |
| R16 | Mehrere Standorte mit Standortauswahl („All Locations“) | D | Admin-Dashboard | offen |
| R17 | Dashboard-Kennzahlen: Plätze gesamt, verfügbar, Buchungen heute, anwesende Mitarbeiter, Auslastung mit Trend zur Vorwoche | D, B5-3, P2 | Admin-Dashboard | offen |
| R18 | Diagramme: Auslastungsverlauf (Linie), Buchungsübersicht (Ring: eingecheckt / anstehend; ohne „remote“) | D, B5-3 | Admin-Dashboard | offen |
| R19 | Berichte: Nutzung, Stoßzeiten, ruhige Zonen, Team-Anwesenheit, Monatsauslastung; Export als **PDF** | P8, B5-4, A3.3 | Admin-Dashboard | offen |
| R20 | Rollenbasierter Zugriff und vollständige Buchungsprotokolle (Audit-Log) | B4-04 | Supabase/DB/Auth | offen (freigegeben) |
| R21 | Schnellbuchung: Standort, Datum, Zeit von–bis, „Verfügbare Plätze finden“ | D, B5-2 | Buchung & Kalender | offen |
| R22 | Kommende Buchungen mit Status und Link „Kalender ansehen“ | D | Buchung & Kalender | offen |
| R23 | Letzte Aktivitäten | D | Admin-Dashboard | offen |
| R24 | Benachrichtigungen (Glocke mit Zähler) | D | Design-System/Layout | offen |
| R25 | Platzstatus „Reinigung“ / „außer Betrieb“ | P2–P3 („Sanitizing“), P7 | Supabase/DB/Auth + 2D | offen |
| R26 | Navigation: Dashboard, Platz buchen, Meine Buchungen, Kalender, Mitarbeiter, Berichte & Analysen, Büro verwalten, Einstellungen, Benachrichtigungen, Hilfe | D | Design-System/Layout | offen |
| R27 | Besucherverwaltung (Menüpunkt „Visitors“) | D | – | abgewählt |
| R28 | Hilfe & Support-Seite | D | Design-System/Layout | offen (freigegeben) |
| R29 | Remote-/Homeoffice-Status für hybride Planung | D, P2 | – | abgewählt |
| R30 | Mandantenfähigkeit, Rollen Super-Admin (Plattform) / Admin / Manager / Mitarbeiter, Supabase Auth (E-Mail + Passwort), Firmen-Selbstregistrierung, Mitarbeiter per Einladung, RLS | A3.1, A5 | Supabase/DB/Auth | offen |
| R31 | Grundriss-Import PDF/SVG/DXF/PNG/JPG, mehrere Stockwerke, sichere Uploads | A4.1 | Import & Erkennung | offen |
| R32 | Automatische Erkennung von Räumen, Wänden, Türen und Fenstern (als Vorschlag) | A4.2 | Import & Erkennung | offen |
| R33 | Grundriss-Editor inkl. Wände/Öffnungen, Maßstab, Undo/Redo, Versionen, Touch | A4.3 | 2D-Grundriss | offen |
| R34 | Automatisches 3D-Modell, 2D/3D-Umschalter, Live-Belegung in 3D | A4.4 | 3D | offen |
| R35 | Kalender: Tag/Woche/Monat/Agenda; Mein Kalender, Raumkalender, Gesamtkalender mit Filtern | A3.4 | Buchung & Kalender | offen |
| R36 | Sperrzeiten (Wartung, Feiertage) blockieren Buchungen und erscheinen im Kalender | A3.3, A3.4 | Buchung & Kalender | offen |
| R37 | Benutzer- und Rollenverwaltung (einladen, Rolle ändern, deaktivieren) | A3.3, D („Employees“) | Admin-Dashboard | offen |
| R38 | Systemstatus/Monitoring mit Healthchecks, Vorfällen, Fehlerübersicht, Warnungen | A3.3, A5.5 | Monitoring | offen |
| R39 | Räume (Besprechungsraum, Telefonbox) zusätzlich zu Arbeitsplätzen | A3.2 (Vorlagen zeigen nur Arbeitsplätze) | Buchung & Kalender | offen (freigegeben) |
| R40 | Design-System mit Tokens, responsiv ab 360 px, WCAG 2.1 AA, deutsche Texte | A6, D | Design-System/Layout | offen |

## 4. Logbuch (neueste oben)

| Datum | Agent | Aufgabe | Ergebnis | Skills/MCPs | Tests | Commit |
|---|---|---|---|---|---|---|
| 2026-11-25 | Main | GitHub-Einrichtung abgeschlossen | Labels (Typ, Priorität, `agent: …`, `blocked`), 7 Meilensteine (Phase 0–6), Issues **#1–#24** angelegt und alle im Project #2. Status: #1 Done (geschlossen), übrige Backlog. Prioritäten P0/P1/P2 gesetzt. Phase-1-Aufgaben #3–#13 als Sub-Issues von Epic #2; Abhängigkeiten als „blocked by“ verknüpft. Start-/Zieldatum bisher nur für #1 gesetzt (Rest folgt bei Arbeitsbeginn). | gh CLI | Kontrolle: 24/24 Items im Project, 0 ohne Meilenstein, Sub-Issues und Abhängigkeiten stichprobenhaft geprüft ✔ | – |
| 2026-11-25 | Main | GitHub-Einrichtung (1. Versuch) | Abgebrochen wegen GitHub-Störung („Issues: major_outage“); nur Labels und 2 Meilensteine angelegt, keine Duplikate. | gh CLI | – | – |
| 2026-11-25 | Main | Supabase-Dev-Projekt angelegt, MCP umgestellt | Projekt `Raumplanungs_SaaS` (Ref `nojkevaqbjllfhhehxok`, eu-central-1, Postgres 17, Free-Tarif, 0 €) per MCP angelegt; Status ACTIVE_HEALTHY; Security-Advisors: keine Befunde. `.vscode/mcp.json` jetzt `project_ref` + `read_only=true` + `features=database,docs,debugging,development`. Bestehendes Projekt „Raumplanung-SaaS“ (eu-west-1) enthält laut Nutzer **Produktivdaten** und wird **nicht** angefasst. Docker Desktop 29.9.3 läuft. | Supabase-MCP (`list_organizations`, `list_projects`, `create_project`, `get_project`, `get_advisors`) | Advisors ✔ | siehe Git |
| 2026-11-25 | Main | Prisma CLI installieren und initialisieren | Prisma **7.10.1** + dotenv **18.0.10** fest gepinnt in `saas/package.json`/`bun.lock`; Prisma-Schema und `prisma.config.ts` angelegt. `.env.local` ignoriert Git und enthält die Dev-URLs als Vorlagen mit `[YOUR-PASSWORD]` (noch durch Nutzer zu ersetzen). Prisma CLI liest `DIRECT_URL` für Introspection. Kein DB-Zugriff oder Migration ausgeführt. | Supabase-Skill, Prisma CLI v7-Doku, Supabase Prisma-Doku | `prisma validate` ✔, `prisma generate` ✔, `bun run lint` ✔, TypeScript-Check ✔, `bun run build` ✔ (Next-Warnung: übergeordnetes `package-lock.json` außerhalb des Repos) | noch nicht committet |
| 2026-11-25 | Main | Phase 0: Vorlagen ausgewertet, Matrix, Stack-Analyse, Konzepte | Erste Fassung PROGRESS/ARCHITECTURE | Web-Suche/Fetch (Supabase-Doku, Kalender-Lizenzen), Next-16-Doku aus `node_modules/next/dist/docs` | Baseline: `bun run lint` ✔, `tsc --noEmit` ✔ | `077b492` |
| 2026-11-25 | Main | Supabase-MCP vorbereitet | `.vscode/mcp.json` **temporär** mit `features=account,docs` (ohne Token, ohne Projektbindung) zum Anlegen des Projekts; danach Umstellung auf `project_ref` + `read_only=true` | – | – | – |
| 2026-11-25 | Main | GitHub CLI installiert | `gh` 2.105.0 per winget (Hash geprüft); Anmeldung durch Nutzer ausstehend | – | – | – |
| 2026-11-25 | Main | Supabase-Skills installiert | `supabase` v0.1.2 und `supabase-postgres-best-practices` v1.1.1 aus `supabase/agent-skills` (MIT, Commit `c9be0e9`), Befehl `npx skills add supabase/agent-skills --skill '*' -y --copy`; nach `.github/skills/` verschoben (Repo-Konvention), Herkunft in `skills-lock.json`. Inhalt geprüft, unauffällig. Laden erst nach Neustart der Sitzung möglich (Katalog wird beim Start gelesen). | skills CLI (vercel-labs/skills) | Ladetest in laufender Sitzung: nicht sichtbar (erwartet) | – |

### Genutzte und fehlende Werkzeuge (Phase 0)

- **Vorhanden/genutzt:** Web-Suche/Fetch, PowerShell, Next.js-Doku im Paket, Supabase-MCP (OAuth, jetzt read-only + projektgebunden), gh CLI (Scopes repo, project, read:org, workflow), Docker Desktop, Sentry-Konto + Plugin (Nutzer), Skills `defensive-appsec-triage`, Strix-Security-Skills (für Wächter vorgesehen), GitHub-MCP (nur lesend), Neon-MCP (nicht relevant, wird nicht genutzt), Figma-MCP (keine Figma-Datei vorhanden).
- **Fehlend:** Supabase-Skills in der laufenden Sitzung (Neustart nötig), Context7 o. ä. Doku-MCP.

## 5. Wächter-Berichte und Befunde

Noch keine Prüfung (Wächter startet nach Freigabe von Phase 0). Erste Hinweise des Main Agents:

| ID | Schwere | Fundstelle | Beschreibung | Status |
|---|---|---|---|---|
| W-000 | Hinweis | `saas/Credentials.txt` | Lokale Datei mit vermutlich Zugangsdaten; ist per `saas/.gitignore` ausgeschlossen und nie committet worden. Inhalt nicht gelesen. Empfehlung: Inhalte in `.env.local` bzw. Passwortmanager überführen. | offen |
| W-001 | Hinweis | `saas/.gitignore` | `.env*` schließt auch die geplante `.env.example` aus → Ausnahme `!.env.example` in Phase 1 ergänzen. | offen |
| W-002 | Hinweis | Repo-Einstellungen | GitHub Secret Scanning und Push Protection aktivieren (nur durch Repo-Owner möglich). | offen |
| W-003 | Hinweis | `saas/sentry.common.ts` (uncommittet, vom Nutzer per Sentry-Wizard angelegt) | EU-Ingest ✔, `userInfo`/Cookies/Header/Bodies aus ✔, Source-Maps aus ✔, kein Auth-Token ✔. Verbesserungen für Sentry-Issue: DSN aus `NEXT_PUBLIC_SENTRY_DSN` statt hartkodiert (nicht geheim, aber umgebungsabhängig); `genAI.inputs/outputs` auf `false` (Datensparsamkeit); `beforeSend`-Filter ergänzen. | offen |
| W-004 | Hinweis | `saas/next.config.ts` / `saas/AGENTS.md` | `experimental.agentFeedback` ist aktiv; `next dev` schreibt einen Feedback-Block in AGENTS.md, Agenten melden anonymisiertes Feedback an Next.js. Prüfen, ob gewünscht. | offen |

## 6. Entscheidungen

| Datum | Entscheidung | Begründung | Alternativen |
|---|---|---|---|
| 2026-11-25 | Neues Supabase-Projekt „Raumplanungs_SaaS“, Region Frankfurt (eu-central-1), Ref `nojkevaqbjllfhhehxok` – **Entwicklungsprojekt** | Vorgabe Nutzer, DSGVO; bestehendes Projekt enthält Produktivdaten (Regel 10) | bestehendes Projekt „Raumplanung-SaaS“ (Irland, produktiv – tabu) |
| 2026-11-25 | Verbindung: Supabase-MCP + Supabase CLI + API-Schlüssel (kein DB-String) | Nutzer; CLI wegen versionierter Migrationen, Typen, pgTAP | nur MCP |
| 2026-11-25 | Umgebungen: lokal (Docker) + Cloud-Entwicklungsprojekt; Produktion getrennt | Nutzer; Docker wird installiert | nur Cloud |
| 2026-11-25 | Projekt wird vom Agenten per MCP angelegt (temporär Konto-Tools, danach read-only + Projektbindung) | Nutzerwunsch (Empfehlung war Anlage im Dashboard) | Anlage durch Nutzer |
| 2026-11-25 | GitHub-Schreibzugriff über `gh` CLI | Nutzer | MCP erweitern |
| 2026-11-25 | Skills-Ablage `.github/skills/` | bestehende Repo-Konvention | `.agents/skills`, `.claude/skills` |
| 2026-11-25 | Branding: Vorlagen nur Inspiration, Arbeitstitel „Raumplanung“ | rechtlich sauber | Kopie der Vorlage |
| 2026-11-25 | Design: Farbwelt und Statusfarben des App-Dashboards (Navy-Sidebar, Violett; frei grün, belegt orange, nicht verfügbar grau, meins blau) | Nutzer | Website-Blau |
| 2026-11-25 | Zusatzfunktionen: Check-in, Manager-Rolle, Teams, Audit-Log, PDF-Export, Hilfe-Seite; Räume buchbar. **Nicht:** Auto-Release, Remote-Status, Besucher, CSV-Export | Nutzer | – |
| 2026-11-25 | **Datenzugriff: Prisma** auf Supabase-Postgres; **SQL-Migrationen per Supabase CLI** sind Quelle der Wahrheit, Prisma-Schema per `prisma db pull`; Prisma-Abfragen laufen per **RLS-Extension** (Transaktion mit Rolle `authenticated` + JWT-Claims) **und** Autorisierung im Code | Nutzer (Empfehlung war Supabase-nativ); RLS-Extension hält RLS als zweite Schutzschicht aktiv | Supabase-nativ; eigene Rolle mit BYPASSRLS |
| 2026-11-25 | Auth: Supabase Auth, nur E-Mail + Passwort; Firma registriert sich selbst, Mitarbeiter per Einladung | Nutzer | Magic Link, OAuth, MFA |
| 2026-11-25 | Kalender: FullCalendar Standard (MIT); Sichtbarkeit fremder Buchungen nur „belegt“; Erweiterungen ICS-Feed + Google/Microsoft (später); keine Serien, keine E-Mail-Bestätigung | Nutzer | react-big-calendar |
| 2026-11-25 | Technik-Vorschläge aus ARCHITECTURE.md Abschnitt 3 freigegeben (shadcn/ui, zod, Recharts, date-fns/tz, Zustand, SVG-2D, R3F-3D, Realtime-Broadcast, Storage, pg_cron, Vitest/Playwright/pgTAP, CodeQL/gitleaks/Dependabot) | Nutzer | – |
| 2026-11-25 | 3D: schlicht (Wände, Böden, Boxen), nicht begehbar, Laufzeit-Erzeugung; eigener 3D-Agent (Variante A) | Nutzer / Main | Möbel-Assets, Begehbarkeit |
| 2026-11-25 | Error-Tracking: **Sentry (EU-Region) ab Phase 1** | Nutzer | eigene Lösung zuerst |
| 2026-11-25 | Hosting: Vercel, Region Frankfurt | Nutzer | eigener Server |
| 2026-11-25 | Systemstatus: Plattform-Super-Admin sieht alles; Mandanten-Admins nur Komponentenstatus + eigene Daten; Warnungen nur im Dashboard | Nutzer | – |
| 2026-11-25 | GitHub Project: https://github.com/users/bennieser95-cmyk/projects/2. Statuszuordnung: Backlog → Backlog, In Progress → „In progress“, In Review → „In review“, Done → Done; **Blocked** gibt es im Project nicht → Label `blocked` (keine Strukturänderung am Project). Priorität: Critical → P0, High → P1, Medium/Low → P2, zusätzlich Labels `priority: …`. Phasen als Meilensteine, Agenten als Labels `agent: …`, Abhängigkeiten als „blocked by“-Verknüpfung + Text, Phase-1-Aufgaben als Sub-Issues des Epics | bestehende Project-Felder nutzen | neues Statusfeld |

## 7. Offene Fragen und Risiken

**Offen (Werkzeuge):**
1. ~~GitHub-Issues anlegen~~ – erledigt (#1–#24).
2. Nutzer: DB-Passwort des Dev-Projekts im Dashboard zurücksetzen und `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`, `DATABASE_URL`, `DIRECT_URL`, `NEXT_PUBLIC_SENTRY_DSN` des **Dev-Projekts** in `saas/.env.local` eintragen (Datei existiert noch nicht).
3. Nutzer: Secret Scanning und Push Protection aktivieren.
4. Sitzung neu laden, damit die Supabase-Skills geladen werden.

**Risiken**
- Prisma + Supabase: Pooler (Transaction-Modus, Port 6543) erfordert `pgbouncer=true`/keine Prepared Statements; RLS-Extension erzeugt Overhead je Abfrage (Transaktion + `set_config`) → Messung in Phase 1. Realtime, Storage und Auth laufen weiterhin über supabase-js.
- Vorlagen stammen von einem Drittanbieter (Urheber-/Markenrecht) → nur Inspiration, eigenes Branding.
- Rastererkennung (PNG/JPG) von Wänden ist ungenau → immer nur Vorschlag, manuelles Zeichnen bleibt Hauptweg.
- `cacheComponents: true` (Next 16) + cookie-basierte Supabase-Session erfordert saubere Trennung statischer/dynamischer Teile (Suspense-Grenzen).
- Datenschutz Live-Belegung: Realtime über `postgres_changes` würde wegen RLS fremde Buchungen nicht liefern bzw. bei zu offener Policy Personen preisgeben → Broadcast ohne Personenbezug (siehe ARCHITECTURE.md).
