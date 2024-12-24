import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import Title from "../Components/DynamicTitle";

const MainLayout = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className="font-body">
      <Title></Title>
      <header
        className={`border-b py-2 ${
          theme === "light" ? "bg-slate-50" : "bg-gray-800"
        } sticky top-0 z-10`}
      >
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
