type InputProps = {
  /** HTML ID */
  id: string;

  /** Input label */
  label: string;

  /** Called when the input's value changes */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** Input type */
  type?: "text" | "number";

  /** Input value */
  value: string;
};

export function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <div className="mb-4">
      <label className="block" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className="p-1 border border-black rounded-sm"
      />
    </div>
  );
}
