import React from "react";
import logo from "../../../../assets/images/logo.png";
const Logo: React.FC = () => {
  return (
    <div className="col-md-4 text-center w-sm-100 w-lg-50">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
