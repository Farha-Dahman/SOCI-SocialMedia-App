import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Friends } from "./components/Friends/Friends";
import { Settings } from "./components/Settings/Settings";
import { Home } from "./components/Home/Home";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";

export const AppRoutes: React.FC = () => {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "friends", element: <Friends /> },
        { path: "settings", element: <Settings /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={routers}></RouterProvider>;
};
