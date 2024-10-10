import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { motion } from "framer-motion";
import Logo from "../../../assets/images/pyroshield.png";
import Image1 from "../../../assets/images/3d-rendering-gas-cylinder.jpg";
import Image2 from "../../../assets/images//male-firefighter-station-equipped-with-suit-safety-helmet.jpg";
import Image3 from "../../../assets/images/pexels-anna-shvets-5964979.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Carousel: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

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
      <div className="mobile__menu">
        <div className="mobile__logo">
          <img src={Logo} alt="Pyroshield" />
        </div>
        <div className="Swiper__burger">
          <GiHamburgerMenu className="size-6" onClick={() => toggleMenu()} />
        </div>
      </div>
      <div className={menu ? "Swiper__mobile" : "Swiper__mobile_hide"}>
        <div className="Swiper__close">
          <IoMdClose className="size-6" onClick={() => toggleMenu()} />
        </div>
        <div className="mobile__nav">
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
          <div className="Swiper__text">
            <h3 className="Swiper__title">
              Latest Fire <br /> Safety Measures
            </h3>
            <p className="Swiper__subtitle">
              <hr className="w-20 border-2 " />
              To Ensure Safety.
            </p>{" "}
          </div>
          <div className="h-full overflow-hidden">
            <motion.img
              loading="lazy"
              whileInView={{ scale: [1.1, 1] }}
              transition={{ duration: 2 }}
              src={Image1}
              className="Swiper__image"
              alt="Image1"
            />
          </div>
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
          <div className="h-full overflow-hidden">
            <motion.img
              loading="lazy"
              whileInView={{ scale: [1.1, 1] }}
              transition={{ duration: 2 }}
              src={Image2}
              className="Swiper__image"
              alt="Image2"
            />
          </div>
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
          <div className="h-full overflow-hidden">
            <motion.img
              className="Swiper__image"
              loading="lazy"
              whileInView={{ scale: [1.1, 1] }}
              transition={{ duration: 2 }}
              src={Image3}
              alt="Image3"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
