import "./index.css";
import { Menu } from "./Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageMenu from "./ManageMenu";
import { Nav } from "./Nav";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "./reusable/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { User, UserContextProvider } from "./context/UserContext";
import { useState } from "react";

const queryClient = new QueryClient();

export function App() {
  const [user, setUser] = useState<User | null>({
    email: "c@h.com",
    id: "1",
    name: "Cory",
  });
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider value={user}>
        <ReactQueryDevtools />
        <ErrorBoundary>
          <BrowserRouter>
            <Toaster />
            <header>
              Logo
              <Nav />
            </header>
            <main>
              <ErrorBoundary>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <ErrorBoundary>
                        <Menu />
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="/manage/:id?"
                    element={
                      <ErrorBoundary>
                        <ManageMenu />
                      </ErrorBoundary>
                    }
                  />
                </Routes>
              </ErrorBoundary>
            </main>
            <footer>Copyright 2023</footer>
          </BrowserRouter>
        </ErrorBoundary>
      </UserContextProvider>
    </QueryClientProvider>
  );
}
