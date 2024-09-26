import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const FollowUs: React.FC = () => {
  return (
    <div className="fotter__flex">
      <h1 className="footer__title">Follow Us</h1>
      <div className="footer__media">
        <button className="media__btn">
          <a target="_blank" href="https://www.linkedin.com/company/pyroshields/">
            <FaLinkedinIn />
          </a>
        </button>
        <button className="media__btn">
          <a
            target="_blank"
            href="https://www.instagram.com/pyroshields?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <FaInstagram />
          </a>
        </button>
        <button className="media__btn">
          <a target="_blank" href="https://www.facebook.com/p/Pyroshields-Fire-Safety-sps-llc-61557531213838/">
            <FaFacebookF />
          </a>
        </button>
      </div>
    </div>
  );
};

export default FollowUs;
