import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Post as PostInfo } from "../../../types/types";
import Loading from "../../Loading";

const PostsLists: React.FC<{ posts: PostInfo[] }> = ({ posts }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (posts.length > 0) {
      setIsLoading(false);
    }
  }, [posts]);
  return (
    <div className="post-content container p-0">
      <div className="row">
        {isLoading ? (
          <Loading />
        ) : (
          posts.map((post) => <Post key={post.user_id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default PostsLists;
