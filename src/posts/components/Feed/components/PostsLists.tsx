import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Post } from "../../../types/types";
import Loading from "../../Loading";
import axios from "axios";
import { usePostsStore } from "../../../../context/posts-store";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const API_URL =
  "https://mocki.io/v1/418eafe2-1002-4145-94f2-370a4eb34be8";

const PostsLists: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const { setAllPosts } = usePostsStore();
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setAllPosts(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error when fetching posts:", error);
      toast.error("Oops! Something went wrong while fetching posts.");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="post-content container p-0">
      <div className="row">
        {isLoading ? (
          <Loading />
        ) : (
          posts.map((post, index) => <PostCard key={index} post={post} />)
        )}
      </div>
      <Link
        to="/addpost"
        title="add post"
        className="add-post-button border text-center justify-content-center align-items-center d-flex"
      >
        <FontAwesomeIcon icon={faPlus} />
      </Link>
    </div>
  );
};

export default PostsLists;
