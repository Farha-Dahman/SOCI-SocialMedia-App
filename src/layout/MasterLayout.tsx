import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppMenu from "./components/AppMenu/AppMenu";
import AppSideBar from "./components/AppSideBar/AppSideBar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MasterLayout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user_name")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow-1 d-flex">
        <AppMenu />
        <section id="content" className="content container-fluid pb-5">
          <Outlet />
        </section>
        <AppSideBar />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;
