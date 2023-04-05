export const buttonTypes = ["button", "submit"] as const;

type ButtonType = typeof buttonTypes[number];

type ButtonProps = {
  children: React.ReactNode;

  /** Button type */
  type: ButtonType;
};

export function Button({ children, type }: ButtonProps) {
  return (
    <button className="text-white border bg-sky-600" type={type}>
      {children}
    </button>
  );
}
