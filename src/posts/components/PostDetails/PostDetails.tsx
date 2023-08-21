import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../data-api";
import { Post } from "../../types/types";
import Loading from "../Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faEarthAmericas,
  faShare,
  faComment as solidComment,
  faHeart as solidHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import dayjs from "dayjs";

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const parsedId = parseInt(id || "", 10);
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [showImageOverlay, setShowImageOverlay] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPost(parsedId);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Not found the post:", error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <Loading />;
  }

  return (
    <div className="container-fluid desc mt-4 bg-details py-3">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-12 col-lg-7 bg-img-details">
          <div className="img-con justify-content-center align-items-center d-flex">
            <img
              src={post.image_url}
              className="postDetails-image"
              alt="post image"
              onClick={() => setShowImageOverlay(true)}
            />
          </div>
          {showImageOverlay && (
            <div className="overlay" onClick={() => setShowImageOverlay(false)}>
              <img src={post.image_url} alt="Post" />
            </div>
          )}
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5">
          <div className="d-flex d-xsm-block mt-2">
            <img
              src={post.user_avatar}
              alt="profile_picture"
              className="profile-picture"
            />
            <div>
              <h6 className="card-title ps-1">
                {post.user_name}
                {post.is_verified ? (
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
                  post.timestamp,
                ).fromNow()}`}</div>
                <span className="px-1 dot">.</span>
                <span>
                  <FontAwesomeIcon
                    icon={faEarthAmericas}
                    className="icon earth-icon"
                    title={`${
                      post.language !== null ? `${post.language}` : ""
                    }${post.country !== null ? `, ${post.country}` : ""}`}
                  />
                </span>
              </div>
            </div>
          </div>
          <article className="card-text mt-3">
            <p className="mt-2">{post.body}</p>
            <span className="hashtags">
              {post.hashtags.split(" ").map((tag, index) => (
                <React.Fragment key={index}>
                  {index > 0 && " "}#{tag}
                </React.Fragment>
              ))}
            </span>
          </article>
          <div className="d-flex ms-auto mt-5 justify-content-between details-reaction">
            <span className="d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={solidHeart} className="icon ps-2" />
              {post.likes}
            </span>
            <div className="d-flex align-items-center justify-content-center">
              <span>
                <FontAwesomeIcon icon={solidComment} className="icon ps-2" />
                {post.comments}
              </span>
              <span>
                <FontAwesomeIcon icon={faShare} className="icon ps-2" />
                {post.shares}
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-1 border reactions">
            <div className="w-50 border-end color-border like-hover">
              <div className="d-flex justify-content-center align-items-center p-1">
                <FontAwesomeIcon icon={faHeart} className="like-icon me-2" />
                <h6 className="mb-1">Like</h6>
              </div>
            </div>
            <div className="w-50 border-start color-border comment-hover">
              <div className="d-flex justify-content-center align-items-center p-1">
                <FontAwesomeIcon
                  icon={faComment}
                  className="comment-icon me-2"
                />
                <h6 className="mb-1">Comment</h6>
              </div>
            </div>
          </div>
          <div className="comment-section">
            <div className="h-50 my-2">
              <div className="container-fluid scroll comment-content d-flex justify-content-center align-items-center">
                No comments yat
              </div>
            </div>
            <div className="input-group my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Write a comment..."
                aria-label="WriteComment"
                aria-describedby="button-addon2"
              />
              <button
                className="btn comment"
                type="submit"
                id="button-addon2"
                title="send comment"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;