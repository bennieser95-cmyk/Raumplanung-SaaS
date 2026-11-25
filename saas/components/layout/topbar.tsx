import Link from "next/link"
import { Bell } from "lucide-react"

import { MobileNav } from "./mobile-nav"
import { PLACEHOLDER_UNREAD_COUNT, placeholderUser } from "./nav-config"
import { DateRangeButton, LocationSelect, UserMenu } from "./topbar-controls"

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex max-w-content flex-wrap items-center gap-x-3 gap-y-3 px-4 py-3 sm:px-6 lg:px-8">
        <MobileNav />

        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-bold text-heading sm:text-lg">
            Willkommen zurück, {placeholderUser.firstName}!
          </p>
          <p className="hidden truncate text-sm text-muted-foreground sm:block">
            Überblick über Arbeitsplätze und Räume
          </p>
        </div>

        <div className="order-last grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto md:order-none">
          <LocationSelect />
          <DateRangeButton />
        </div>

        <div className="flex items-center gap-1">
          <Link
            href="/benachrichtigungen"
            className="relative inline-flex size-11 items-center justify-center rounded-full text-heading transition-colors hover:bg-muted"
          >
            <Bell aria-hidden="true" className="size-5" />
            <span className="sr-only">
              Benachrichtigungen, {PLACEHOLDER_UNREAD_COUNT} ungelesen
            </span>
            <span
              aria-hidden="true"
              className="absolute top-1 right-1 inline-flex min-w-5 items-center justify-center rounded-full bg-notification px-1 text-[0.6875rem] leading-5 font-semibold text-notification-foreground ring-2 ring-background"
            >
              {PLACEHOLDER_UNREAD_COUNT}
            </span>
          </Link>
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
