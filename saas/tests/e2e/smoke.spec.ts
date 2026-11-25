import { expect, test } from "@playwright/test";
import { CORE_ROUTES, gotoOrFixme } from "./support/routes";

for (const path of CORE_ROUTES) {
  test(`${path} lädt ohne Fehlerstatus, ist deutschsprachig und hat einen Hauptbereich`, async ({
    page,
  }) => {
    const response = await gotoOrFixme(page, path);

    expect(response.status(), `HTTP-Status für ${path}`).toBeLessThan(400);
    await expect(page.locator("html")).toHaveAttribute("lang", "de");
    await expect(page.getByRole("main")).toBeVisible();
  });
}
