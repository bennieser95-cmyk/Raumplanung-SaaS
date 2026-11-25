import { test, type Page } from "@playwright/test";

/** Seiten, die alle E2E-Basistests abdecken. Neue Hauptrouten hier ergänzen. */
export const CORE_ROUTES = [
  "/",
  "/dashboard",
  "/buchen",
  "/meine-buchungen",
  "/kalender",
  "/mitarbeiter",
  "/berichte",
  "/buero-verwalten",
  "/einstellungen",
  "/benachrichtigungen",
  "/hilfe",
] as const;

/**
 * Öffnet eine Route. Existiert sie noch nicht (404), wird der Test als `fixme`
 * markiert statt still zu bestehen: Die Seiten entstehen parallel im Layout-Issue.
 */
export async function gotoOrFixme(page: Page, path: string) {
  const response = await page.goto(path, { waitUntil: "load" });
  if (!response) {
    throw new Error(`Keine HTTP-Antwort für ${path}`);
  }

  test.fixme(
    response.status() === 404,
    `Route ${path} existiert noch nicht (404).`,
  );

  return response;
}
