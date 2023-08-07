import React from "react";
import PostsTopBar from "./components/PostsTopBar";
import PostsContent from "./components/PostsContent";

const RecentPosts: React.FC = () => {
  return (
    <>
      <PostsTopBar />
      <PostsContent />
    </>
  );
};

export default RecentPosts;
