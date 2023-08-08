import React from "react";
import Post from "./Post";
import post1 from "../../../../assets/images/image1.jpg";
import post2 from "../../../../assets/images/image2.jpg";
import post3 from "../../../../assets/images/image3.jpg";
import post4 from "../../../../assets/images/image4.jpg";
import post5 from "../../../../assets/images/image5.webp";
import post6 from "../../../../assets/images/image6.jpg";

const PostsContent: React.FC = () => {
  const posts = [
    {
      image: `${post1}`,
      profilePicture:
        "https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=farah",
      username: "Sara Mena",
      likes: 1125,
      comments: 348,
      tags: ["Vivarmus", "suscipit", "nature"],
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A cum, maiores doloribus laboriosam molestias idat libero perspiciatis temporibus vero.",
    },
    {
      image: `${post2}`,
      profilePicture:
        "https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Jerry",
      username: "Jerry Jordan",
      likes: 1007,
      comments: 948,
      tags: ["Vivarmus", "suscipit"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repellendus eius fugit iusto.",
    },
    {
      image: `${post3}`,
      profilePicture:
        "https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Yara",
      username: "Yara Powell",
      likes: 105,
      comments: 548,
      tags: ["suscipit", "Vivarmus"],
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, sunt!.",
    },
    {
      image: `${post4}`,
      profilePicture:
        "https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Nancy",
      username: "Nancy Lee",
      likes: 325,
      comments: 48,
      tags: ["suscipit"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio cumque iste ad.",
    },
    {
      image: `${post5}`,
      profilePicture:
        "https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Marie",
      username: "Marie Jacksone",
      likes: 365,
      comments: 98,
      tags: ["Vivarmus"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio cumque iste ad. Animi, temporibus sit ab quia exercitationem id!",
    },
    {
      image: `${post6}`,
      profilePicture:
        "https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Go",
      username: "Go Meeny",
      likes: 115,
      comments: 59,
      tags: ["Vivarmus", "world"],
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A cum, maiores doloribus laboriosam molestias id at libero perspiciatis temporibus vero.",
    },
  ];
  const feedsPosts = posts.slice(2, 5);
  const followingPosts = posts.slice(0, 2);
  const latestPosts = posts.slice(4, 5);
  const popularPosts = posts.filter((post) => post.likes > 1000);
  return (
    <div className="tab-content post-content container p-0" id="myTabContent">
      <div
        className="tab-pane fade"
        id="all-tab-pane"
        role="tabpanel"
        aria-labelledby="all-tab"
        tabIndex={0}
      >
        <div className="row">
          {posts.map((post, index) => (
            <Post
              key={index}
              imageSrc={post.image}
              profilePictureSrc={post.profilePicture}
              username={post.username}
              likes={post.likes}
              comments={post.comments}
              tags={post.tags}
              content={post.content}
            />
          ))}
        </div>
      </div>
      <div
        className="tab-pane fade show active"
        id="feeds-tab-pane"
        role="tabpanel"
        aria-labelledby="feeds-tab"
        tabIndex={0}
      >
        <div className="row">
          {feedsPosts.map((post, index) => (
            <Post
              key={index}
              imageSrc={post.image}
              profilePictureSrc={post.profilePicture}
              username={post.username}
              likes={post.likes}
              comments={post.comments}
              tags={post.tags}
              content={post.content}
            />
          ))}
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="following-tab-pane"
        role="tabpanel"
        aria-labelledby="following-tab"
        tabIndex={0}
      >
        <div className="row">
          {followingPosts.map((post, index) => (
            <Post
              key={index}
              imageSrc={post.image}
              profilePictureSrc={post.profilePicture}
              username={post.username}
              likes={post.likes}
              comments={post.comments}
              tags={post.tags}
              content={post.content}
            />
          ))}
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="latest-tab-pane"
        role="tabpanel"
        aria-labelledby="latest-tab"
        tabIndex={0}
      >
        <div className="row">
          {latestPosts.map((post, index) => (
            <Post
              key={index}
              imageSrc={post.image}
              profilePictureSrc={post.profilePicture}
              username={post.username}
              likes={post.likes}
              comments={post.comments}
              tags={post.tags}
              content={post.content}
            />
          ))}
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="popular-tab-pane"
        role="tabpanel"
        aria-labelledby="popular-tab"
        tabIndex={0}
      >
        <div className="row">
          {popularPosts.map((post, index) => (
            <Post
              key={index}
              imageSrc={post.image}
              profilePictureSrc={post.profilePicture}
              username={post.username}
              likes={post.likes}
              comments={post.comments}
              tags={post.tags}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsContent;
