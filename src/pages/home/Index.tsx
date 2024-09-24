import React from "react";

import "./style.css";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Services from "./components/Services";
import Quality from "./components/Quality";
const Index: React.FC = () => {
  return (
    <div className="">
      <Carousel />
      <div className="home__contents">
        <About />
        <Services />
      </div>
        <Quality />
    </div>
  );
};

export default Index;
