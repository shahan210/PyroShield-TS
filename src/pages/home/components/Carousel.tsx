import { motion } from "framer-motion";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../../../assets/images/pyroshield.png";

type Props = {
  home: boolean;
  page: string;
};
const Carousel: React.FC<Props> = ({ home, page }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <section className={home ? "Swiper_home" : "Swiper__page"}>
      <div className="Swiper__menu">
        <div className="Swiper__logo">
          <img src={Logo} alt="Pyroshield" />
        </div>
        <div className="Swiper__nav">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <Link to={"/about"}>
            <p>About Us</p>
          </Link>
          <Link to={"/services"}>
            <p>Services</p>
          </Link>
          <Link to={"/contact"}>
            <p>Contact</p>
          </Link>
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
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className={home ? "hidden" : "page__image"}>
        <div className="page__content"></div>
        <img
          src={`https://res.cloudinary.com/dfd7rlncm/image/upload/v1729501406/safety-extinguisher-instrument-utility-faucet_v9xjxv.webp`}
          alt="safety-extinguisher-instrument-utility-faucet"
        />
        <div className="page__nav">
          <Link to={"/"}>
            <p className="text-red-600 cursor-pointer">Home</p>
          </Link>
          {">>"} <p>{page}</p>
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
        className={home ? "mySwiper" : "hidden"}
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
              src="https://res.cloudinary.com/dfd7rlncm/image/upload/v1729501233/3d-rendering-gas-cylinder_kxphg9.webp"
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
              src="https://res.cloudinary.com/dfd7rlncm/image/upload/v1729501404/male-firefighter-station-equipped-with-suit-safety-helmet_mp1yrr.webp"
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
              src="https://res.cloudinary.com/dfd7rlncm/image/upload/v1729501406/pexels-anna-shvets-5964979_ib11vq.webp"
              alt="Image3"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
