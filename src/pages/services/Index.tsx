import "./style.css";
import React from "react";
import Carousel from "../home/components/Carousel";
import OurServices from "./components/OurServices";
import "./style.css";
import { FaFireExtinguisher } from "react-icons/fa";
import Services from "./components/Services";
const Index: React.FC = () => {
  const serviceProps = {
    id: 1,
    logo: <FaFireExtinguisher />,
    title: "Fire Fighting System",
    desc: "A fire fighting system is a set of interconnected components designed to detect, suppress, or extinguish a fire in an emergency.",
  };

  return (
    <div className="min-w-h-screen">
      <Carousel home={false} page="Services" />
      <OurServices {...serviceProps} />
      <Services />
    </div>
  );
};

export default Index;
