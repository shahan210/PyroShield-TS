import "../style.css";
import { services } from "../../../constants/Index";
import Card from "./Card";

const Services: React.FC = () => {
  return (
    <div className="home__services">
      <h3 className="sideheading text-center">Services</h3>
      <div className="services__content">
        {services.map((service) => {
          return <Card key={service.id} image={service.Image} desc={service.Desc} />;
        })}
      </div>
    </div>
  );
};

export default Services;
