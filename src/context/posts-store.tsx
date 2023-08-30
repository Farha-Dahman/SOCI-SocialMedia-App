import create from "zustand";
import { Post } from "../posts/types/types";

interface PostsStore {
  allPosts: Post[];
  setAllPosts: (allPosts: Post[]) => void;
  showVerifiedPosts: boolean;
  setShowVerifiedPosts: (showVerifiedPosts: boolean) => void;
  savedPosts: Post[];
  setSavedPosts: (savedPosts: Post[]) => void;
  addSavedPost: (post: Post) => void;
  removeSavedPost: (postId: number) => void;
}

export const usePostsStore = create<PostsStore>((set) => ({
  allPosts: [],
  setAllPosts: (newPosts) => set({ allPosts: newPosts }),
  showVerifiedPosts: false,
  setShowVerifiedPosts: (showVerifiedPosts) =>
    set(() => ({ showVerifiedPosts })),
  savedPosts: [],
  setSavedPosts: (newSavedPosts) => set({ savedPosts: newSavedPosts }),
  addSavedPost: (post) =>
    set((state) => ({ savedPosts: [...state.savedPosts, post] })),
  removeSavedPost: (postId) =>
    set((state) => ({
      savedPosts: state.savedPosts.filter((post) => post.user_id !== postId),
    })),
}));
