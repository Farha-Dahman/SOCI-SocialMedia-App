import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faUsers,
  faCalendar,
  faFilm,
  faImage,
  faFileLines,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
interface MenuItem {
  icon: IconDefinition;
  text: string;
}
const menuItems: MenuItem[] = [
  { icon: faChartSimple, text: "Feed" },
  { icon: faUsers, text: "Friends" },
  { icon: faCalendar, text: "Events" },
  { icon: faFilm, text: "Watch Videos" },
  { icon: faImage, text: "Photos" },
  { icon: faFileLines, text: "Files" },
];
const MainMenu: React.FC = () => {
  return (
    <nav className="menu mt-4 mb-5 shortcuts ps-4">
      {menuItems.map((item, index) => (
        <a href="#" className="mb-3 d-flex align-items-center" key={index}>
          <FontAwesomeIcon icon={item.icon} className="icon me-3" />
          <div>{item.text}</div>
        </a>
      ))}
    </nav>
  );
};

export default MainMenu;
