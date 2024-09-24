import React from "react";
import { cardService } from "./model";
type Props = {
  image: string;
  desc: string;
};
import { motion } from "framer-motion";
const Card: React.FC<Props> = ({ image, desc }) => {
  return (
    <div className="services__card">
      <motion.img
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 2 }}
       src={image} alt={desc} className="services__img" />
      <div className="services__title">{desc}</div>
    </div>
  );
};

export default Card;
