import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SwiperImage1 from "../../../assets/Webp/3d-rendering-gas-cylinder.webp";
import SwiperImage2 from "../../../assets/Webp/male-firefighter-station-equipped-with-suit-safety-helmet.webp";
import SwiperImage3 from "../../../assets/Webp/pexels-anna-shvets-5964979.webp";
import { motion } from "framer-motion";
import Logo from "../../../assets/images/pyroshield.png";
const Carousel: React.FC = () => {
  return (
    <div className="Swiper">
      <div className="Swiper__menu">
        <div className="Swiper__logo">
          <img src={Logo} alt="Pyroshield" />
        </div>
        <div className="Swiper__nav">
          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <motion.div whileInView={{ opacity: [0.5, 1] }} transition={{ duration: 2 }} className="Swiper__text">
            <h3 className="Swiper__title">
              Latest Fire <br /> Safety Measures
            </h3>
            <p className="Swiper__subtitle">
              <hr className="w-20 border-2 " />
              To Ensure Safety.
            </p>{" "}
          </motion.div>
          <motion.img
            // loading="lazy"
            whileInView={{ scale: [1.1, 1] }}
            transition={{ duration: 2 }}
            src={SwiperImage1}
            alt="Image1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <motion.div whileInView={{ opacity: [0.5, 1] }} transition={{ duration: 1 }} className="Swiper__text">
            <h3 className="Swiper__title">
              Skilled Labors <br /> and Expert Team
            </h3>
            <p className="Swiper__subtitle">
              <hr className="w-20 border-2 " />
              To Ensure Safety.
            </p>{" "}
          </motion.div>
          <motion.img
            // loading="lazy"
            whileInView={{ scale: [1.1, 1] }}
            transition={{ duration: 2 }}
            src={SwiperImage2}
            alt="Image2"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <motion.div whileInView={{ opacity: [0.5, 1] }} transition={{ duration: 1 }} className="Swiper__text">
            <h3 className="Swiper__title">
              Regular <br /> Maintenance
            </h3>
            <p className="Swiper__subtitle">
              <hr className="w-20 border-2 " />
              To Ensure Safety.
            </p>{" "}
          </motion.div>
          <motion.img
            // loading="lazy"
            whileInView={{ scale: [1.1, 1] }}
            transition={{ duration: 2 }}
            src={SwiperImage3}
            alt="Image3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
