import React from "react";
import Copyright from "./components/Copyright";
import Logo from "./components/Logo";
import Contact from "./components/Contact";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer py-3">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <Copyright />
          <Logo />
          <Contact />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
