import { render, screen } from "@testing-library/react";
import { Button, buttonTypes } from "./Button";

it("sets children", () => {
  render(<Button type="submit">Hello, world</Button>);
  screen.getByText("Hello, world");
});

buttonTypes.forEach((type) => {
  it(`sets a type of ${type}`, () => {
    render(<Button type={type}>Hello, world</Button>);
    const input = screen.getByText("Hello, world") as HTMLButtonElement;
    expect(input.type).toBe(type);
  });
});
