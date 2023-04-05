import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

it("should set an id on the input", () => {
  render(<Input id="name" label="Name" value="" onChange={() => {}} />);
  const input = screen.getByLabelText("Name");
  expect(input.id).toBe("name");
});
