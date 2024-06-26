import React from "react";
import PostsLists from "./components/PostsLists";
import { usePostsStore } from "../../../context/posts-store";
import { Post } from "../../types/types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Feed: React.FC = () => {
  const { allPosts, showVerifiedPosts, setShowVerifiedPosts, setAllPosts } =
    usePostsStore();
  const filteredPosts = showVerifiedPosts
    ? allPosts.filter((post: Post) => post.is_verified)
    : allPosts;
  const deletePost = (postId: number) => {
    const updatedPosts = filteredPosts.filter(
      (post: Post) => post.user_id !== postId,
    );
    setAllPosts(updatedPosts);
  };
  return (
    <>
      <div className="justify-content-between d-flex">
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
        <div>
          <Link
            to="/addpost"
            title="add post"
            className="btn app-post fw-bold mt-2 m-1 border text-center justify-content-center align-items-center d-flex"
          >
            <FontAwesomeIcon icon={faPlus} className="me-1" />
            Add Post
          </Link>
        </div>
      </div>
      <PostsLists posts={filteredPosts} onDeletePost={deletePost} />
    </>
  );
};

export default Feed;
