import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";

const appRouter = createBrowserRouter(routes);

const RouterConfig = (): React.ReactElement => {
  return <RouterProvider router={appRouter} />;
};

export default RouterConfig;
