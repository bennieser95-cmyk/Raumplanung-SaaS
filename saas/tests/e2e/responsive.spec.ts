import { expect, test } from "@playwright/test";
import { CORE_ROUTES, gotoOrFixme } from "./support/routes";

// Läuft in jedem Playwright-Projekt, also für Desktop (1280), Tablet (768) und Mobil (360).
for (const path of CORE_ROUTES) {
  test(`${path} scrollt nicht horizontal`, async ({ page }) => {
    await gotoOrFixme(page, path);
    await expect(page.getByRole("main")).toBeVisible();

    const { scrollWidth, innerWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
    }));

    expect(scrollWidth, `scrollWidth bei Viewport-Breite ${innerWidth}px`).toBeLessThanOrEqual(
      innerWidth,
    );
  });
}
