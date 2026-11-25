# Tests

Kurzanleitung für alle Testebenen der Raumplanung. Alle Befehle im Ordner `saas/` ausführen.

## Voraussetzungen

- Bun (siehe `packageManager` in `package.json`), Abhängigkeiten per `bun install`.
- Für E2E einmalig den Browser installieren (landet im Benutzer-Cache, nicht im Repo):
  `bunx playwright install chromium`
- Für pgTAP: Docker läuft und die lokale Supabase-Instanz ist gestartet (`bun run db:start`, prüfen mit `bun run db:status`).

## Ausführen

| Ebene | Befehl | Ort |
| --- | --- | --- |
| Unit- und Komponententests (Vitest, Testing Library, jsdom) | `bun run test` (Watch: `bun run test:watch`) | `lib/`, `components/`, `app/`, `tests/unit/` |
| E2E inkl. Responsive (Playwright) | `bun run test:e2e` | `tests/e2e/` |
| Barrierefreiheit (axe, WCAG 2.1 A/AA) | `bun run test:e2e -- tests/e2e/a11y.spec.ts` | `tests/e2e/a11y.spec.ts` |
| Datenbank und RLS (pgTAP) | `bun run db:test` | `supabase/tests/database/` |

Hinweise zu E2E:

- Lokal nutzt Playwright einen laufenden Server auf Port 3000 oder startet `bun run dev`. Mit `CI=1` wird `bun run build && bun run start` verwendet.
- Projekte: `desktop-chromium` (1280×800), `tablet-chromium` (768×1024), `mobile-chromium` (360×740). Einzeln z. B. mit `bun run test:e2e -- --project=mobile-chromium`.
- Bericht: `bunx playwright show-report` (Ordner `playwright-report/`). Traces und Screenshots entstehen nur bei Fehlern in `test-results/`. Beide Ordner werden nicht committet.
- Routen, die noch nicht existieren (404), werden als `fixme` gemeldet und nicht als bestanden.

## Konventionen

- Dateinamen: `*.test.ts` / `*.test.tsx` für Vitest (neben dem Code oder unter `tests/unit/`), `*.spec.ts` für Playwright unter `tests/e2e/`, `NNN_name.test.sql` für pgTAP unter `supabase/tests/database/`.
- Test-Funktionen explizit importieren (`import { describe, expect, it } from "vitest"`), keine Globals.
- Standardumgebung ist `jsdom`. Reine Logik kann mit `// @vitest-environment node` in der ersten Zeile auf Node umstellen.
- Zeitzone ist in allen Ebenen fest `Europe/Berlin` (Vitest über `TZ`, Playwright über `timezoneId`), Locale in E2E `de-DE`. Kalendertests decken Sommerzeit-Tage ab (z. B. 29.03.2026 mit 23 h, 25.10.2026 mit 25 h).
- Selektoren in E2E über Rollen und Landmarks (`getByRole("main")`), nicht über CSS-Klassen.
- pgTAP-Dateien laufen in `begin; … rollback;`. `000_setup.test.sql` prüft dauerhaft, dass jede Tabelle in `public` RLS aktiviert hat, und darf nicht entfernt werden.
- Testdaten: nur erfundene Daten (z. B. „Raum 1.01“, `user1@example.test`), keine echten Personendaten und niemals Produktivdaten oder Produktiv-Zugangsdaten.
