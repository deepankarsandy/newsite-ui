import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders label and base styles", () => {
    render(<Button>Save changes</Button>);

    const button = screen.getByRole("button", { name: "Save changes" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("inline-flex");
    expect(button).toHaveClass("bg-primary");
  });
});
