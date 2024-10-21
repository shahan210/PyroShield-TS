import React from "react";
import "../style.css";
// import JoinImage from "../../../assets/Webp/professional.webp";
import { motion } from "framer-motion";

const JoinUs: React.FC = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className="home__join"
    >
      <div className="join__content">
        <div className="join__left">
          <h3 className="sideheading">Join Us</h3>
          <h1 className="about__title !text-4xl">Stay Updated!</h1>
          <h2 className="join__subtitle">Subscribe to stay up to date on all the latest news</h2>
          <form action="#" method="post" className="join__form">
            <div className="subscribe">
              <input className="form__input" type="email" placeholder="Email" name="email" required disabled />
              <button className="form__btn" type="submit" disabled>
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="join__right">
          <img loading="lazy" src={`https://res.cloudinary.com/dfd7rlncm/image/upload/v1729501406/professional_oqj0bl.webp`} alt="professionals" />
        </div>
      </div>
    </motion.section>
  );
};

export default JoinUs;
