type ButtonProps = {
  children: React.ReactNode;

  /** Button type */
  type: "button" | "submit";
};

export function Button({ children, type }: ButtonProps) {
  return (
    <button className="text-white border bg-sky-600" type={type}>
      {children}
    </button>
  );
}
