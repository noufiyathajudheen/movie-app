import React, { Fragment } from "react";
import Card from "../card";
import { RowCardsContainer } from "./style";

const RowCards = ({ variant, title, data }) => {
  return (
    <>
      <h2>{title}</h2>
      <RowCardsContainer>
        {data?.map((item) => (
          <Fragment key={item?.id}>
            <Card
              variant={variant}
              image={item?.poster_path}
              alt={item?.original_title}
            />
          </Fragment>
        ))}
      </RowCardsContainer>
    </>
  );
};

export default RowCards;
