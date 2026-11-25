"use client"

import Link from "next/link"
import { CalendarRange, ChevronDown, LifeBuoy, LogOut, UserRound } from "lucide-react"
import { toast } from "sonner"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { placeholderUser } from "./nav-config"

export function LocationSelect() {
  return (
    <Select defaultValue="alle">
      <SelectTrigger
        aria-label="Alle Standorte auswählen"
        className="h-10 w-full min-w-0 bg-card sm:w-48"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="alle">Alle Standorte</SelectItem>
        <SelectItem value="platzhalter" disabled>
          Standorte folgen in Phase 4
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export function DateRangeButton() {
  return (
    <Button
      variant="outline"
      className="h-10 w-full justify-start bg-card sm:w-auto"
      onClick={() =>
        toast.info("Zeitraumauswahl folgt", {
          description: "Die Auswahl des Datumsbereichs wird in Phase 3 umgesetzt.",
        })
      }
    >
      <CalendarRange aria-hidden="true" />
      <span>
        <span className="sr-only">Zeitraum: </span>Diese Woche
      </span>
    </Button>
  )
}

export function UserMenu() {
  const user = placeholderUser
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-11 gap-2 rounded-full px-1.5 lg:pr-3"
        >
          <Avatar size="lg">
            <AvatarFallback className="bg-accent font-semibold text-primary">
              {user.initials}
            </AvatarFallback>
          </Avatar>
          <span className="hidden flex-col items-start leading-tight lg:flex">
            <span className="text-sm font-semibold text-heading">
              {user.name}
            </span>
            <span className="text-xs text-muted-foreground">{user.role}</span>
          </span>
          <span className="sr-only">
            Benutzermenü für {user.name}, {user.role}
          </span>
          <ChevronDown
            aria-hidden="true"
            className="hidden text-muted-foreground lg:block"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuLabel className="text-sm">
          <span className="block font-semibold text-heading">{user.name}</span>
          <span className="block font-normal">{user.role}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/einstellungen">
            <UserRound aria-hidden="true" />
            Profil &amp; Einstellungen
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/hilfe">
            <LifeBuoy aria-hidden="true" />
            Hilfe &amp; Support
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          <LogOut aria-hidden="true" />
          Abmelden (folgt mit der Anmeldung)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
