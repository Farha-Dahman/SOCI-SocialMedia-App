import React from "react";
import { Link } from "react-router-dom";
import fashionDesign from "../../../../assets/images/Fashion-Design.webp";
import graphicDesign from "../../../../assets/images/graphicdesign.jpg";
import uiCommunity from "../../../../assets/images/ui-community.webp";
import webDesign from "../../../../assets/images/web-design.jpg";
interface LikedPage {
  name: string;
  image: string;
  count?: number;
}
const likedPages: LikedPage[] = [
  { name: "Fashion Design", image: fashionDesign },
  { name: "Graphic Design", image: graphicDesign, count: 25 },
  { name: "UI/UX Community", image: uiCommunity },
  { name: "Web Designer", image: webDesign },
];
const PagesMenu: React.FC = () => {
  return (
    <div id="pages-liked" className="pages-liked pb-5">
      <div className="title m-3">pages you like</div>
      <nav className="ps-3">
        {likedPages.map((page, index) => (
          <Link to="#" className="mb-3 d-flex align-items-center" key={index}>
            <img src={page.image} alt="profile_picture" className="me-3" />
            <div>{page.name}</div>
            {page.count !== undefined && (
              <span className="d-flex align-items-center justify-content-center ms-auto me-1">
                {page.count}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default PagesMenu;
