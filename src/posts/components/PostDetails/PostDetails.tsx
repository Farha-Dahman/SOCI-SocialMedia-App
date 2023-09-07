import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost, removePost } from "../../data-api";
import { Post } from "../../types/types";
import Loading from "../Loading";
import "../PostDetails/PostDetails.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faEarthAmericas,
  faShare,
  faComment,
  faHeart,
  faPaperPlane,
  faEllipsis,
  faBookmark,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import dayjs from "dayjs";
import Authorize from "../../../auth/Authorize/Authorize";
import { usePostsStore } from "../../../context/posts-store";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const parsedId = +id!;
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [visible, setVisible] = useState(false);
  const { savedPosts, addSavedPost, removeSavedPost } = usePostsStore();
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);

  const removePostButton = async (user_id: number) => {
    await removePost(user_id);
    navigate("/");
  };
  const savedPostButton = (post: Post) => {
    if (
      !savedPosts.some((savedPost: Post) => savedPost.user_id === post.user_id)
    ) {
      addSavedPost(post);
      toast.current?.show({
        severity: "info",
        summary: "Saved",
        detail: "The post has been successfully saved!",
        life: 3000,
      });
    }
  };
  const unSavePost = (postId: number) => {
    removeSavedPost(postId);
  };

  useEffect(() => {
    localStorage.setItem("savedPosts", JSON.stringify(savedPosts));
  }, [savedPosts]);

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

  if (!post) return <Loading />;
  const isPostSaved = savedPosts.some(
    (savedPost) => savedPost.user_id === post.user_id,
  );

  const confirmDelete = () => {
    removePostButton(post.user_id);
    toast.current?.show({
      severity: "info",
      summary: "Deleted",
      detail: "The post has been successfully deleted!",
      life: 3000,
    });
  };
  const cancelDelete = () => {
    toast.current?.show({
      severity: "warn",
      summary: "Not Deleted",
      detail: "This process not completed!",
      life: 3000,
    });
  };

  return (
    <div className="mb-5 vh-lg-100 w-100">
      <div className="container-fluid desc mt-4 bg-details">
        <div className="row justify-content-center h-100">
          {post.image_url !== "" ? (
            <div className="col-sm-12 col-md-12 col-lg-7 bg-img-details ps-0">
              <div className="img-con justify-content-center align-items-center d-flex">
                <div className="card flex justify-content-center">
                  <Image
                    src={post.image_url}
                    alt="post image"
                    className="postDetails-image"
                    width="250"
                    preview
                  />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div
            className={`col-sm-12 col-md-12 ${
              post.image_url ? "col-lg-5" : "px-5"
            } mb-5 vh-100`}
          >
            <div className="d-flex justify-content-between align-items-center">
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
              <div>
                <FontAwesomeIcon
                  icon={faEllipsis}
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                />
                <Toast ref={toast} />
                <ConfirmDialog
                  visible={visible}
                  onHide={() => setVisible(false)}
                  message="Are you sure you want to proceed?"
                  header="Confirmation"
                  icon="pi pi-exclamation-triangle"
                  accept={confirmDelete}
                  reject={cancelDelete}
                  className="confirm-dialog"
                />
                <ul className="dropdown-menu">
                  <li>
                    {isPostSaved ? (
                      <button
                        className="dropdown-item justify-content-center"
                        title="Unsave Post"
                        onClick={() => {
                          unSavePost(post.user_id);
                          toast.current?.show({
                            severity: "info",
                            summary: "Saved",
                            detail:
                              "The post has been successfully deleted from saved items!",
                            life: 3000,
                          });
                          navigate("/savedPosts");
                        }}
                      >
                        <FontAwesomeIcon icon={faBookmark} className="me-2" />
                        Unsave Post
                      </button>
                    ) : (
                      <button
                        className="dropdown-item justify-content-center"
                        title="Save Post"
                        onClick={() => savedPostButton(post)}
                      >
                        <FaRegBookmark className="me-2" />
                        Save Post
                      </button>
                    )}
                  </li>
                  <li>
                    <Authorize allowedRoles={["admin"]}>
                      <button
                        className="dropdown-item"
                        title="Delete Post"
                        onClick={() => setVisible(true)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                        Delete Post
                      </button>
                    </Authorize>
                  </li>
                </ul>
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
                <FontAwesomeIcon icon={faHeart} className="icon ps-2" />
                {post.likes}
              </span>
              <div className="d-flex align-items-center justify-content-center">
                <span>
                  <FontAwesomeIcon icon={faComment} className="icon ps-2" />
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
                  <FaRegHeart className="like-icon me-2" />
                  <h6 className="mb-1">Like</h6>
                </div>
              </div>
              <div className="w-50 border-start color-border comment-hover">
                <div className="d-flex justify-content-center align-items-center p-1">
                  <FaRegComment className="comment-icon me-2" />
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
    </div>
  );
};

export default PostDetails;
