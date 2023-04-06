import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary fallback={<h1>Sorry, an error occurred.</h1>}>
      {children}
    </ReactErrorBoundary>
  );
}
