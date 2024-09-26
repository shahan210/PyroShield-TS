import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
const Services: React.FC = () => {
  return (
    <div className="fotter__flex">
      <h1 className="footer__title">Services</h1>
      <ol className="footer__links">
        <li>
          <a className="footer__link" href="#services">
            Annual Maintenance Contract(AMC)
          </a>
        </li>
        <li>
          <a className="footer__link" href="#services">
            Fire Alarm System
          </a>
        </li>
        <li>
          <a className="footer__link" href="#services">
            Fire Fighting System
          </a>
        </li>
        <li>
          {" "}
          <a className="footer__link" href="#services">
            Fire Extinguisher
          </a>
        </li>
        <li>
          {" "}
          <a className="footer__link" href="#services">
FM200       </a>
        </li>
        <li>
          {" "}
          <a className="footer__link" href="#services">
            Public Address PAVA
          </a>
        </li>
        <li>
          {" "}
          <a className="footer__link" href="#services">
            Central Battery CBS
          </a>
        </li>
        <li>
          {" "}
          <a className="footer__link footer__all" href="#services">
            All Services <FaExternalLinkAlt />
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Services;
