import React from "react";
import FashionDesign from "../../../../assets/images/Fashion-Design.webp";
import graphicDesign from "../../../../assets/images/graphicdesign.jpg";
import uiCommunity from "../../../../assets/images/ui-community.webp";
import webDesign from "../../../../assets/images/web-design.jpg";

const PagesMenu: React.FC = () => {
  return (
    <div id="pages-liked" className="pages-liked pb-5">
      <div className="title m-3">pages you like</div>
      <nav className="ps-3">
        <a href="#" className="mb-3 d-flex align-items-center">
          <img src={FashionDesign} alt="profile_picture" className="me-3" />
          <div>Fashion Design</div>
        </a>
        <a href="#" className="mb-3 d-flex align-items-center">
          <img src={graphicDesign} alt="profile_picture" className="me-3" />
          <div>Graphic Design</div>
          <span className="d-flex align-items-center justify-content-center ms-auto me-1">
            25
          </span>
        </a>
        <a href="#" className="mb-3 d-flex align-items-center">
          <img src={uiCommunity} alt="profile_picture" className="me-3" />
          <div>UI/UX Community</div>
        </a>
        <a href="#" className="mb-3 d-flex align-items-center">
          <img src={webDesign} alt="profile_picture" className="me-3" />
          <div>Web Designer</div>
        </a>
      </nav>
    </div>
  );
};

export default PagesMenu;
