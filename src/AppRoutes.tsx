import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageNotFound } from "./layout/components/PageNotFound/PageNotFound";
import MasterLayout from "./layout/MasterLayout";
import HomePage from "./posts/components/HomePage/HomePage";
import Login from "./auth/Login/Login";
import { AppProvider } from "./context/app-store";
import Feed from "./posts/components/Feed/Feed";
import PostDetails from "./posts/components/PostDetails/PostDetails";
import CreatePost from "./posts/components/CreatePost/CreatePost";
import { setPosts } from "./posts/data-api";
import { API_URL } from "./posts/data-api";
import axios from "axios";
import { usePostsStore } from "./context/posts-store";
import SavedPost from "./posts/components/SavedPost/SavedPost";
import ProtectedRoute from "./ProtectedRoute";
import Analytics from "./admin/Analytics";
import VerificationChart from "./admin/components/VerificationChart";
import InteractionsChart from "./admin/components/InteractionsChart";
import Authorize from "./auth/Authorize/Authorize";

export const AppRoutes: React.FC = () => {
  const { setAllPosts } = usePostsStore();
  useEffect(() => {
    const isDataStored = localStorage.getItem("dataStored");
    if (!isDataStored) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(API_URL);
          setPosts(data);
          setAllPosts(data);
          localStorage.setItem("dataStored", "true");
        } catch (error) {
          console.error("Error fetching the posts:", error);
        }
      };
      fetchData();
    }
  }, []);
  const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MasterLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Feed />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/posts/:id",
          element: <PostDetails />,
        },
        {
          path: "/addpost",
          element: <CreatePost />,
        },
        {
          path: "/savedPosts",
          element: <SavedPost />,
        },
        {
          path: "analytics/",
          element: (
            <Authorize allowedRoles={["admin"]}>
              <Analytics />
            </Authorize>
          ),
          children: [
            {
              index: true,
              element: <VerificationChart />,
            },
            {
              path: "interactions",
              element: <InteractionsChart />,
            },
          ],
        },
      ],
    },
    { path: "*", element: <PageNotFound /> },
    { path: "/login", element: <Login /> },
  ]);
  return (
    <AppProvider>
      <RouterProvider router={routers}></RouterProvider>
    </AppProvider>
  );
};
