import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { CORE_ROUTES, gotoOrFixme } from "./support/routes";

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"];

for (const path of CORE_ROUTES) {
  test(`${path} hat keine axe-Verstöße (WCAG 2.1 A/AA)`, async ({ page }) => {
    test.setTimeout(60_000);
    await gotoOrFixme(page, path);
    await expect(page.getByRole("main")).toBeVisible();

    const results = await new AxeBuilder({ page })
      .withTags(WCAG_TAGS)
      // Dev-Overlay von `next dev`, nicht Teil der App.
      .exclude("nextjs-portal")
      .analyze();

    const summary = results.violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      help: violation.help,
      targets: violation.nodes.map((node) => node.target.join(" ")),
    }));

    expect(summary, `axe-Verstöße auf ${path}`).toEqual([]);
  });
}
