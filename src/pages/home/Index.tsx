import React from "react";

import "../style.css";
import Carousel from "./components/Carousel";
import About from "./components/About";
const Index: React.FC = () => {
  return (
    <div className="">
      <Carousel />
      <div className="home__contents">
        <About />
      </div>
    </div>
  );
};

export default Index;
