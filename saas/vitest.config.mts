import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { configDefaults, defineConfig } from "vitest/config";

// Kalender- und Buchungslogik wird gegen Europe/Berlin (inkl. Sommerzeit) getestet.
// Früh setzen, damit auch die Test-Worker die Zeitzone erben.
const TEST_TIME_ZONE = "Europe/Berlin";
process.env.TZ = TEST_TIME_ZONE;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: fileURLToPath(new URL("./", import.meta.url)),
      },
    ],
  },
  test: {
    // Standard: jsdom für Komponenten. Reine Logik kann per Datei-Kommentar
    // `// @vitest-environment node` auf Node umstellen.
    environment: "jsdom",
    env: { TZ: TEST_TIME_ZONE },
    setupFiles: ["./vitest.setup.ts"],
    include: [
      "lib/**/*.test.{ts,tsx}",
      "components/**/*.test.{ts,tsx}",
      "app/**/*.test.{ts,tsx}",
      "tests/unit/**/*.test.{ts,tsx}",
    ],
    exclude: [
      ...configDefaults.exclude,
      "tests/e2e/**",
      "**/node_modules/**",
      ".next/**",
      "app/generated/**",
      "supabase/**",
    ],
    restoreMocks: true,
    unstubEnvs: true,
  },
});
