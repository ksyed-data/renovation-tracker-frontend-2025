import type { Route } from "./+types/home";
import { BeforeAfter } from "~/components/layouts/BeforeAfter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Listing() {
  return <BeforeAfter />;
}
