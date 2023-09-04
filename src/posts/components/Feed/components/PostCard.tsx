import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faCertificate,
  faShare,
  faEarthAmericas,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Post } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { removePost } from "../../../data-api";
import Authorize from "../../../../auth/Authorize/Authorize";
dayjs.extend(relativeTime);

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const [visible, setVisible] = useState(false);
  const toast = useRef<Toast>(null);
  const navigate = useNavigate();

  const moveToDetails = (id: number) => {
    navigate(`/posts/${id}`);
  };
  const showConfirmation = (event: React.MouseEvent) => {
    event.stopPropagation();
    setVisible(true);
  };
  const confirmDelete = async (id: number) => {
    await removePost(id);
    toast.current?.show({
      severity: "info",
      summary: "Deleted",
      detail: "The post has been successfully deleted!",
      life: 3000,
    });
  };
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
        <Toast ref={toast} />
        <ConfirmDialog
          visible={visible}
          onHide={() => setVisible(false)}
          message="Are you sure you want to proceed?"
          header="Confirmation"
          icon="pi pi-exclamation-triangle"
          accept={() => confirmDelete(post.user_id)}
          reject={() => setVisible(false)}
        />
        <div
          onClick={() => moveToDetails(post.user_id)}
          className="card-item bg-white pointer"
        >
          {image_url !== "" ? (
            <img
              src={image_url}
              className="post-Image w-100 p-1"
              alt="post image"
            />
          ) : (
            <></>
          )}
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
                    timestamp
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
                <Authorize allowedRoles={["admin"]}>
                  <span
                    className="d-flex align-items-center justify-content-center"
                    onClick={(e) => showConfirmation(e)}
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="icon color-danger ps-2"
                    />
                  </span>
                </Authorize>
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
