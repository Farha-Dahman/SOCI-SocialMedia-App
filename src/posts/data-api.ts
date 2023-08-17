import { Post } from "./types/types";
import { sleep } from "../helpers/utils";

const POSTS_KEY = "postsData";

export const getAllPosts = async (): Promise<Post[]> => {
  await sleep(2000);
  const storedPosts = localStorage.getItem(POSTS_KEY);
  return storedPosts ? JSON.parse(storedPosts) : [];
};

export const getPost = async (id: number): Promise<Post | undefined> => {
    await sleep(2000);
    const storedPosts = localStorage.getItem(POSTS_KEY);
    if (storedPosts){
      const postsList: Post[] = JSON.parse(storedPosts);
      return postsList.find( post => post.user_id === id);
    }
};

export const addPost = async (post: Post): Promise<void> => {
  await sleep(2000);
  const storedPosts = localStorage.getItem(POSTS_KEY);
  const convertedPosts = storedPosts ? JSON.parse(storedPosts) : [];
  convertedPosts.push(post);
  localStorage.setItem(POSTS_KEY, JSON.stringify(convertedPosts));
};

export const removePost = async (id: number): Promise<void> => {
  await sleep(2000);
  const storedPosts = localStorage.getItem(POSTS_KEY);
  if (storedPosts) {
    const postsList: Post[] = JSON.parse(storedPosts);
    const index = postsList.findIndex(post => post.user_id === id);
    if (index !== -1) {
      postsList.splice(index, 1);
      localStorage.setItem(POSTS_KEY, JSON.stringify(postsList));
    }
  }
};
