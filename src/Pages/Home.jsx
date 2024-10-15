import React from "react";
import Intro from "../UI/Intro";
import Places from "../UI/Places";
import WhatWeDo from "../UI/WhatWeDo";
import Team from "../UI/Team";
import Counts from "../UI/Counts";
import Mijozlar from "../UI/Mijozlar";
import Contact from "./Contact";
import Comments from "../UI/Comments";
import AboutCount from "../UI/AboutCount";

const Home = () => {
  return (
    <main className="main">
      <Intro />
      <Places />
      <WhatWeDo />
      <Team />
      <Counts />
      <Mijozlar />
      <Contact />
      <AboutCount/>
      <Comments />
    </main>
  );
};

export default Home;
