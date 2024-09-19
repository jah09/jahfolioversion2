import React from "react";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <div className=" ">
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div></div>
    </div>
  );
};

export default Layout;
