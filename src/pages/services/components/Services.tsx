import React from "react";
import { offers } from "../../../constants/Index";
const Services: React.FC = () => {
  return (
    <div className="services">
      <h3 className="sideheading mx-auto">Services</h3>
      <h3 className="about__title mx-auto !my-10">We Offer Services</h3>
      <div className="our-services__content">
        {offers != undefined &&
          offers.length > 0 &&
          offers.map((service) => {
            return (
              <div className="services__points">
                <div className="services__logo">{service.logo}</div>
                <div className="points__title">{service.title}</div>
                <p className="about__description !px-1">{service.desc}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Services;
