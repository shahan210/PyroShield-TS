import React from "react";
import "../style.css";
import JoinImage from "../../../assets/Webp/professional.webp";
const JoinUs: React.FC = () => {
  return (
    <div className="home__join">
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
          <img src={JoinImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;