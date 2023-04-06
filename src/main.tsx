import ReactDOM from "react-dom/client";
import "./index.css";
import { Menu } from "./Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageMenu from "./ManageMenu";
import { Nav } from "./Nav";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "./reusable/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
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
  </QueryClientProvider>
);
