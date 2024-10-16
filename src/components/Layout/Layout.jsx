import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BottomNav from "../BottomNav/BottomNav";
import Router from "../../Router/Router";

const Layout = () => {
  return (
    <div className="layout" id="layout">
      <Navbar />
      <BottomNav />
      <div id="routes" className="routes">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
