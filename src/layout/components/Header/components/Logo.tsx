import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
const Logo: React.FC = () => {
  return (
    <Link className="navbar-brand pe-4" to="/home">
      <img className="me-5 logo" src={logo} alt="logo image" />
    </Link>
  );
};

export default Logo;
