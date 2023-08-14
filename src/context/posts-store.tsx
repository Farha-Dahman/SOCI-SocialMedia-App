import create from "zustand";
import axios from "axios";

export interface PostProps {
  user_id?: number;
  user_name: string;
  user_avatar: string;
  body: string;
  hashtags: string;
  image_url: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  country: string;
  language: string;
  is_verified: boolean;
}
interface PostsStore {
  allPosts: PostProps[];
  verifiedPosts: PostProps[];
  setAllPosts: (allPosts: PostProps[]) => void;
  getAllPosts: () => Promise<void>;
}

export const usePostsStore = create<PostsStore>((set) => ({
  allPosts: [],
  verifiedPosts: [],
  setAllPosts: (allPosts) => set(() => ({ allPosts })),
  getAllPosts: async () => {
    try {
      const { data } = await axios.get(
        "https://mocki.io/v1/418eafe2-1002-4145-94f2-370a4eb34be8",
      );
      set(() => ({ allPosts: data }));
      set(() => ({
        verifiedPosts: data.filter((post: PostProps) => post.is_verified),
      }));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },
}));
