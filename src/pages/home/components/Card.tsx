import React from "react";
type Props = {
  image: string;
  desc: string;
};
const Card: React.FC<Props> = ({ image, desc }) => {
  return (
    <div className="services__card">
      <img src={image} alt={desc} className="services__img" />
      <div className="services__title">{desc}</div>
    </div>
  );
};

export default Card;
