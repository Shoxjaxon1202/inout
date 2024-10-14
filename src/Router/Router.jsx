import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Vakansiya from "../Pages/Vakansiya";
import Reviews from "../Pages/Reviews";
import NotFound from "../Pages/NotFound";
import Videos from "../UI/Videos";
import Allteam from "../UI/AllTeam";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/vakansiya" element={<Vakansiya />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/allteam" element={<Allteam />} />
      <Route
        path="/videos"
        element={
          <h2 style={{ color: "white", textAlign: "center", padding: "20px" }}>
            Videolar
          </h2>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
