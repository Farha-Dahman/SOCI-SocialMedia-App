import React from "react";
import Stories from "../Stories/Stories";
import RecentPosts from "../RecentPosts/RecentPosts";

const HomePage: React.FC = () => {
  return (
    <>
      <Stories />
      <div id="posts" className="posts">
        <RecentPosts />
      </div>
    </>
  );
};

export default HomePage;
