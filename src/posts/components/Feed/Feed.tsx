import React, { useEffect, useState } from "react";
import PostsLists from "./components/PostsLists";
import { usePostsStore } from "../../../context/posts-store";
import { Post as PostInfo } from "../../types/types";
import axios from "axios";

const API_URL = "https://mocki.io/v1/418eafe2-1002-4145-94f2-370a4eb34be8";
const Feed: React.FC = () => {
  const { allPosts, setAllPosts } = usePostsStore();
  const [showFilteredPosts, setShowFilteredPosts] = useState(false);
  const filteredPosts = showFilteredPosts
    ? allPosts.filter((post: PostInfo) => post.is_verified)
    : allPosts;

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setAllPosts(data);
      } catch (error) {
        console.error("Error when the fetching posts:", error);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <h3 className="mt-2">Recent Posts</h3>
      <div className="feed-buttons">
        <button
          id="all-posts"
          className="btn fw-bold mt-2 m-1"
          onClick={() => setShowFilteredPosts(false)}
        >
          All posts
        </button>
        <button
          id="verified-posts"
          className="btn fw-bold mt-2 m-1"
          onClick={() => setShowFilteredPosts(true)}
        >
          Verified Posts
        </button>
      </div>
      <PostsLists posts={filteredPosts} />
    </>
  );
};

export default Feed;
