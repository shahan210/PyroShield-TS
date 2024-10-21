import React from "react";

import "./style.css";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Services from "./components/Services";
import Quality from "./components/Quality";
import JoinUs from "./components/JoinUs";
const Index: React.FC = () => {
  return (
    <div className="min-w-h-screen">
      <Carousel home page=""/>
      <div className="home__contents">
        <About />
        <Services />
      </div>
      <Quality />
      <JoinUs />
    </div>
  );
};

export default Index;
