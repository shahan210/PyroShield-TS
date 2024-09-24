import React from "react";
import PyroLogo from "../../assets/images/favicon.png";
import "./style.css";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={PyroLogo} />
        <div className="navbar__right">
          <div className="navbar__text">
            <div className="navbar__heading">
              <IoCall className="navbar__icon" />
              {/* <span>Call Us</span> */}
              <p className="navbar__subtext">+971 54 541 8559, +971 6678 5591</p>
            </div>
          </div>
          <div className="navbar__text">
            <div className="navbar__heading">
              <MdOutlineEmail className="navbar__icon" />
              {/* <span>Email</span> */}
              <p className="navbar__subtext">info@pyroshields.com</p>
            </div>
          </div>
          <div className="navbar__text_">
            <div className="navbar__heading_media">
              <a href="https://www.linkedin.com/company/pyroshields/" target="blank" className="navbar__linkedin">
                <FaLinkedin className="icon" />
              </a>
              <a
                href="https://www.instagram.com/pyroshields?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="blank"
                className="navbar__instagram"
              >
                <FaInstagram className="icon" />
              </a>
              <a
                href="https://www.facebook.com/p/Pyroshields-Fire-Safety-sps-llc-61557531213838/"
                target="blank"
                className="navbar__facebook"
              >
                <FaFacebookF className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
