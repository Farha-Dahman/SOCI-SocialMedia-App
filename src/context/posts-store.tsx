import create from "zustand";
import { Post } from "../posts/types/types";

interface PostsStore {
  allPosts: Post[];
  setAllPosts: (allPosts: Post[]) => void;
  showVerifiedPosts: boolean;
  setShowVerifiedPosts: (showVerifiedPosts: boolean) => void;
}

export const usePostsStore = create<PostsStore>((set) => ({
  allPosts: [],
  setAllPosts: (newPosts) =>
    set((state) => ({ allPosts: [...state.allPosts, ...newPosts] })),
  showVerifiedPosts: false,
  setShowVerifiedPosts: (showVerifiedPosts) =>
    set(() => ({ showVerifiedPosts })),
}));
