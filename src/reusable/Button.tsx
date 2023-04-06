import clsx from "clsx";

export const buttonTypes = ["button", "submit"] as const;

type ButtonType = typeof buttonTypes[number];

// Extending so all valid props are accepted,
// But specifying a few that we always want to require.
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;

  /** Button type */
  type: ButtonType;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx("text-white border bg-sky-600", className)}
      {...rest}
    >
      {children}
    </button>
  );
}
