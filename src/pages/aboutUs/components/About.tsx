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
          <h3 className="about__title">Building Trust Through Safety and Expertise.</h3>
          <p className="about__description">
            We are committed to safeguarding lives and property with our exceptional fire
            protection services. We are also one of the top fire alarm companies in the UAE and a leading supplier of
            fire-rated doors in Ajman. We excel in comprehensive fire risk assessments, specialized safety training, and
            the installation of top-quality fire alarms and extinguishers. Our dedicated team conducts regular
            maintenance checks, ensuring that all systems remain in optimal condition.
          </p>
          <p className="about__description">
            In emergencies, you can rely on our prompt and efficient response to protect what matters most. We also
            provide fire detection system installation in Ajman, UAE. We are passionate about creating secure
            environments for homes, businesses, and public spaces, ensuring peace of mind for our clients. We also
            provide fire monitoring systems in Ajman.
          </p>
        </div>
        <div className="about__right">
        <div className="wwoffer__img !rounded">
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
