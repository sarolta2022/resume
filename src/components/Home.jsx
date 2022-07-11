import React from "react";
import Fresh from "./Fresh";
import Experiences from "./Experiences";
import About from "./About";
import Contact from "./Contact";
import Weather from "./Weather";
import Github from "./Github";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Fresh />
      <Experiences />
      <About />
      <Github />
      <Contact />
    </div>
  );
};

export default Home;
