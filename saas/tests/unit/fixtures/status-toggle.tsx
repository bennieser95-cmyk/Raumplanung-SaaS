"use client";

import { useState } from "react";

type StatusToggleProps = {
  label: string;
  initialAvailable?: boolean;
};

/** Test-Fixture: verifiziert jsdom, React-State und jest-dom-Matcher. Keine Produktivkomponente. */
export function StatusToggle({ label, initialAvailable = true }: StatusToggleProps) {
  const [available, setAvailable] = useState(initialAvailable);
  const statusText = available ? "Frei" : "Belegt";

  return (
    <section aria-label={label}>
      <p role="status">
        {label}: {statusText}
      </p>
      <button
        type="button"
        aria-pressed={!available}
        onClick={() => setAvailable((value) => !value)}
      >
        {available ? "Als belegt markieren" : "Als frei markieren"}
      </button>
    </section>
  );
}
