import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Post } from "../../../types/types";
import Loading from "../../Loading";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import "./PostsList.scss";
import { usePostsStore } from "../../../../context/posts-store";
import { getAllPosts } from "../../../data-api";

const PostsLists: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(12);
  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  const visiblePosts = posts.slice(first, first + rows);
  const { setAllPosts } = usePostsStore();

  const getPosts = async () => {
    try {
      const allPosts = (await getAllPosts()) || [];
      setAllPosts(allPosts);
      await getAllPosts();
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
          visiblePosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))
        )}
      </div>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={posts.length}
        onPageChange={onPageChange}
        className="paginator-controls"
      />
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
