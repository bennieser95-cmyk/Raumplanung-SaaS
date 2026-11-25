import Link from "next/link"
import { LayoutGrid } from "lucide-react"

import { cn } from "@/lib/utils"

type BrandProps = {
  className?: string
  /** Klassen für den Schriftzug, z. B. um ihn in der Icon-Leiste auszublenden */
  labelClassName?: string
  onNavigate?: () => void
}

export function Brand({ className, labelClassName, onNavigate }: BrandProps) {
  return (
    <Link
      href="/dashboard"
      onNavigate={onNavigate}
      className={cn(
        "flex items-center gap-3 rounded-lg text-sidebar-foreground",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="bg-primary-gradient flex size-9 shrink-0 items-center justify-center rounded-lg shadow-pill"
      >
        <LayoutGrid className="size-5" />
      </span>
      <span className={cn("text-lg font-bold tracking-tight", labelClassName)}>
        Raumplanung
      </span>
    </Link>
  )
}
