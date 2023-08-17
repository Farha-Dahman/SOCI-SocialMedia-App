import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppMenu from "./components/AppMenu/AppMenu";
import AppSideBar from "./components/AppSideBar/AppSideBar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../hooks/useAppStore";
import { usePostsStore } from "../context/posts-store";
import axios from "axios";
import { API_URL } from "../posts/components/Feed/components/PostsLists";
import { toast } from "react-toastify";

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
      const storedData = localStorage.getItem("postsData");

      if (!storedData) {
        try {
          const { data } = await axios.get(API_URL);
          localStorage.setItem("postsData", JSON.stringify(data));
          setAllPosts(data);
        } catch (error) {
          console.error("Error when fetching the posts:", error);
          toast.error("Oops! Something went wrong while fetching posts.");
        }
      } else {
        setAllPosts(JSON.parse(storedData));
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
