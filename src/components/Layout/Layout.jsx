import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BottomFooter from "../Footer/BottomFooter/BottomFooter";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="routes">
        <h2>Salom</h2>
      </div>
      <Footer />
      <BottomFooter />
    </div>
  );
};

export default Layout;
