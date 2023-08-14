import React from "react";
import Post from "./Post";
import { PostProps } from "../../../../context/posts-store";
import Loading from "../../Loading";

const PostsContent: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div className="post-content container p-0">
      <div className="row">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.user_id}
              user_name={post.user_name}
              user_avatar={post.user_avatar}
              body={post.body}
              hashtags={post.hashtags}
              image_url={post.image_url}
              likes={post.likes}
              comments={post.comments}
              shares={post.shares}
              timestamp={post.timestamp}
              country={post.country}
              language={post.language}
              is_verified={post.is_verified}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default PostsContent;
