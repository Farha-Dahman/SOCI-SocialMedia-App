import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppMenu from "./components/AppMenu/AppMenu";
import AppSideBar from "./components/AppSideBar/AppSideBar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../hooks/useAppStore";
import { usePostsStore } from "../context/posts-store";
import { toast } from "react-toastify";
import { getAllPosts, setPosts } from "../posts/data-api";

const MasterLayout: React.FC = () => {
  const { username } = useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/login");
    }
  }, [username]);

  const { setAllPosts } = usePostsStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getAllPosts();
        if (!postsData) {
          throw new Error("No data fetched");
        }
        setPosts(postsData);
        setAllPosts(postsData);
      } catch (error) {
        console.error("Error when fetching the posts:", error);
        toast.error("Oops! Something went wrong while fetching posts.");
      }
    };
    fetchData();
  }, [setAllPosts]);

  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow-1 d-flex">
        <AppMenu />
        <section id="content" className="content container-fluid pb-5">
          <Outlet />
        </section>
        <AppSideBar />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;
