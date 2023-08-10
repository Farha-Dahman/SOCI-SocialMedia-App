import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageNotFound } from "./layout/components/PageNotFound/PageNotFound";
import MasterLayout from "./layout/MasterLayout";
import HomePage from "./posts/components/HomePage/HomePage";
import Login from "./auth/Login/Login";
import { AppProvider } from "./context/app-store";

export const AppRoutes: React.FC = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);
  return (
    <AppProvider>
      <RouterProvider router={routers}></RouterProvider>
    </AppProvider>
  );
};
