import React, { useEffect, useState } from "react";
import PostsContent from "./components/PostsContent";
import { PostProps, usePostsStore } from "../../../context/posts-store";

const Feed: React.FC = () => {
  const { allPosts, verifiedPosts, getAllPosts } = usePostsStore();
  const [displayedPosts, setDisplayedPosts] = useState<PostProps[]>([]);

  const handleAllPostsClick = () => {
    setDisplayedPosts(allPosts);
  };
  const handleVerifiedPostsClick = () => {
    setDisplayedPosts(verifiedPosts);
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  useEffect(() => {
    setDisplayedPosts(allPosts);
  }, [allPosts]);
  return (
    <>
      <h3 className="mt-2">Recent Posts</h3>
      <div className="feed-buttons">
        <button
          id="all-posts"
          className="btn fw-bold mt-2 m-1"
          onClick={handleAllPostsClick}
        >
          All posts
        </button>
        <button
          id="verified-posts"
          className="btn fw-bold mt-2 m-1"
          onClick={handleVerifiedPostsClick}
        >
          Verified Posts
        </button>
      </div>
      <PostsContent posts={displayedPosts} />
    </>
  );
};

export default Feed;
