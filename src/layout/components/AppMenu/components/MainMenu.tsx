import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { menuItems } from "../../../../data/dummy-data";
export interface MenuItem {
  icon: IconDefinition;
  text: string;
}
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
