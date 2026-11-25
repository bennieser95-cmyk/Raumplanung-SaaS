import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StatusToggle } from "@/tests/unit/fixtures/status-toggle";

describe("StatusToggle (Setup-Fixture für jsdom + jest-dom)", () => {
  it("zeigt den Ausgangsstatus barrierefrei an", () => {
    render(<StatusToggle label="Raum 1.01" />);

    expect(screen.getByRole("region", { name: "Raum 1.01" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Raum 1.01: Frei");
    expect(screen.getByRole("button", { name: "Als belegt markieren" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("wechselt den Status per Klick", () => {
    render(<StatusToggle label="Raum 1.01" />);

    fireEvent.click(screen.getByRole("button", { name: "Als belegt markieren" }));

    expect(screen.getByRole("status")).toHaveTextContent("Raum 1.01: Belegt");
    expect(screen.getByRole("button", { name: "Als frei markieren" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("räumt das DOM zwischen Tests auf", () => {
    render(<StatusToggle label="Raum 2.02" initialAvailable={false} />);

    expect(screen.queryByRole("region", { name: "Raum 1.01" })).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Raum 2.02: Belegt");
  });
});
