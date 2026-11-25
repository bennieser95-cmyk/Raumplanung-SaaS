import type { LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

type EmptyStateProps = {
  icon: LucideIcon
  title: string
  description: string
  /** Projektphase, in der die Seite umgesetzt wird, z. B. „Phase 3“ */
  phase: string
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  phase,
}: EmptyStateProps) {
  return (
    <section
      aria-labelledby="leerzustand-titel"
      className="flex flex-col items-center rounded-xl border border-dashed border-input/60 bg-card px-6 py-12 text-center shadow-card sm:py-16"
    >
      <span
        aria-hidden="true"
        className="flex size-14 items-center justify-center rounded-2xl bg-accent text-primary"
      >
        <Icon className="size-7" />
      </span>
      <h2
        id="leerzustand-titel"
        className="mt-5 text-lg font-semibold sm:text-xl"
      >
        {title}
      </h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>
      <Badge
        variant="outline"
        className="mt-5 h-auto px-3 py-1 text-sm whitespace-normal"
      >
        Diese Seite wird in {phase} umgesetzt
      </Badge>
    </section>
  )
}
