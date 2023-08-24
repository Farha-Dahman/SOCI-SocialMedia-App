import { Post } from "./types/types";
import { sleep } from "../helpers/utils";

export const POSTS_KEY = "postsData";

export const getAllPosts = async (): Promise<Post[] | undefined> => {
  try {
    await sleep(2000);
    const storedPosts = localStorage.getItem(POSTS_KEY);
    return JSON.parse(storedPosts || "[]") as Post[];
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

export const getPost = async (id: number): Promise<Post | undefined> => {
  try {
    await sleep(2000);
    const storedPosts = localStorage.getItem(POSTS_KEY);
    if (storedPosts) {
      const postsList: Post[] = JSON.parse(storedPosts);
      return postsList.find((post) => post.user_id === id);
    }
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

export const addPost = async (post: Post): Promise<void> => {
  try {
    await sleep(2000);
    const storedPosts = localStorage.getItem(POSTS_KEY);
    const convertedPosts = storedPosts ? JSON.parse(storedPosts) : [];
    convertedPosts.push(post);
    setPosts(convertedPosts);
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

export const removePost = async (id: number): Promise<void> => {
  try {
    await sleep(2000);
    const storedPosts = localStorage.getItem(POSTS_KEY);
    if (storedPosts) {
      const postsList: Post[] = JSON.parse(storedPosts);
      const index = postsList.findIndex((post) => post.user_id === id);
      if (index !== -1) {
        postsList.splice(index, 1);
        setPosts(postsList);
      }
    }
  } catch (error) {
    console.error("Error when remove post:", error);
  }
};

export const setPosts = (posts: Post[]): void => {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
};
