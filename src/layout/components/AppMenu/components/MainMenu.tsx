import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faUsers,
  faCalendar,
  faFilm,
  faImage,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

const MainMenu: React.FC = () => {
  return (
    <nav className="menu mt-4 mb-5 shortcuts ps-4">
      <a href="#" className="mb-3 d-flex align-items-center">
        <FontAwesomeIcon icon={faChartSimple} className="icon me-3" />
        <div>Feed</div>
      </a>
      <a href="#" className="mb-3 d-flex align-items-center">
        <FontAwesomeIcon icon={faUsers} className="icon me-3" />
        <div>Friends</div>
      </a>
      <a href="#" className="mb-3 d-flex align-items-center">
        <FontAwesomeIcon icon={faCalendar} className="icon me-3" />
        <div>Events</div>
      </a>
      <a href="#" className="mb-3 d-flex align-items-center">
        <FontAwesomeIcon icon={faFilm} className="icon me-3" />
        <div>Watch Videos</div>
      </a>
      <a href="#" className="mb-3 d-flex align-items-center">
        <FontAwesomeIcon icon={faImage} className="icon me-3" />
        <div>Photos</div>
      </a>
      <a href="#" className="mb-3 d-flex align-items-center">
        <FontAwesomeIcon icon={faFileLines} className="icon me-3" />
        <div>Files</div>
      </a>
    </nav>
  );
};

export default MainMenu;
