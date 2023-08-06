import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppMenu from "./components/AppMenu/AppMenu";
import AppSideBar from "./components/AppSideBar/AppSideBar";
import { Outlet } from "react-router-dom";

const MasterLayout: React.FC = () => {
  return (
    <>
      <Header />
      <AppMenu />
      <Outlet />
      <AppSideBar />
      <Footer />
    </>
  );
};

export default MasterLayout;
