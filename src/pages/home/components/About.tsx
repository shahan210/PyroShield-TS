import { motion } from "framer-motion";
const baseUrl = import.meta.env.VITE_IMAGE_URL;

const About: React.FC = () => {
  console.log(baseUrl);

  return (
    <section className="home__about">
      <h3 className="sideheading">About</h3>
      <div className="about__content">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          // viewport={{ once: true }}
          className="about__left"
        >
          <h1 className="about__title">
            Best Fire Extinguisher
            <br /> Supplier In Ajman
          </h1>
          <p className="about__description">
            Pyro Shield Fire and Safety Services (SPS LLC) is the best AMC fire contractor in Ajman, UAE. It was founded
            by a team of dedicated professionals with extensive experience in the fire and safety services field.
            Operating under the guiding principle of “Safety First, Always and Everywhere,” we ensure that businesses
            and individuals alike receive the highest level of protection and peace of mind.
          </p>
          <p className="about__description">
            At Pyro Shield, we offer a wide range of fire safety services, including fire risk assessments, fire
            evacuation planning, emergency planning, and the installation and maintenance of advanced fire suppression
            systems. Our mission is to safeguard lives and property by delivering tailored solutions that address the
            unique needs of each client. With a strong focus on innovation, reliability, and exceptional customer
            service, we are proud to be a trusted partner in fire safety and fire-rated door supply in the UAE.
          </p>
          <div className="about__button">
            <button className="btn-about">Read More</button>
            <button className="btn-contact">Contact Us</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="about__right"
        >
          <div className="about__img">
            <img src={`${baseUrl}g9.webp`} alt="Fire Fighter" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
