This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Sentry tracing and conversations

Sentry targets the existing `benjamin-9p/raumplanung-saas` project. The public
DSN and shared collection options live in `sentry.common.ts`. Browser, Node.js,
and Edge SDKs initialize separately through the Next.js instrumentation files.
Tracing samples 100% in development and 10% otherwise. A dropped root trace
also drops its AI spans; adjust production sampling to your traffic and budget.
Source-map uploads are disabled; no authentication token is needed to run or build.

The installed Sentry 11 SDK automatically instruments supported server-side AI
SDKs. Do not add a second AI exporter or duplicate integrations. This starter has
no AI SDK or chat handler yet, so it does not produce real agent conversations.

When adding a handler that makes AI calls, set the conversation ID **before**
those calls, on every request:

```typescript
import * as Sentry from "@sentry/nextjs";

// Use the chat's existing, validated opaque ID, not a new ID for each message.
Sentry.setConversationId(chat.id);
// Make the supported AI SDK call here, in the same request isolation scope.
```

Reuse the ID across all turns, even across separate traces. Use a short UUID or
alphanumeric ID with dashes/underscores, never an email or URL. Do not set a
global conversation ID during SDK initialization, which could group unrelated
users together.

AI inputs and outputs are enabled for **non-sensitive content only**. This
includes system instructions, tool arguments, and tool results, not just chat
messages. Before adding AI calls, ensure those values contain no credentials,
confidential source, or personal data; redact at the application boundary.
Sentry's default server scrubbers are not a substitute for that policy. To
disable content collection, set `dataCollection.genAI.inputs` and `outputs` to
`false` in `sentry.common.ts`; metadata such as tokens and timing remains, but
conversation transcripts and generated titles will be unavailable.
Automatic user info, HTTP bodies, headers, cookies, URL query values, source
context lines, and stack-frame variable collection are disabled.

Verify with a non-sensitive test conversation once a handler exists: send two
turns with the same chat ID, then check **Explore > Agents > Conversations** in
Sentry for one conversation containing both turns. Supported integrations supply
message and token attributes. Manual spans must use the
[GenAI conventions](https://docs.sentry.io/platforms/javascript/guides/nextjs/agent-tracing/manual-instrumentation/)
and OTEL-shaped user messages for titles.

- [Next.js Agent Tracing](https://docs.sentry.io/platforms/javascript/guides/nextjs/agent-tracing/)
- [Conversations](https://docs.sentry.io/product/agents/conversations/)
- [AI data privacy](https://docs.sentry.io/product/agents/privacy/)

### GitHub Copilot plugin

The official [Sentry Copilot plugin](https://github.com/getsentry/plugin-copilot)
provides debugging skills and the hosted Sentry MCP server. Install it for your
own account:

```bash
copilot plugin marketplace add getsentry/plugin-copilot
copilot plugin install sentry@sentry-copilot-marketplace
copilot plugin list
```

VS Code discovers plugins installed through Copilot CLI; this workspace enables
`chat.plugins.enabled`. Restart Copilot/VS Code to load the plugin and approve
Sentry's OAuth sign-in when prompted. Then ask Copilot to find recent issues in
`benjamin-9p/raumplanung-saas`. No token belongs in the repository.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
