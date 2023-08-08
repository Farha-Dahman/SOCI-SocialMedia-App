import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageNotFound } from "./layout/components/PageNotFound/PageNotFound";
import MasterLayout from "./layout/MasterLayout";
import HomePage from "./posts/components/HomePage/HomePage";

export const AppRoutes: React.FC = () => {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <MasterLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={routers}></RouterProvider>;
};
