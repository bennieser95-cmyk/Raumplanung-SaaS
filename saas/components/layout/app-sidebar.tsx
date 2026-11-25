import { Suspense } from "react"

import { TooltipProvider } from "@/components/ui/tooltip"

import { Brand } from "./brand"
import { ActiveNavList, NavList } from "./sidebar-nav"

/**
 * Seitenleiste für Tablet (≥ 768 px, schmale Icon-Leiste mit Tooltips)
 * und Desktop (≥ 1024 px, volle Breite mit Beschriftung).
 * Auf Mobilgeräten übernimmt die MobileNav (Sheet) die Navigation.
 */
export function AppSidebar() {
  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-sidebar-rail flex-col bg-sidebar text-sidebar-foreground [--ring:var(--sidebar-ring)] md:flex lg:w-sidebar">
        <div className="flex h-topbar shrink-0 items-center justify-center px-3 lg:justify-start lg:px-6">
          <Brand labelClassName="sr-only lg:not-sr-only" />
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 lg:px-4">
          <nav aria-label="Hauptnavigation" className="lg:hidden">
            <Suspense fallback={<NavList variant="rail" pathname={null} />}>
              <ActiveNavList variant="rail" />
            </Suspense>
          </nav>
          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <Suspense fallback={<NavList variant="full" pathname={null} />}>
              <ActiveNavList variant="full" />
            </Suspense>
          </nav>
        </div>

        <p className="hidden px-6 py-4 text-xs text-sidebar-muted lg:block">
          Version 0.1 · Vorschau
        </p>
      </aside>
    </TooltipProvider>
  )
}
