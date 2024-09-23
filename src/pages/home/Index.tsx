import React from "react";

import "./style.css";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Services from "./components/Services";
const Index: React.FC = () => {
  return (
    <div className="">
      <Carousel />
      <div className="home__contents">
        <About />
        <Services />
      </div>
    </div>
  );
};

export default Index;
