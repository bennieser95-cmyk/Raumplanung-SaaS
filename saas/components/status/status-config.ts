import {
  Ban,
  CircleCheck,
  CircleUserRound,
  CircleX,
  Star,
  TriangleAlert,
  Wrench,
  type LucideIcon,
} from "lucide-react"

/** Status eines Arbeitsplatzes oder Raums (Grundriss, Kalender). */
export type SpaceStatus =
  | "free"
  | "occupied"
  | "unavailable"
  | "mine"
  | "maintenance"

/** Zustand eines Systemdienstes (Systemstatus-Seite, Phase 4). */
export type SystemStatus = "ok" | "degraded" | "down"

export type StatusDefinition = {
  label: string
  description: string
  icon: LucideIcon
  /** Badge: getönte Fläche, dunkler Text, farbiger Rahmen */
  badgeClassName: string
  /** Farbfeld für Legenden und Grundriss-Flächen */
  swatchClassName: string
}

// Reihenfolge entspricht der Legende im Grundriss.
export const spaceStatusOrder: SpaceStatus[] = [
  "free",
  "occupied",
  "mine",
  "unavailable",
  "maintenance",
]

export const spaceStatus: Record<SpaceStatus, StatusDefinition> = {
  free: {
    label: "Frei",
    description: "Kann gebucht werden",
    icon: CircleCheck,
    badgeClassName:
      "bg-status-free-subtle text-status-free-foreground border-status-free/40",
    swatchClassName: "bg-status-free",
  },
  occupied: {
    label: "Belegt",
    description: "Von einer anderen Person gebucht",
    icon: CircleUserRound,
    badgeClassName:
      "bg-status-occupied-subtle text-status-occupied-foreground border-status-occupied/40",
    swatchClassName: "bg-status-occupied",
  },
  mine: {
    label: "Meine Buchung",
    description: "Von Ihnen gebucht",
    icon: Star,
    badgeClassName:
      "bg-status-mine-subtle text-status-mine-foreground border-status-mine/40",
    swatchClassName: "bg-status-mine",
  },
  unavailable: {
    label: "Nicht verfügbar",
    description: "Gesperrt oder nicht buchbar",
    icon: Ban,
    badgeClassName:
      "bg-status-unavailable-subtle text-status-unavailable-foreground border-status-unavailable/40",
    swatchClassName: "bg-status-unavailable",
  },
  maintenance: {
    label: "Reinigung / außer Betrieb",
    description: "Vorübergehend nicht nutzbar",
    icon: Wrench,
    badgeClassName:
      "bg-status-maintenance-subtle bg-maintenance-pattern text-status-maintenance-foreground border-status-maintenance/40",
    swatchClassName:
      "bg-status-maintenance [background-image:repeating-linear-gradient(135deg,transparent_0_3px,rgb(255_255_255/0.45)_3px_6px)]",
  },
}

export const systemStatus: Record<SystemStatus, StatusDefinition> = {
  ok: {
    label: "Betriebsbereit",
    description: "Alle Prüfungen erfolgreich",
    icon: CircleCheck,
    badgeClassName:
      "bg-system-ok-subtle text-system-ok-foreground border-system-ok/40",
    swatchClassName: "bg-system-ok",
  },
  degraded: {
    label: "Eingeschränkt",
    description: "Teilweise gestört oder verlangsamt",
    icon: TriangleAlert,
    badgeClassName:
      "bg-system-degraded-subtle text-system-degraded-foreground border-system-degraded/40",
    swatchClassName: "bg-system-degraded",
  },
  down: {
    label: "Ausgefallen",
    description: "Dienst nicht erreichbar",
    icon: CircleX,
    badgeClassName:
      "bg-system-down-subtle text-system-down-foreground border-system-down/40",
    swatchClassName: "bg-system-down",
  },
}
