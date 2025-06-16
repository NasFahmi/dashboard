
import DashbaordLayout from "~/features/dashboard/layout";
import type { Route } from "./+types/root_layout";
import { isRouteErrorResponse } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "dashboard app", content: "Welcome to Dashboard" },
  ];
}

export default function RootLayout() {
  return <DashbaordLayout />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container flex items-center justify-center w-screen h-screen mx-auto text-center ">
      <div className="">
        <h1>{message} awdadadwad</h1>
        <p>{details}</p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}