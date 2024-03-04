import React from "react";
import { CardContainer } from "./style";

const Card = ({ image, alt, variant }) => {
  return (
    <CardContainer variant={variant}>
      <img src={`https://image.tmdb.org/t/p/original${image}`} alt={alt} />
    </CardContainer>
  );
};

export default Card;
