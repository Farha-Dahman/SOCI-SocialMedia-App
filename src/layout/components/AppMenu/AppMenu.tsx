import React from "react";
import MainMenu from "./components/MainMenu";
import PagesMenu from "./components/PagesMenu";

const AppMenu: React.FC = () => {
  return (
    <aside
      className="app-menu collapse navbar-toggler d-lg-block col-lg-2 menu-border"
      id="app-menuContent"
    >
      <MainMenu />
      <PagesMenu />
    </aside>
  );
};

export default AppMenu;
