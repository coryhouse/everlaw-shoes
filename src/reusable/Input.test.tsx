import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";
import { vi } from "vitest";

it("should set an id on the input", () => {
  render(<Input id="name" label="Name" value="" onChange={() => {}} />);
  const input = screen.getByLabelText("Name");
  expect(input.id).toBe("name");
});

it("should set the label text", () => {
  render(<Input id="name" label="Name" value="" onChange={() => {}} />);
  const label = screen.getByText("Name");
  expect(label).toBeInTheDocument();
});

it("should set the input type", () => {
  render(
    <Input
      id="price"
      label="Price"
      type="number"
      value=""
      onChange={() => {}}
    />
  );
  const input = screen.getByLabelText("Price") as HTMLInputElement;
  expect(input.type).toBe("number");
});

it("should set the input value", () => {
  render(<Input id="name" label="Name" value="test" onChange={() => {}} />);
  const input = screen.getByLabelText("Name") as HTMLInputElement;
  expect(input.value).toBe("test");
});

it("should call the onChange handler when the input changes", () => {
  const onChange = vi.fn();
  render(<Input id="name" label="Name" value="" onChange={onChange} />);
  const input = screen.getByLabelText("Name");
  fireEvent.change(input, { target: { value: "test" } });
  expect(onChange).toHaveBeenCalledTimes(1);
});
