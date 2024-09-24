import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative">
      <div className=" h-12 ">
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div className=" absolute ">
        <Footer />
      </div>
       
    </div>
  );
};

export default Layout;
