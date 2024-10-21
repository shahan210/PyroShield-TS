import React from "react";
import Carousel from "../home/components/Carousel";
import About from "./components/About";
import WhatWeOffer from "./components/WhatWeOffer";

const Index: React.FC = () => {
  return (
    <div className="min-w-h-screen">
      <Carousel home={false} page="About" />
      <About />
      <WhatWeOffer />
    </div>
  );
};

export default Index;
