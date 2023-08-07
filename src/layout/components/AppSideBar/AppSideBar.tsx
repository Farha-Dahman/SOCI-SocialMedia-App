import React from "react";
import Search from "./components/Search";
import Friends from "./components/Friends";

const AppSideBar: React.FC = () => {
  return (
    <aside
      className="collapse navbar-toggler col-lg-3 friends d-lg-block"
      id="friendsContent"
    >
      <Search />
      <Friends />
    </aside>
  );
};

export default AppSideBar;
