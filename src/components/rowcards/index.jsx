import React from "react";
import Card from "../card";
import { RowCardsContainer } from "./style";

const RowCards = ({ variant, title, data }) => {
  return (
    <>
      <h2>{title}</h2>
      <RowCardsContainer>
        {data?.map((item) => (
          <Card
            variant={variant}
            image={item?.poster_path}
            alt={item?.original_title}
          />
        ))}
      </RowCardsContainer>
    </>
  );
};

export default RowCards;
