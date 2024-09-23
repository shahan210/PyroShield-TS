import React, { lazy, Suspense } from "react";
import "../style.css";
import { services } from "../../../constants/Index";
const LazyImage = lazy(() => import("./Card"));

const Services: React.FC = () => {
  return (
    <div className="home__services">
      <h3 className="sideheading text-center">Services</h3>
      <div className="services__content">
        {services.map((service) => {
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <LazyImage key={service.id} image={service.Image} desc={service.Desc} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
