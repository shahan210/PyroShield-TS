import React from "react";
import "../style.css";
// import Image1 from "../../../assets/Webp/g9.webp";
// import Image2 from "../../../assets/Webp/fire-alarm-switch.webp";
// import Image3 from "../../../assets/Webp/fire3.webp";
// import Image4 from "../../../assets/Webp/fire1.webp";
import { motion } from "framer-motion";

const Quality: React.FC = () => {
  return (
    <section className="home__quality">
      <div className="quality__container">
        <h3 className="sideheading ">Quality</h3>
        <div className="quality__content">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="quality__left"
          >
            <h1 className="about__title !text-4xl">
              Building the future,
              <br /> Restoring the past.
            </h1>{" "}
            <h2 className="quality__subtitle">Fire and Safety Company in Ajman</h2>
            <p className="quality__description">
              At PYRO SHIELD Fire & Safety, we provide Annual Maintenance Contracts to Residential and Commercial
              Properties, Industries & Factories, Schools & Colleges, Oil and Petroleum Companies, Labor Camps and
              Warehouses, Hypermarkets and Supermarkets, Clinics and Hospitals, Restaurants, and Hotels. Demonstration
              and training classes are conducted as per Civil Defence regulations.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="quality__right"
          >
            <img
              loading="lazy"
              src={`https://res.cloudinary.com/dfd7rlncm/image/upload/v1729501403/g9_nfuhjl.webp`}
              alt="Fire fighter"
            />
            <img
              loading="lazy"
              src={`https://res.cloudinary.com/dfd7rlncm/image/upload/v1729501403/fire-alarm-switch_awk46v.webp`}
              alt="Fire-switch"
            />
            <img
              loading="lazy"
              src={`https://res.cloudinary.com/dfd7rlncm/image/upload/v1729501403/fire3_k2rsok.webp`}
              alt="Fire fighting"
            />
            <img
              loading="lazy"
              src={`https://res.cloudinary.com/dfd7rlncm/image/upload/v1729501402/fire1_izdikr.webp`}
              alt="Fire extinghuisher"
            />
          </motion.div>
        </div>
        <a href="">
          <button className="quality__button">Read More</button>
        </a>
      </div>
    </section>
  );
};

export default Quality;
