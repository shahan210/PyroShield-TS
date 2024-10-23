import React from "react";
import { PyroServices } from "../../../constants/Index";
type PyroServicesProps = {
  id: number;
  logo: JSX.Element;
  title: string;
  desc: string;
};
const OurServices: React.FC<PyroServicesProps> = () => {
  return (
    <div className="our-services">
      <div className="sideheading !text-center !mb-10">our services</div>
      <div className="our-services__content">
        {PyroServices !== undefined &&
          PyroServices.length > 0 &&
          PyroServices.map((service) => {
            return (
              <div className="our-services__points">
                <div className="points__logo">{service.logo}</div>
                <div className="subcontent__title !p-0 !m-0">{service.title}</div>
                <p className="about__description">{service.desc}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OurServices;
