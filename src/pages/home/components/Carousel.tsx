import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import Logo from "../../../assets/images/pyroshield.png";
const baseUrl = import.meta.env.VITE_IMAGE_URL;

const Carousel: React.FC = () => {
  return (
    <section className="Swiper">
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
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="Swiper__text">
            <h3 className="Swiper__title">
              Latest Fire <br /> Safety Measures
            </h3>
            <p className="Swiper__subtitle">
              <hr className="w-20 border-2 " />
              To Ensure Safety.
            </p>{" "}
          </div>
          <motion.img
            loading="lazy"
            whileInView={{ scale: [1.1, 1] }}
            transition={{ duration: 2 }}
            src={`${baseUrl}3d-rendering-gas-cylinder.webp`}
            alt="Image1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="Swiper__text">
            <h3 className="Swiper__title">
              Skilled Labors <br /> and Expert Team
            </h3>
            <p className="Swiper__subtitle">
              <hr className="w-20 border-2 " />
              To Ensure Safety.
            </p>{" "}
          </div>
          <motion.img
            loading="lazy"
            whileInView={{ scale: [1.1, 1] }}
            transition={{ duration: 2 }}
            src={`${baseUrl}male-firefighter-station-equipped-with-suit-safety-helmet.webp`}
            alt="Image2"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="Swiper__text">
            <h3 className="Swiper__title">
              Regular <br /> Maintenance
            </h3>
            <p className="Swiper__subtitle">
              <hr className="w-20 border-2 " />
              To Ensure Safety.
            </p>{" "}
          </div>
          <motion.img
            loading="lazy"
            whileInView={{ scale: [1.1, 1] }}
            transition={{ duration: 2 }}
            src={`${baseUrl}pexels-anna-shvets-5964979.webp`}
            alt="Image3"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
