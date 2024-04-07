import React, { useEffect, useState } from "react";
import {
  getAiringTodayShows,
  getOnTheAirShows,
  getPopularShows,
  getTopRatedShows,
} from "../../api/shows";
import RowCards from "../../components/rowcards";
import { ShowsContainer } from "./style";

const Shows = () => {
  const [airingToday, setAiringToday] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    getAiringTodayShows().then((response) => setAiringToday(response?.results));
    getOnTheAirShows().then((response) => setOnTheAir(response?.results));
    getPopularShows().then((response) => setPopular(response?.results));
    getTopRatedShows().then((response) => setTopRated(response?.results));
  }, []);
  return (
    <ShowsContainer>
      <RowCards title={"Airing Today"} data={airingToday} variant={"large"} />
      <RowCards title={"On The Air"} data={onTheAir} variant={"medium"} />
      <RowCards title={"Popular"} data={popular} variant={"medium"} />
      <RowCards title={"Top Rated"} data={topRated} variant={"medium"} />
    </ShowsContainer>
  );
};

export default Shows;
