export const buttonTypes = ["button", "submit"] as const;

type ButtonType = typeof buttonTypes[number];

type ButtonProps = {
  ["aria-label"]: string;

  children: React.ReactNode;

  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /** Button type */
  type: ButtonType;
};

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className="text-white border bg-sky-600" {...rest}>
      {children}
    </button>
  );
}
