import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

it("sets children", () => {
  render(<Button type="submit">Hello, world</Button>);
  screen.getByText("Hello, world");
});

it("sets a type", () => {
  render(<Button type="submit">Hello, world</Button>);
  const input = screen.getByText("Hello, world") as HTMLButtonElement;
  expect(input.type).toBe("submit");
});
