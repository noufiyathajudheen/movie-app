import React, { useEffect, useState } from "react";
import { getTrending } from "../../api";
import { RowCardsContainer } from "./style";

const RowCards = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending().then((response) => {
      setTrending(response?.results);
    });
  }, []);
  console.log(trending);

  return (
    <RowCardsContainer>
      {trending?.map((item) => (
        <img
          src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
          alt={item?.original_title}
        />
      ))}
    </RowCardsContainer>
  );
};

export default RowCards;
