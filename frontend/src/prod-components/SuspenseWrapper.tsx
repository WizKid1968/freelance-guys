import { type ReactNode, Suspense } from "react";

// Basic Suspense wrapper, consider adding a fallback UI later
export const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={null}>{children}</Suspense>;
};
