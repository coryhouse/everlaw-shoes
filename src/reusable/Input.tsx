type InputProps = {
  /** HTML ID */
  id: string;

  /** Input label */
  label: string;

  /** Input type */
  type?: "text" | "number";
};

export function Input({ id, label, type = "text" }: InputProps) {
  return (
    <div className="m-4">
      <label className="block" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="p-1 border border-black rounded-sm"
      />
    </div>
  );
}
