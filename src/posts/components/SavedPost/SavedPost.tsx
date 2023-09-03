import React from "react";
import PostCard from "../Feed/components/PostCard";
import { Post } from "../../types/types";

const SavedPost: React.FC = () => {
  const savedPosts = localStorage.getItem("savedPosts");
  const savedPostsList: Post[] = JSON.parse(savedPosts!);

  return (
    <div className="post-content p-0 hight-container">
      <h3 className="mt-2">Saved Posts</h3>
      <div className="row">
        {savedPostsList.length === 0 ? (
          <div className="container">
            <div className="alert alert-info mt-4" role="alert">
              No saved items yet. Start saving some interesting posts!
            </div>
          </div>
        ) : (
          savedPostsList.map((savedPost) => (
            <PostCard key={savedPost.user_id} post={savedPost} />
          ))
        )}
      </div>
    </div>
  );
};

export default SavedPost;
