import React from "react";
import story1 from "../../../../assets/images/story1.webp";
import story2 from "../../../../assets/images/story2.webp";
import story3 from "../../../../assets/images/story3.jpg";
import story4 from "../../../../assets/images/story4.jpg";
import story5 from "../../../../assets/images/story5.jpg";
import story6 from "../../../../assets/images/story6.jpg";
import story7 from "../../../../assets/images/story7.jpg";
const Story: React.FC = () => {
  return (
    <>
      <div className="d-block m-1 col story position-relative">
        <img src={story1} alt="story" className="storyImg" />
        <div className="user-Info d-flex position-absolute align-items-center">
          <img
            src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=sally"
            alt="profile_picture"
            className="me-1 profileImg"
          />
          <h6 className="card-text">Alex Guerrero</h6>
        </div>
      </div>
      <div className="m-1 col story position-relative">
        <img src={story2} alt="story" className="storyImg" />
        <div className="user-Info d-flex position-absolute align-items-center">
          <img
            src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=ali"
            alt="profile_picture"
            className="me-1 profileImg"
          />
          <h6 className="card-text name">Ronald Roberts</h6>
        </div>
      </div>
      <div className="m-1 col story position-relative">
        <img src={story3} alt="story" className="storyImg" />
        <div className="user-Info d-flex position-absolute align-items-center">
          <img
            src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=sara"
            alt="profile_picture"
            className="me-1 profileImg"
          />
          <h6 className="card-text">Nancy Lee</h6>
        </div>
      </div>
      <div className="m-1 col story position-relative">
        <img src={story4} alt="story" className="storyImg" />
        <div className="user-Info d-flex position-absolute align-items-center">
          <img
            src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=nick"
            alt="profile_picture"
            className="me-1 profileImg"
          />
          <h6 className="card-text">Nick Loren</h6>
        </div>
      </div>
      <div className="m-1 col story position-relative">
        <img src={story5} alt="story" className="storyImg" />
        <div className="user-Info d-flex position-absolute align-items-center">
          <img
            src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Jerry"
            alt="profile_picture"
            className="me-1 profileImg"
          />
          <h6 className="card-text">Jerry Jordan</h6>
        </div>
      </div>
      <div className="sm-display m-1 col story position-relative">
        <img src={story6} alt="story" className="storyImg" />
        <div className="user-Info d-flex position-absolute align-items-center">
          <img
            src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Marie"
            alt="profile_picture"
            className="me-1 profileImg"
          />
          <h6 className="card-text">Marie Jacksone</h6>
        </div>
      </div>
      <div className="sm-display m-1 col story position-relative">
        <img src={story7} alt="story" className="storyImg" />
        <div className="user-Info d-flex position-absolute align-items-center">
          <img
            src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=alla"
            alt="profile_picture"
            className="me-1 profileImg"
          />
          <h6 className="card-text">Ali Jack</h6>
        </div>
      </div>
    </>
  );
};

export default Story;
