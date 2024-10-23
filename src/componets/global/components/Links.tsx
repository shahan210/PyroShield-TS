import React from "react";

const Links: React.FC = () => {
  return (
    <div className="fotter__flex">
      <h1 className="footer__title">Links</h1>
      <ol className="footer__links">
        <li>
          <a className="footer__link" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="footer__link" href="/about">
            About Us
          </a>
        </li>
        <li>
          <a className="footer__link" href="/services">
            Services
          </a>
        </li>
        <li>
          <a className="footer__link" href="#Blog">
            Blog
          </a>
        </li>
        <li>
          <a className="footer__link" href="/contact">
            Contact
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Links;
