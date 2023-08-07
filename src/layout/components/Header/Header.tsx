import React from "react";
import Search from "./components/Search";
import Logo from "./components/Logo";
import Toolbar from "./components/Toolbar";
const Header: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex">
          <Logo />
          <Search />
          <Toolbar />
        </div>
      </nav>
    </div>
  );
};

export default Header;
