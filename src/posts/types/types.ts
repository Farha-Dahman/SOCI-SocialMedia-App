export interface Post {
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