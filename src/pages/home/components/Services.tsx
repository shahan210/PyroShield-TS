import "../style.css";
import { services } from "../../../constants/Index";
import Card from "./Card";
import { motion } from "framer-motion";
const Services: React.FC = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0,  }}
      animate={{ y: 0, opacity: 1,  }}
      transition={{ duration: 2 }}
      className="home__services"
    >
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
    </motion.section>
  );
};

export default Services;
