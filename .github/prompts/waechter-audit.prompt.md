---
name: waechter-audit
description: Startet ein Wächter-Audit (Schnellprüfung, Phasen-Gate oder Abschluss-Audit) für das Projekt „Raumplanung“
argument-hint: "[Modus: schnell | gate | abschluss] [Umfang: z. B. Phase 1, Pfad, Issue #]"
agent: waechter
---

Starte ein Audit als **Wächter** gemäß deiner Agent-Definition (`.github/agents/waechter.agent.md`). Antworte auf Deutsch.

## 1. Modus und Umfang klären

Wenn in der Eingabe Modus oder Umfang fehlen, **frage zuerst nach** und beginne erst nach der Antwort:

1. **Modus**
   - `schnell` – Schnellprüfung der geänderten und neuen Dateien
   - `gate` – Phasen-Gate (Vollprüfung vor Phasenabschluss)
   - `abschluss` – Abschluss-Audit vor Go-live
2. **Umfang** – z. B. Phase (0–6), Pfade/Dateien, Issue- oder PR-Nummer, Commit-Bereich (`<von>..<bis>`).
3. **Optional** – Schwerpunkte (z. B. RLS, Kalender, Uploads, 3D, Sentry) und ob Supabase-Advisors des Entwicklungsprojekts abgefragt werden sollen.

Fasse Modus und Umfang in einem Satz zusammen, bevor du prüfst.

## 2. Vorbereitung

- Lies `docs/ARCHITECTURE.md` und Abschnitt 5 von `docs/PROGRESS.md` (bestehende Befunde und nächste freie ID).
- Lade die Skills `defensive-appsec-triage`, `supabase` und `supabase-postgres-best-practices`.
- Lies `saas/AGENTS.md` und die betroffenen Next-16-Dokus in `saas/node_modules/next/dist/docs/`.
- Supabase-MCP nur für das Entwicklungsprojekt und nur lesend. Nie das Produktivprojekt.

## 3. Prüfung je Modus

**Schnellprüfung**
- `git status`, `git diff` (bzw. angegebener Commit-Bereich): jede geänderte Datei gegen den Prüfumfang.
- Secret-Muster in geänderten Dateien und neuen Commits (nur Fundstellen melden).
- Ignore-Status von `.env*`, `Credentials.txt`, generiertem Code (`git check-ignore -v`).
- `bun run lint` und `bunx tsc --noEmit` im Ordner `saas`.

**Phasen-Gate** (zusätzlich)
- Alle 20 Punkte aus `defensive-appsec-triage` mit Status und Beleg.
- RLS/Policies/Views/Funktionen, Indizes und Supabase Advisors (Security + Performance).
- `bun audit`, Lizenzen neuer Pakete, `bun run build`, vorhandene Tests (Vitest, pgTAP, Playwright).
- Datenschutz: Sentry-`dataCollection`, Logs, Healthchecks, Kalender/ICS, Exporte.

**Abschluss-Audit** (zusätzlich)
- Gesamte Git-Historie auf Secrets, Header/CSP/Cookies im Build, Pentest der Test-/Staging-Umgebung (Strix-Skills), Verifikation aller offenen Befunde.

## 4. Ergebnis

1. Trage einen Bericht „Wächter-Bericht <n> – <Modus> (<Datum>)“ in `docs/PROGRESS.md`, **nur Abschnitt 5**, ein: Umfang, ausgeführte Prüfungen mit tatsächlichem Ergebnis, Gesamturteil (freigegeben / mit Auflagen / blockiert), Befundtabelle im Format der Agent-Definition. Bestehende Befunde im Status aktualisieren.
2. Antworte im Chat mit:
   - Gesamturteil und Begründung,
   - Befundliste (ID, Schwere, Fundstelle, Kurzbeschreibung, Fix-Vorschlag, zuständiger Agent),
   - offenen Punkten und Fragen an den Main Agent,
   - Vorschlägen für Folge-Issues (nicht selbst anlegen).

> Hinweis: Prompt-Dateien laufen laut VS-Code-Doku nur in der **Local**-Harness (abgekündigt bis Februar 2027). In der Copilot-Harness den Agenten `waechter` direkt auswählen und Modus/Umfang nennen.

Keine Secret-Werte ausgeben. Kein `git add`, `commit` oder `push`. Produktivcode nur bei trivialen, eindeutigen Fixes ändern und diese dokumentieren.
