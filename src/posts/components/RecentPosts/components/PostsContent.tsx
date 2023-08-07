import React from "react";
import Post from "./Post";

const PostsContent: React.FC = () => {
  return (
    <div className="tab-content post-content container p-0" id="myTabContent">
      <Post />
    </div>
  );
};

export default PostsContent;
