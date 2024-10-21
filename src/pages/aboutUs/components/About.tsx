import React from "react";
import "../style.css";

const About: React.FC = () => {
  return (
    <div className="about__about">
      <div className="about__contents">
        <div className="about__left">
          <h1 className="sideheading">About Us</h1>
          <h3 className="about__title">Who We Are</h3>
          <h3 className="about__subtitle">Best Fire Protection Company In UAE</h3>
          <div className="about__description">
            At PYRO SHIELD Fire & Safety, we provide Annual Maintenance Contracts to Residential and Commercial
            Properties, Industries & Factories, Schools & Colleges, Oil and Petroleum Companies, Labor Camps and
            Warehouses, Hypermarkets and Supermarkets, Clinics and Hospitals, Restaurants, and Hotels. Demonstration and
            training classes are conducted as per Civil Defence regulations.
          </div>
        </div>
        <div className="about__right">
          <div className="about__img !w-[80%]">
            <img
              src="https://res.cloudinary.com/dfd7rlncm/image/upload/v1729501398/ab_pvwe30.webp"
              alt="Construction worker"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
