import type { Route } from "./+types/home";
import { BeforeAfter } from "~/components/layouts/BeforeAfter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Renovation Tracker" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function BeforeAfterRoutes() {
  return <BeforeAfter />;
}
