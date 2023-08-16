import create from "zustand";
import { Post as PostInfo } from "../posts/types/types";

interface PostsStore {
  allPosts: PostInfo[];
  setAllPosts: (allPosts: PostInfo[]) => void;
}

export const usePostsStore = create<PostsStore>((set) => ({
  allPosts: [],
  setAllPosts: (allPosts) => set(() => ({ allPosts })),
}));
