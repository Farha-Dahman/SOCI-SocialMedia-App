import React, { useState } from "react";
import PostForm from "./PostForm";
import { Post } from "../../types/types";
import { addPost, getAllPosts } from "../../data-api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePostsStore } from "../../../context/posts-store";

const CreatePost: React.FC = () => {
  const navigate = useNavigate();
  const [nextUserId, setNextUserId] = useState(101);
  const { setAllPosts } = usePostsStore();

  const addPostFunc = async (values: Post) => {
    try {
      const updatedValues = { ...values, user_id: nextUserId };
      await addPost(updatedValues);
      const updatedPosts = await getAllPosts() || [];
      setAllPosts(updatedPosts);
      toast.success("Your Post was created!!");
      setNextUserId(nextUserId + 1);
      navigate("/");
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <div className="h-100 mb-5">
      <PostForm addPostFunc={addPostFunc} />
    </div>
  );
};

export default CreatePost;
