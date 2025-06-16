import Dashboard from "~/features/dashboard/dashboard";
import type { Route } from "./+types/root_layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "dashboard app", content: "Welcome to Dashboard" },
  ];
}

export default function RootLayout() {
  return <Dashboard />;
}
