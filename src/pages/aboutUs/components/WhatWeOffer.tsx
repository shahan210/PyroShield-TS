import React from "react";

const WhatWeOffer: React.FC = () => {
  return (
    <div className="wwoffer">
      <div className="wwoffer__img">
        <img src="https://res.cloudinary.com/dfd7rlncm/image/upload/v1729501399/banner3_ecoafn.webp" alt="" />
      </div>
      <div className="wwoffer__content">
        <h1 className="sideheading">What We Offer</h1>
        <h1 className="about__title !text-3xl">Fire Extinguisher Supply And Refilling Services In Ajman</h1>
        <p className="about__description">
          We supply fire extinguishers such as DCP (Dry Chemical Powder) and CO2 cylinders in Ajman and other emirates
          of the UAE. We also offer maintenance of fire extinguishers. For portable fire extinguishers such as CO2, foam
          cylinders, and DCP extinguishers, we provide quarterly maintenance services, in addition to supply and
          installation in Dubai and other emirates. We also offer refilling or refurbishment services for fire
          extinguishers in offices and shops in Ajman and other emirates. Choose PYRO SHIELD Fire & Safety for
          unparalleled fire protection solutions and peace of mind. Contact us today to learn more about how we can help
          safeguard your property and ensure compliance with fire safety regulations.
        </p>
        <h3 className="about__subtitle">Providing Personalized and High Quality Services</h3>
        <p className="about__description">
          Experience personalized and high-quality services tailored to your needs. Our dedicated team ensures attention
          to detail and excellence in every aspect.
        </p>
        <div className="wwoffer__subcontents">
          <div>
            <h2 className="subcontent__title">Fire Extinguisher Supply</h2>
            <p className="about__description">
              As the best fire extinguisher supplier in Ajman, we provide a wide range of high-quality fire
              extinguishers to suit every need. Whether you require extinguishers for commercial, industrial, or
              residential use, we have the right products to ensure your safety
            </p>
          </div>
          <div>
            <h2 className="subcontent__title">Fire Evacuation Plans</h2>
            <p className="about__description">
              We offer expert services in creating effective fire evacuation plans to ensure that you and your team are
              well-prepared in case of an emergency. Our plans are designed to guide you through a safe and efficient
              evacuation process, minimizing risk and enhancing safety.
              <br />
              <br />
              Choose PYRO SHIELD Fire & Safety for unparalleled fire protection solutions and peace of mind. Contact us
              today to learn more about how we can help safeguard your property and ensure compliance with fire safety
              regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
