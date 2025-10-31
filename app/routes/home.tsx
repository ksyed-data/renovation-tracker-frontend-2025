import type { Route } from "./+types/home";
import { Welcome } from "../components/layouts/welcome/welcome";
import { Dashboard } from "../components/layouts/Dashboard";
import { Renovation} from "~/components/layouts/Renovation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Dashboard/>;
}
