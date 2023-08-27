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
      element: <MasterLayout />,
      children: [
        { index: true, element: <Feed /> },
        { path: "/home", element: <HomePage /> },
        { path: "/posts/:id", element: <PostDetails /> },
        { path: "/addpost", element: <CreatePost /> },
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
