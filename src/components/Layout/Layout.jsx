import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BottomFooter from "../Footer/BottomFooter/BottomFooter";
import BottomNav from "../BottomNav/BottomNav";
import Router from "../../Router/Router";


const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <BottomNav />
      <div className="routes">
        <Router />
      </div>
      <Footer />
      <BottomFooter />
    </div>
  );
};

export default Layout;
