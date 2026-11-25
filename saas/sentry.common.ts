import type { NodeOptions } from "@sentry/nextjs";

export const sentryOptions = {
  dsn: "https://ec21540f36825da848fa91f701f4108e@o4512493157416960.ingest.de.sentry.io/4512493168296016",
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1 : 0.1,
  dataCollection: {
    userInfo: false,
    httpBodies: [],
    httpHeaders: false,
    cookies: false,
    urlQueryParams: false,
    frameContextLines: 0,
    stackFrameVariables: false,
    // Datensparsamkeit (DSGVO): keine Abfrageparameter, Queue-Argumente, GraphQL-/MCP- oder KI-Inhalte senden.
    databaseQueryData: false,
    queues: false,
    graphQL: { document: false, variables: false },
    mcp: { inputs: false, outputs: false },
    genAI: { inputs: false, outputs: false },
  },
} satisfies NodeOptions;