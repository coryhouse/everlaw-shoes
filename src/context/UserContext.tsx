import { createContext, useContext } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
};

// Create a new context
const UserContext = createContext<User | null>(null);

type UserContextProviderProps = {
  value: User | null;
  children: React.ReactNode;
};

export function UserContextProvider({
  value,
  children,
}: UserContextProviderProps) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}
