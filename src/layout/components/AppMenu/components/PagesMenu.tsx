import React from "react";
import { Link } from "react-router-dom";
import { likedPages } from "../../../../data/dummy-data";
export interface LikedPage {
  name: string;
  image: string;
  count?: number;
}
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
