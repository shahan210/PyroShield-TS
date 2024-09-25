import "../style.css";
import { services } from "../../../constants/Index";
import Card from "./Card";

const Services: React.FC = () => {
  return (
    <div className="home__services">
      <h3 className="sideheading text-center mb-5">Services</h3>
      <div className="services__content">
        {services != undefined &&
          services.length > 0 &&
          services.map((service) => {
            return <Card key={service.id} image={service.Image} desc={service.Desc} />;
          })}
      </div>
      <a href="#services" className="service__more">
        <button>More Services</button>
      </a>
    </div>
  );
};

export default Services;
