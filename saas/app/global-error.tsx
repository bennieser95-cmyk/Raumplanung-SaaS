"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="de">
      <body>
        <main>
          <h2>Etwas ist schiefgelaufen.</h2>
          <p>Die Seite konnte nicht geladen werden.</p>
          <button type="button" onClick={() => retry()}>
            Erneut versuchen
          </button>
        </main>
      </body>
    </html>
  );
}
