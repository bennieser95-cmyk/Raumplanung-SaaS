import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Zusätzlich zur Config, falls Tests ohne vitest.config.mts gestartet werden.
process.env.TZ = "Europe/Berlin";

afterEach(() => {
  cleanup();
});
