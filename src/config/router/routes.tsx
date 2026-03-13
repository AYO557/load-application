import { type RouteObject } from "react-router";
import AuthLayout from "../../modules/authentication/views/layout";
import { authRoutes } from "../../modules/authentication/authentication.routes";

export const routes: RouteObject[] = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: authRoutes,
  },
  {
    path: "/",
    element: <div>Dashboard</div>,
  },
  {
    path: "*",
    element: <h1>Oops!, page not found.</h1>,
  },
];
