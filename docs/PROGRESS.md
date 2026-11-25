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

Wächter-Vorlage: `.github/agents/waechter.agent.md` (Agent `waechter`), Start per `.github/prompts/waechter-audit.prompt.md` (`/waechter-audit`). Schwere: kritisch/hoch blockiert den Phasenabschluss.

Erste Hinweise des Main Agents (Status durch Wächter-Bericht 1 aktualisiert):

| ID | Schwere | Fundstelle | Beschreibung | Status |
|---|---|---|---|---|
| W-000 | Hinweis | `saas/Credentials.txt` | Lokale Datei mit vermutlich Zugangsdaten; ist per `saas/.gitignore` ausgeschlossen und nie committet worden. Inhalt nicht gelesen. Empfehlung: Inhalte in `.env.local` bzw. Passwortmanager überführen. **Bericht 1:** Ignore bestätigt (`saas/.gitignore:44`), Datei in keinem Commit aller Refs (inkl. lokaler `refs/agents/*`). | offen |
| W-001 | Hinweis | `saas/.gitignore:34` | `.env*` schließt auch die geplante `.env.example` aus → Ausnahme `!.env.example` in Phase 1 ergänzen. **Bericht 1:** bestätigt (`git check-ignore -v .env.example` → Zeile 34). **Behoben (Main, 25.11.):** `!.env.example` in `saas/.gitignore` ergänzt. | behoben |
| W-002 | Hinweis | Repo-Einstellungen | GitHub Secret Scanning und Push Protection aktivieren (nur durch Repo-Owner möglich). **Bericht 1:** per `gh api repos/…` geprüft: `secret_scanning` und `secret_scanning_push_protection` = enabled. Offen bleibt nur Dependabot Security Updates (disabled, siehe W-006). | verifiziert |
| W-003 | Hinweis | `saas/sentry.common.ts:4–15` (uncommittet, vom Nutzer per Sentry-Wizard angelegt) | EU-Ingest ✔, `userInfo`/Cookies/Header/Bodies aus ✔, Source-Maps aus ✔, kein Auth-Token ✔. Verbesserungen für Sentry-Issue: DSN aus `NEXT_PUBLIC_SENTRY_DSN` statt hartkodiert (nicht geheim, aber umgebungsabhängig); `genAI.inputs/outputs` auf `false` (Datensparsamkeit); `beforeSend`-Filter ergänzen. **Bericht 1:** alles bestätigt; `NEXT_PUBLIC_SENTRY_DSN` ist in `.env.local` definiert, wird aber nicht verwendet; `beforeSend`/`beforeBreadcrumb` fehlen (in ARCHITECTURE.md vorgesehen). Ergänzt durch W-005 und W-014. | offen |
| W-004 | Hinweis | `saas/next.config.ts` / `saas/AGENTS.md` | `experimental.agentFeedback` war aktiv; `next dev` schrieb einen Feedback-Block in AGENTS.md. **Bericht 1:** bestätigt; der Block sah einen externen `npx`-Aufruf vor. **Behoben (25.11., Nutzerentscheidung):** `agentFeedback: false` gesetzt und den verwalteten Feedback-Block entfernt. | behoben |

### Wächter-Bericht 1 – Schnellprüfung (25.11.2026)

**Umfang:** uncommittete Änderungen auf `V1` (Stand `faaef80` + Arbeitsbaum): Sentry-Einrichtung (`next.config.ts`, `sentry.*.ts`, `instrumentation*.ts`, `app/global-error.tsx`), Prisma-Einrichtung (`prisma.config.ts`, `prisma/schema.prisma`, `package.json`, `bun.lock`), `saas/.gitignore`, `saas/AGENTS.md`, `saas/README.md`, `.vscode/mcp.json`, `.vscode/settings.json`, neue Skills unter `.github/skills/`. Secret-Scan über Arbeitsbaum und gesamte Git-Historie (alle Refs). Keine Datenbankverbindung, kein Produktivprojekt.

**Prüfungen und tatsächliche Ergebnisse:**
- `bun run lint` (saas) → Exit 0, keine Meldungen. `bunx tsc --noEmit` (saas) → Exit 0.
- `bun audit` (saas) → **1 Schwachstelle (high):** `effect@3.20.0` über `prisma › @prisma/config` (GHSA-7589-6fvf-x4pw, ReDoS) → W-006.
- Lizenzen: `@sentry/nextjs` 11.17.0 MIT, `prisma` 7.10.1 Apache-2.0, `@prisma/config` 7.10.1 Apache-2.0, `dotenv` 18.0.10 BSD-2-Clause, `effect` 3.20.0 MIT → unkritisch.
- Secret-Scan (`sb_secret_`, `service_role`, `eyJhbGciOi`, `postgres://…:…@`, `ghp_`, `gho_`, `github_pat_`, `sntrys_`, `-----BEGIN`, Prod-Ref) über Arbeitsbaum und `git log --all -p`: **keine Secrets.** Treffer nur: `service_role` als Doku-Text in `.github/skills/supabase/SKILL.md:42` und `.github/skills/supabase-postgres-best-practices/references/security-rls-performance.md:50`; öffentlicher Sentry-DSN in `saas/sentry.common.ts:4` (nicht geheim, siehe W-003). Prod-Ref in keinem Commit und keiner Datei des Arbeitsbaums. Keine `.env*`-/`Credentials.txt`-/`.pem`-Datei je committet.
- Ignore-Status: `.env.local` und `.env*` → `saas/.gitignore:34`, `Credentials.txt` → `:44`, `app/generated/prisma` → `:46` ✔. `.env.example` wird ebenfalls ignoriert (W-001).
- `.env.local` (nur Namen/Eigenschaften geprüft, keine Werte): `DATABASE_URL`, `DIRECT_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`, `NEXT_PUBLIC_SENTRY_DSN`. Enthält nur die Dev-Ref, nicht die Prod-Ref ✔; Publishable Key im neuen Format (kein Legacy-JWT) ✔; geheimer Schlüssel ohne `NEXT_PUBLIC_` ✔; Passwort-Platzhalter ersetzt; kein `sslmode` (W-007).
- `.vscode/mcp.json`: nur Dev-Ref, `read_only=true`, Features `database,docs,debugging,development`, kein `account`, kein Token ✔.
- `app/global-error.tsx`: `retry`-Prop entspricht der Next-16-Doku (stabil seit 16.3) ✔. `instrumentation.ts`: `register()` + `onRequestError` korrekt ✔.
- GitHub: Repo ist **öffentlich**; Secret Scanning + Push Protection aktiv (W-002), Dependabot Security Updates deaktiviert.

**Gesamturteil: mit Auflagen** – keine kritischen oder hohen Befunde (der „high“-Audit-Treffer ist mangels Erreichbarkeit als niedrig eingestuft). Auflage: W-005 vor dem ersten Datenbankzugriff aus der App bzw. spätestens vor Abschluss von Phase 1 beheben; W-001, W-007, W-008 in Phase 1 erledigen.

| ID | Schwere | Fundstelle | Beschreibung / Auswirkung | Reproduktion | Fix-Vorschlag | Agent | Status |
|---|---|---|---|---|---|---|---|
| W-005 | mittel | `saas/sentry.common.ts:6–15` | `dataCollection` lässt `databaseQueryData` (Default `true`: gebundene Query-Parameter, Schreib-Payloads, Ergebnisdaten), `queues`, `graphQL` und `mcp` auf Default; `genAI` explizit `true`. Sobald Prisma/pg instrumentiert wird, landen Namen, E-Mails und Buchungen in Sentry-Spans → PII-Abfluss zu Drittanbieter, DSGVO. | Typen in `node_modules/@sentry/core/build/types/types/datacollection.d.ts` (Defaults) mit `sentry.common.ts` vergleichen. | In `dataCollection` ergänzen: `databaseQueryData: false`, `queues: false`, `graphQL: { document: false, variables: false }`, `mcp: { inputs: false, outputs: false }`, `genAI: { inputs: false, outputs: false }`; README-Abschnitt anpassen. | Monitoring (Integration: Main) **Behoben (Main, 25.11.):** alle genannten `dataCollection`-Optionen in `saas/sentry.common.ts` auf `false` (Typen geprüft). | behoben |
| W-006 | niedrig | `saas/bun.lock` (`@prisma/config@7.10.1` pinnt `effect@3.20.0`) | `bun audit`: GHSA-7589-6fvf-x4pw (ReDoS in `Schema.TemplateLiteral`, behoben in 3.22.1). Nur Prisma-CLI/Config (devDependency), keine Verarbeitung untrusted Input → nicht erreichbar, aber Audit bleibt rot (CI-Gate). | `bun audit` im Ordner `saas`. | Prisma-Update mit gefixter Abhängigkeit abwarten oder `"overrides": { "effect": "3.22.1" }` in `package.json` + `prisma validate`/`generate` testen; Dependabot Security Updates aktivieren. | Main **Behoben (Main, 25.11.):** `"overrides": { "effect": "3.22.5" }` in `saas/package.json`; `bun audit` → keine Schwachstellen, `prisma validate` ✔. | behoben |
| W-007 | niedrig | `saas/.env.local` (`DATABASE_URL`, `DIRECT_URL`; nur Eigenschaft geprüft) | Verbindungs-URLs ohne `sslmode`. Der Laufzeit-Client mit `pg`-Treiberadapter nutzt ohne `sslmode`/`ssl`-Option kein TLS → DB-Passwort und Daten unverschlüsselt über das Internet, sofern Supabase „Enforce SSL“ nicht aktiv ist. | Eigenschaftsprüfung der URLs (ohne Werte); Supabase Dashboard → Database → SSL Configuration (extern). | `sslmode=require` (besser `verify-full` mit Supabase-CA) an beide URLs, in `.env.example` dokumentieren; im Dev-Projekt „Enforce SSL on incoming connections“ aktivieren. | Supabase/DB/Auth | offen |
| W-008 | niedrig | Repo-Wurzel (keine `.gitignore`) | Nur `saas/.gitignore` existiert. `.env*`, `*.pem`, `Credentials.txt` oder Supabase-CLI-Dateien außerhalb von `saas/` (z. B. Repo-Wurzel) sind nicht geschützt. | `git check-ignore -v .env` in der Repo-Wurzel → kein Treffer. | Root-`.gitignore` mit `.env*`, `!.env.example`, `*.pem`, `Credentials.txt`, `.DS_Store`. | Main **Behoben (Main, 25.11.):** Root-`.gitignore` mit `.env*`, `!.env.example`, `Credentials.txt`, `.vscode/settings.json`, `node_modules/`. | behoben |
| W-009 | Hinweis | `saas/next.config.ts` (kein `headers()`), kein `saas/proxy.ts` | Noch keine Sicherheits-Header/CSP (in ARCHITECTURE.md geplant). Mit Sentry muss die CSP `connect-src` für den EU-Ingest erlauben. | `next.config.ts` lesen. | In Phase 1 CSP mit Nonce, HSTS, `frame-ancestors 'none'` usw. umsetzen; Sentry-Ingest bzw. `tunnelRoute` berücksichtigen. | Main + Supabase/DB/Auth (`proxy.ts`) | offen |
| W-010 | Hinweis | `.vscode/settings.json:2` (uncommittet) | `chat.plugins.enabled: true` als Workspace-Einstellung: nach Commit für alle Mitwirkenden aktiv; Plugins können MCP-Server, Skills und Hooks mitbringen (Lieferkette, Prompt-Injection). | Datei lesen. | Als Benutzereinstellung setzen statt im Repo, oder bewusst committen und nur vertrauenswürdige Plugins (offizielles Sentry-Plugin) dokumentieren. | Main **Behoben (Main, 25.11.):** `.vscode/settings.json` per Root-`.gitignore` ausgeschlossen (bleibt lokale Einstellung). | behoben |
| W-011 | Hinweis | `.github/skills/defensive-appsec-triage/`, `.github/skills/honeypot-*/` (uncommittet) | Neue Skills ohne Eintrag in `skills-lock.json` (Herkunft/Hash/Lizenz nicht nachvollziehbar). Skills sind Agenten-Anweisungen → Lieferketten-Risiko. | `skills-lock.json` lesen. | Vor dem Commit Inhalt prüfen, Herkunft und Lizenz dokumentieren (Lockfile oder Logbuch). | Main **Behoben (Main, 25.11.):** Diese Skills gehören dem Nutzer und werden auf seinen Wunsch nicht committet (Entscheidung Phase 0, Frage 18). | akzeptiert |
| W-012 | Hinweis | `saas/app/global-error.tsx:18–20` | `lang="en"` und englische Texte, widerspricht R40 (deutsche Texte, WCAG `lang`). Funktional korrekt. | Datei lesen. | `lang="de"`, deutsche Meldung („Etwas ist schiefgelaufen“ / „Erneut versuchen“), eigene Styles. | Design-System/Layout | offen |
| W-013 | Hinweis | `saas/prisma.config.ts:5,13` | `env("DIRECT_URL")` wirft ohne Variable (`Cannot resolve environment variable`), Config lädt nur `.env.local` → `prisma generate` scheitert in CI/Vercel ohne `DIRECT_URL`. Generierter Client liegt in `app/generated/prisma` (u. a. `browser.ts`). | `node_modules/@prisma/config/dist/index.js` (Funktion `env`). | Für `generate` Fallback ohne DB-URL (z. B. `process.env.DIRECT_URL ?? ""` nur für generate) oder CI-Variable; Prisma-Zugriff nur über `server-only`-Modul in `lib/db`. | Supabase/DB/Auth | offen |
| W-014 | Hinweis | Sentry-Projekt `raumplanung-saas` (extern) | Nicht aus dem Repo prüfbar: serverseitiges Data Scrubbing, „Prevent Storing of IP Addresses“, Aufbewahrung, „Allowed Domains“ für den (öffentlichen) DSN, Rate Limits gegen DSN-Missbrauch im öffentlichen Repo. | Sentry → Project Settings → Security & Privacy / Client Keys. | Einstellungen durch Nutzer prüfen und im Logbuch festhalten. | Nutzer / Monitoring | offen |
| W-015 | Hinweis | lokale Refs `refs/agents/*/checkpoints/*` | Agenten-Checkpoints speichern Arbeitsbaum-Stände als Commits (aktuell geprüft: frei von Secrets, nicht auf `origin`). Ein `git push --mirror`/`--all` würde sie veröffentlichen; nicht ignorierte Secret-Dateien gelangen so in die Objektdatenbank. | `git for-each-ref refs/agents`. | Nie `--mirror`/`--all` pushen; Secret-Dateien stets ignorieren (W-008); Refs bei Bedarf aufräumen. | Main | offen |
| W-016 | mittel | `saas/app/(app)/layout.tsx`, `saas/app/page.tsx` | App-Shell prüft keine Sitzung; `/` leitet nach `/dashboard`. Aktuell sind die Seiten Platzhalter, daher kein konkreter PII-Abfluss belegt. Vor echten Nutzer- oder Mandantendaten wären die Routen ungeschützt. | Serverseitige Sitzungskontrolle und Rollenprüfung vor geschützten Seiten und Aktionen einbauen; RLS als zweite Schutzschicht erhalten. | Supabase/DB/Auth | offen |
| W-017 | Hinweis | `saas/supabase/tests/database/000_setup.test.sql` | Der pgTAP-Test prüft aktiviertes RLS, aber keine Policies, Mandanten-/Besitzprädikate, `WITH CHECK` oder `security_invoker`-Views. Zu offene Policies könnten trotz grünem Test bestehen. | Mit den ersten Migrationen Policy- und View-Prüfungen sowie mandantenübergreifende Negativtests ergänzen. | Supabase/DB/Auth | offen |

**Positiv bestätigt:** kein Secret im Repo/Historie, kein Prod-Bezug in Code/Konfiguration, MCP read-only und projektgebunden, Sentry ohne Auth-Token und ohne Source-Map-Upload, `SUPABASE_SECRET_KEY` nicht öffentlich, Pakete exakt gepinnt (außer `@types/*`, `eslint`, `typescript` mit `^`).

**20-Punkte-Triage (`defensive-appsec-triage`):** im aktuellen Stand gibt es noch keine Auth-, API-, Upload-, Token- oder DB-Logik. Alle 20 Punkte sind „im geprüften Umfang nicht zutreffend“ oder „extern/unbekannt“ (HTTP/2, Request Smuggling, Cache, `X-Forwarded-For`: Vercel-verwaltet; RLS-Views: noch keine Migrationen). Nr. 7 (ReDoS) nur als Abhängigkeit (W-006). Vollständige Triage im Phasen-Gate 1.

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
2. Nutzer: DB-Passwort des Dev-Projekts im Dashboard zurücksetzen und `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`, `DATABASE_URL`, `DIRECT_URL`, `NEXT_PUBLIC_SENTRY_DSN` des **Dev-Projekts** in `saas/.env.local` eintragen. **Stand 25.11.:** alle sechs Variablen gesetzt, Dev-Ref, keine Platzhalter (Werte nicht gelesen); Verbindung noch ungetestet; `sslmode` fehlt (W-007).
3. Nutzer: Secret Scanning und Push Protection aktivieren.
4. Sitzung neu laden, damit die Supabase-Skills geladen werden.

**Risiken**
- Prisma + Supabase: Pooler (Transaction-Modus, Port 6543) erfordert `pgbouncer=true`/keine Prepared Statements; RLS-Extension erzeugt Overhead je Abfrage (Transaktion + `set_config`) → Messung in Phase 1. Realtime, Storage und Auth laufen weiterhin über supabase-js.
- Vorlagen stammen von einem Drittanbieter (Urheber-/Markenrecht) → nur Inspiration, eigenes Branding.
- Rastererkennung (PNG/JPG) von Wänden ist ungenau → immer nur Vorschlag, manuelles Zeichnen bleibt Hauptweg.
- `cacheComponents: true` (Next 16) + cookie-basierte Supabase-Session erfordert saubere Trennung statischer/dynamischer Teile (Suspense-Grenzen).
- Datenschutz Live-Belegung: Realtime über `postgres_changes` würde wegen RLS fremde Buchungen nicht liefern bzw. bei zu offener Policy Personen preisgeben → Broadcast ohne Personenbezug (siehe ARCHITECTURE.md).
