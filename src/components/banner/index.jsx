import React, { useEffect, useState } from "react";
import { BannerContainer } from "./style";
import { getTrending } from "../../api";

const Banner = () => {
  const [trending, setTrending] = useState({});

  useEffect(() => {
    getTrending().then((response) => {
      let randomIndex = Math.floor(Math.random() * response?.results?.length);
      setTrending(response?.results[randomIndex]);
    });
  }, []);
  console.log(trending);

  return (
    <BannerContainer imageUrl={trending?.backdrop_path}>
      <div className="details-container">
        <h2>{trending?.original_title || trending?.original_name}</h2>
        <span>{trending?.overview}</span>
        <button>WATCH NOW</button>
      </div>
    </BannerContainer>
  );
};

export default Banner;
