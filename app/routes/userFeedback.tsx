import { UserFeedbackPage } from "~/components/layouts/UserFeedbackPage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User Feedback Page" },
    { name: "User Feedback", content: "Displays user feedbacks." },
  ];
}

export default function UserFeedback() {
  return <UserFeedbackPage />;
}
