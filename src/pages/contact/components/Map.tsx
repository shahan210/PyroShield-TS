import React from "react";

const Map: React.FC = () => {
  return (
    <div className="contact__map">
      <div className="map__contents">
        <div className="content__left">
          <h3 className="sideheading">Get in touch</h3>
          <h3 className="content__title">Keep In Touch With Us.</h3>
        </div>
        <p className="contact__description">
          We are dedicated to the safety of our guests and employees and have updated our safety measures. We believe in
          Simple, Creative, Modern and Flexible Design Standards with a Retina and Responsive Approach.We are dedicated
          to the safety of our guests and employees and have updated our safety measures. We believe in Simple,
          Creative, Modern and Flexible Design Standards with a Retina and Responsive Approach.
        </p>
      </div>
      <div className="map-iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1801.6131295281148!2d55.5502691!3d25.4306981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7d4520e104f%3A0xfc1843acd113c748!2sPyroshield%20Fire%20and%20Safety%20(S.P.S-L.L.C)!5e0!3m2!1sen!2sae!4v1729685802778!5m2!1sen!2sae"
          width="100%"
          height="400"
          style={{ border: "0px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
