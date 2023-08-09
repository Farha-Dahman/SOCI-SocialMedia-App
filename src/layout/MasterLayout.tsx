import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppMenu from "./components/AppMenu/AppMenu";
import AppSideBar from "./components/AppSideBar/AppSideBar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Hooks/useUser";
const MasterLayout: React.FC = () => {
  const { username } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/login");
    }
  }, [username, navigate]);

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
