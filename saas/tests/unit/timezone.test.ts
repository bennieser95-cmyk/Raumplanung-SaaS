// @vitest-environment node
import { describe, expect, it } from "vitest";

const HOUR_MS = 60 * 60 * 1000;

/** Länge eines lokalen Kalendertags in Stunden (lokale Mitternacht bis lokale Mitternacht). */
function localDayLengthInHours(year: number, month: number, day: number): number {
  const start = new Date(year, month - 1, day);
  const end = new Date(year, month - 1, day + 1);
  return (end.getTime() - start.getTime()) / HOUR_MS;
}

function formatBerlin(date: Date): string {
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Europe/Berlin",
  }).format(date);
}

describe("Test-Zeitzone", () => {
  it("läuft in Europe/Berlin", () => {
    expect(process.env.TZ).toBe("Europe/Berlin");
    expect(Intl.DateTimeFormat().resolvedOptions().timeZone).toBe("Europe/Berlin");
  });

  it("nutzt MEZ im Winter und MESZ im Sommer", () => {
    // getTimezoneOffset liefert Minuten (UTC minus lokal).
    expect(new Date(2026, 0, 15, 12).getTimezoneOffset()).toBe(-60);
    expect(new Date(2026, 6, 15, 12).getTimezoneOffset()).toBe(-120);
  });
});

describe("Sommerzeit-Umstellungstage 2026", () => {
  it.each([
    { label: "28.03.2026 (normaler Tag)", year: 2026, month: 3, day: 28, hours: 24 },
    { label: "29.03.2026 (Beginn Sommerzeit)", year: 2026, month: 3, day: 29, hours: 23 },
    { label: "30.03.2026 (normaler Tag)", year: 2026, month: 3, day: 30, hours: 24 },
    { label: "25.10.2026 (Ende Sommerzeit)", year: 2026, month: 10, day: 25, hours: 25 },
    { label: "26.10.2026 (normaler Tag)", year: 2026, month: 10, day: 26, hours: 24 },
  ])("$label hat $hours Stunden", ({ year, month, day, hours }) => {
    expect(localDayLengthInHours(year, month, day)).toBe(hours);
  });

  it("springt am 29.03.2026 von 02:00 direkt auf 03:00", () => {
    const lastWinterMinute = new Date(Date.UTC(2026, 2, 29, 0, 59));
    const firstSummerMinute = new Date(Date.UTC(2026, 2, 29, 1, 0));

    expect(formatBerlin(lastWinterMinute)).toBe("29.03.26, 01:59");
    expect(formatBerlin(firstSummerMinute)).toBe("29.03.26, 03:00");
    // Die lokale Uhrzeit 02:30 existiert an diesem Tag nicht.
    expect(new Date(2026, 2, 29, 2, 30).getHours()).not.toBe(2);
  });

  it("durchläuft am 25.10.2026 die Stunde 02:00 bis 03:00 zweimal", () => {
    const firstPass = new Date(Date.UTC(2026, 9, 25, 0, 30));
    const secondPass = new Date(Date.UTC(2026, 9, 25, 1, 30));

    expect(formatBerlin(firstPass)).toBe("25.10.26, 02:30");
    expect(formatBerlin(secondPass)).toBe("25.10.26, 02:30");
    expect(secondPass.getTime() - firstPass.getTime()).toBe(HOUR_MS);
  });
});
