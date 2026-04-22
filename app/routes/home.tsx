import type { Route } from "./+types/home";
import { Dashboard } from "../components/layouts/Dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Renovation Tracker" },
    {
      name: "Main Page",
      content: "There is a search bar to start a renovation search.",
    },
  ];
}

export default function Home() {
  return <Dashboard />;
}
