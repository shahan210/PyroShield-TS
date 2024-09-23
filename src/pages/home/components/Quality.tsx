import React from "react";
import "../style.css";
import Image1 from "../../../assets/Webp/g9.webp";
import Image2 from "../../../assets/Webp/fire-alarm-switch.webp";
import Image3 from "../../../assets/Webp/fire3.webp";
import Image4 from "../../../assets/Webp/fire1.webp";

const Quality: React.FC = () => {
  return (
    <div className="home__quality">
      <div className="quality__container">
        <h3 className="sideheading ">Quality</h3>
        <div className="quality__content">
          <div className="quality__left">
            <h1 className="about__title !text-4xl">
              Building the future
              <br /> Restoring the past.
            </h1>{" "}
            <h2 className="quality__subtitle">Fire and Safety Company in Ajman</h2>
            <p className="quality__description">
              At PYRO SHIELD Fire & Safety, we provide Annual Maintenance Contracts to Residential and Commercial
              Properties, Industries & Factories, Schools & Colleges, Oil and Petroleum Companies, Labor Camps and
              Warehouses, Hypermarkets and Supermarkets, Clinics and Hospitals, Restaurants, and Hotels. Demonstration
              and training classes are conducted as per Civil Defence regulations.
            </p>
          </div>
          <div className="quality__right">
            <img src={Image1} alt="Fire fighter" />
            <img src={Image2} alt="Fire-switch" />
            <img src={Image3} alt="Fire fighting" />
            <img src={Image4} alt="Fire extinghuisher" />
          </div>
        </div>
        <a href="">
          <button className="quality__button">Read More</button>
        </a>
      </div>
    </div>
  );
};

export default Quality;
