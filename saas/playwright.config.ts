import { defineConfig, devices } from "@playwright/test";

const PORT = 3000;
const baseURL = `http://localhost:${PORT}`;
const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: [["list"], ["html", { outputFolder: "playwright-report", open: "never" }]],
  outputDir: "test-results",
  use: {
    baseURL,
    locale: "de-DE",
    timezoneId: "Europe/Berlin",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "off",
  },
  projects: [
    {
      name: "desktop-chromium",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1280, height: 800 } },
    },
    {
      name: "tablet-chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 768, height: 1024 },
        hasTouch: true,
      },
    },
    {
      name: "mobile-chromium",
      use: { ...devices["Pixel 5"], viewport: { width: 360, height: 740 } },
    },
    // Später aktivieren (Browser vorher installieren: bunx playwright install firefox webkit):
    // {
    //   name: "desktop-firefox",
    //   use: { ...devices["Desktop Firefox"], viewport: { width: 1280, height: 800 } },
    // },
    // {
    //   name: "desktop-webkit",
    //   use: { ...devices["Desktop Safari"], viewport: { width: 1280, height: 800 } },
    // },
    // {
    //   name: "mobile-webkit",
    //   use: { ...devices["iPhone 13"] },
    // },
  ],
  webServer: {
    // CI testet den Produktions-Build, lokal wird ein laufender Dev-Server wiederverwendet.
    command: isCI ? "bun run build && bun run start" : "bun run dev",
    url: baseURL,
    reuseExistingServer: !isCI,
    timeout: 300_000,
    stdout: "ignore",
    stderr: "pipe",
  },
});
