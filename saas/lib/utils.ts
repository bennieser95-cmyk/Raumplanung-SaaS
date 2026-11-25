export { cn } from "cn"

const LOCALE = "de-DE"
const TIME_ZONE = "Europe/Berlin"

/** Zahl im deutschen Format, z. B. 1.234,5 */
export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(LOCALE, options).format(value)
}

/** Prozentwert aus einer Zahl (12.4 → „12,4 %“) */
export function formatPercent(value: number, fractionDigits = 1): string {
  return new Intl.NumberFormat(LOCALE, {
    style: "percent",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value / 100)
}

/** Datum im Format TT.MM.JJJJ (Zeitzone Europe/Berlin) */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat(LOCALE, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: TIME_ZONE,
  }).format(date)
}
