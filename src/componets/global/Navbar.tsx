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
              <p className="navbar__subtext">+971 545 418 559, +971 6 678 5591</p>
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
              <div className="navbar__linkedin">
                <FaLinkedin className="icon" />
              </div>
              <div className="navbar__instagram">
                <FaInstagram className="icon" />
              </div>
              <div className="navbar__facebook">
                <FaFacebookF className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
