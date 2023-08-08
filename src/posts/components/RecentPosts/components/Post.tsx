import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
interface PostProps {
  imageSrc: string;
  profilePictureSrc: string;
  username: string;
  likes: number;
  comments: number;
  tags: string[];
  content: string;
}
const Post: React.FC<PostProps> = ({
  imageSrc,
  profilePictureSrc,
  username,
  likes,
  comments,
  tags,
  content,
}) => {
  return (
    <>
      <article className="col-md-6 col-xl-4 col-xxl-3 py-2">
        <div className="card-item bg-white">
          <img
            src={imageSrc}
            className="post-Image w-100 p-1"
            alt="post image"
          />
          <div className="card-body px-2 py-2 desc">
            <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
              <img src={profilePictureSrc} alt="profile_picture" />
              <h6 className="card-title ps-1">{username}</h6>
              <div className="content d-flex ms-auto bg-white">
                <span className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                  {likes}
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                  {comments}
                </span>
              </div>
            </div>
            <article className="card-text">
              {tags.map((tag, index) => (
                <cite key={index}>
                  <span>#</span>
                  {tag}
                </cite>
              ))}
              <p>{content}</p>
            </article>
          </div>
        </div>
      </article>
    </>
  );
};

export default Post;
