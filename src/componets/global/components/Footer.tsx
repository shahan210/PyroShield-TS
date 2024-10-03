import React from "react";
import "../style.css";
import About from "../components/About";  
import Links from "../components/Links";
import Services from "../components/Services";
import FollowUs from "../components/FollowUs";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <About />
        <Links />
        <Services />
        <FollowUs />
      </div>
      <div className="footer__copyright ">
        <p>© 2024 Pyro Shield Fire and Safety Services (SPS LLC). All rights reserved</p>
        <div className="footer__policy">
          <div className="terms__policy">Privacy Policy</div>
          <div className="terms__policy">Terms & Conditions</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
