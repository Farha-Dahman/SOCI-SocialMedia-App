import React from "react";
import PostsLists from "./components/PostsLists";
import { usePostsStore } from "../../../context/posts-store";
import { Post } from "../../types/types";

const Feed: React.FC = () => {
  const { allPosts, showVerifiedPosts, setShowVerifiedPosts } = usePostsStore();
  const filteredPosts = showVerifiedPosts
    ? allPosts.filter((post: Post) => post.is_verified)
    : allPosts;

  return (
    <>
      <h3 className="mt-2">Recent Posts</h3>
      <div className="feed-buttons">
        <button
          id="all-posts"
          className="btn fw-bold mt-2 m-1"
          onClick={() => setShowVerifiedPosts(false)}
        >
          All posts
        </button>
        <button
          id="verified-posts"
          className="btn fw-bold mt-2 m-1"
          onClick={() => setShowVerifiedPosts(true)}
        >
          Verified Posts
        </button>
      </div>
      <PostsLists posts={filteredPosts} />
    </>
  );
};

export default Feed;
