import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faCertificate,
  faShare,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Post } from "../../../types/types";
import { Link } from "react-router-dom";
dayjs.extend(relativeTime);

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const {
    user_name,
    user_avatar,
    body,
    hashtags,
    image_url,
    likes,
    comments,
    shares,
    timestamp,
    country,
    language,
    is_verified,
  } = post;
  return (
    <>
      <article className="col-md-6 col-xl-6 col-xxl-4 py-2">
        <div className="card-item bg-white">
          <Link to={`/posts/${post.user_id}`}>
            <img
              src={image_url}
              className="post-Image w-100 p-1"
              alt="post image"
            />
          </Link>
          <div className="card-body px-2 py-2 desc">
            <div className="mb-3 w-100 d-flex d-xsm-block align-items-center justify-content-center">
              <img
                src={user_avatar}
                alt="profile_picture"
                className="profile-picture align-items-start"
              />
              <div>
                <h6 className="card-title ps-1">
                  {user_name}
                  {is_verified ? (
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="certificate ms-1"
                    />
                  ) : (
                    ""
                  )}
                </h6>
                <div className="d-flex align-items-center justify-content-start mx-1">
                  <div className="time-stamp p-auto m-0">{`Since ${dayjs(
                    timestamp,
                  ).fromNow()}`}</div>
                  <span className="px-1 dot">.</span>
                  <span>
                    <FontAwesomeIcon
                      icon={faEarthAmericas}
                      className="icon earth-icon"
                      title={`${language !== null ? `${language}` : ""}${
                        country !== null ? `, ${country}` : ""
                      }`}
                    />
                  </span>
                </div>
              </div>
              <div className="content d-flex ms-auto bg-white">
                <span className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                  {likes}
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faComment} className="icon ps-2" />
                  {comments}
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faShare} className="icon ps-2" />
                  {shares}
                </span>
              </div>
            </div>
            <div className="card-text">
              <span className="hashtags">
                {hashtags &&
                  hashtags.split(" ").map((tag, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && " "}#{tag}
                    </React.Fragment>
                  ))}
              </span>
              <p className="mt-2">{body}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default PostCard;
