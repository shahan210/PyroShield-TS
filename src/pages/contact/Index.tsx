import React from "react";
import Carousel from "../home/components/Carousel";
import Form from "./components/Form";
import "./style.css";
import Map from "./components/Map";
const Index: React.FC = () => {
  return (
    <div className="min-w-h-screen">
      <Carousel home={false} page="Contact" />
      <Form />
      <Map />
    </div>
  );
};

export default Index;
