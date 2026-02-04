import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("before-after", "routes/listing.tsx"),
  route("before-after/:roomType", "routes/carousel.tsx"),
  route("/user-feedback", "routes/userFeedback.tsx"),
  route("/contacts", "routes/contacts.tsx"),
] satisfies RouteConfig;
