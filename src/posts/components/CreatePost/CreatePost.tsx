import React from "react";
import PostForm from "./PostForm";
import { Post } from "../../types/types";
import { addPost, getAllPosts } from "../../data-api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePostsStore } from "../../../context/posts-store";

const CreatePost: React.FC = () => {
  const navigate = useNavigate();
  const { setAllPosts } = usePostsStore();

  const addNewPost = async (values: Post) => {
    try {
      const randomUserId = Math.floor(Math.random() * 10000);
      const updatedValues = { ...values, user_id: randomUserId };
      await addPost(updatedValues);
      const updatedPosts = (await getAllPosts()) || [];
      setAllPosts(updatedPosts);
      toast.success("Your Post was created!!");
      navigate("/");
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <div className="h-100 mb-5">
      <PostForm addNewPost={addNewPost} />
    </div>
  );
};

export default CreatePost;
