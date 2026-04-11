import { PageNotFound } from "~/components/layouts/PageNotFound";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Renovation Tracker" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function NotFound() {
  return <PageNotFound/>
}