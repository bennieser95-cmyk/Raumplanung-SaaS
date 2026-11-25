"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Brand } from "./brand"
import { ActiveNavList } from "./sidebar-nav"

/** Navigation als Drawer für Bildschirme unter 768 px. */
export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className="md:hidden"
          aria-label="Menü öffnen"
        >
          <Menu aria-hidden="true" className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-72 max-w-[85vw] gap-0 border-sidebar-border bg-sidebar text-sidebar-foreground [--ring:var(--sidebar-ring)] [&_[data-slot=sheet-close]]:text-sidebar-foreground [&_[data-slot=sheet-close]:hover]:bg-sidebar-accent [&_[data-slot=sheet-close]:hover]:text-sidebar-foreground"
      >
        <SheetHeader className="h-topbar justify-center px-5">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Hauptnavigation der Anwendung
          </SheetDescription>
          <Brand onNavigate={() => setOpen(false)} />
        </SheetHeader>
        <nav aria-label="Hauptnavigation" className="overflow-y-auto px-4 py-4">
          <ActiveNavList variant="full" onNavigate={() => setOpen(false)} />
        </nav>
      </SheetContent>
    </Sheet>
  )
}
