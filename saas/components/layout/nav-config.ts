import {
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  CalendarCheck,
  LayoutDashboard,
  LifeBuoy,
  MapPin,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react"

export type NavItem = {
  href: string
  label: string
  icon: LucideIcon
  /** Zähler, z. B. ungelesene Benachrichtigungen (Platzhalter bis Phase 3) */
  badge?: number
}

/** Platzhalterzahl, bis Benachrichtigungen aus der Datenbank kommen. */
export const PLACEHOLDER_UNREAD_COUNT = 3

export const mainNav: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/buchen", label: "Platz buchen", icon: MapPin },
  { href: "/meine-buchungen", label: "Meine Buchungen", icon: CalendarCheck },
  { href: "/kalender", label: "Kalender", icon: CalendarDays },
  { href: "/mitarbeiter", label: "Mitarbeiter", icon: Users },
  { href: "/berichte", label: "Berichte & Analysen", icon: BarChart3 },
  { href: "/buero-verwalten", label: "Büro verwalten", icon: Building2 },
  { href: "/einstellungen", label: "Einstellungen", icon: Settings },
  {
    href: "/benachrichtigungen",
    label: "Benachrichtigungen",
    icon: Bell,
    badge: PLACEHOLDER_UNREAD_COUNT,
  },
  { href: "/hilfe", label: "Hilfe & Support", icon: LifeBuoy },
]

export function isActivePath(pathname: string | null, href: string): boolean {
  if (!pathname) return false
  return pathname === href || pathname.startsWith(`${href}/`)
}

/** Platzhalter-Nutzer, bis die Anmeldung (Issue #6) echte Daten liefert. */
export const placeholderUser = {
  name: "Max Mustermann",
  firstName: "Max",
  initials: "MM",
  role: "Administrator",
}
