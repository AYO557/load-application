import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SignInPage from "./modules/authentication/views/sign-in";
import { createBrowserRouter, RouterProvider } from "react-router";
import SignUpPage from "./modules/authentication/views/sign-up";
import AuthLayout from "./modules/authentication/views/layout";

const appRouter = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Oops!, page not found.</h1>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);
