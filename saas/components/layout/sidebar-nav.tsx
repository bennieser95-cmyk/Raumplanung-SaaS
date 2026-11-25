"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

import { isActivePath, mainNav, type NavItem } from "./nav-config"

export type NavVariant = "full" | "rail"

type NavListProps = {
  variant: NavVariant
  pathname: string | null
  onNavigate?: () => void
}

/** Navigationsliste ohne eigenen Zustand; der aktive Pfad wird übergeben. */
export function NavList({ variant, pathname, onNavigate }: NavListProps) {
  return (
    <ul
      className={cn(
        "flex flex-col gap-1",
        variant === "rail" && "items-center"
      )}
    >
      {mainNav.map((item) => (
        <li key={item.href}>
          {variant === "rail" ? (
            <RailLink
              item={item}
              active={isActivePath(pathname, item.href)}
              onNavigate={onNavigate}
            />
          ) : (
            <FullLink
              item={item}
              active={isActivePath(pathname, item.href)}
              onNavigate={onNavigate}
            />
          )}
        </li>
      ))}
    </ul>
  )
}

/** Liest den aktuellen Pfad; in der App-Shell von <Suspense> umschlossen. */
export function ActiveNavList(props: Omit<NavListProps, "pathname">) {
  const pathname = usePathname()
  return <NavList {...props} pathname={pathname} />
}

type LinkProps = {
  item: NavItem
  active: boolean
  onNavigate?: () => void
}

const baseLink =
  "relative flex items-center text-sm font-medium transition-colors text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
const activeLink =
  "bg-primary-gradient text-sidebar-primary-foreground shadow-pill hover:bg-transparent hover:text-sidebar-primary-foreground"

function FullLink({ item, active, onNavigate }: LinkProps) {
  const Icon = item.icon
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      onNavigate={onNavigate}
      className={cn(
        baseLink,
        "min-h-11 gap-3 rounded-full px-4 py-2",
        active && activeLink
      )}
    >
      <Icon aria-hidden="true" className="size-5 shrink-0" />
      <span className="truncate">{item.label}</span>
      {item.badge ? (
        <span className="ml-auto inline-flex min-w-6 items-center justify-center rounded-full bg-notification px-1.5 py-0.5 text-xs font-semibold text-notification-foreground">
          {item.badge}
          <span className="sr-only"> ungelesen</span>
        </span>
      ) : null}
    </Link>
  )
}

function RailLink({ item, active, onNavigate }: LinkProps) {
  const Icon = item.icon
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          onNavigate={onNavigate}
          className={cn(
            baseLink,
            "size-11 justify-center rounded-full",
            active && activeLink
          )}
        >
          <Icon aria-hidden="true" className="size-5" />
          <span className="sr-only">{item.label}</span>
          {item.badge ? (
            <span className="absolute -top-0.5 -right-0.5 inline-flex min-w-5 items-center justify-center rounded-full bg-notification px-1 text-[0.6875rem] leading-5 font-semibold text-notification-foreground ring-2 ring-sidebar">
              {item.badge}
              <span className="sr-only"> ungelesen</span>
            </span>
          ) : null}
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={8}>
        {item.label}
      </TooltipContent>
    </Tooltip>
  )
}
