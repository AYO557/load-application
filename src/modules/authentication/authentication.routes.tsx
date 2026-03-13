import { Navigate, type RouteObject } from "react-router";
import SignInPage from "./views/sign-in";
import SignUpPage from "./views/sign-up";

export const authRoutes: RouteObject[] = [
  {
    path: "",
    element: <Navigate to="/auth/signin" />,
  },
  {
    path: "signin",
    element: <SignInPage />,
  },
  {
    path: "signup",
    element: <SignUpPage />,
  },
];
