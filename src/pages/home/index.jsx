import React, { useEffect, useState } from "react";
import Banner from "../../components/banner";
import { HomeContainer } from "./style";
import RowCards from "../../components/rowcards";
import { getTrending, getTrendingMovies, getTrendingShows } from "../../api";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  useEffect(() => {
    getTrending().then((response) => {
      setTrending(response?.results);
    });
    getTrendingMovies().then((response) => {
      setMovies(response?.results);
    });
    getTrendingShows().then((response) => {
      setShows(response?.results);
    });
  }, []);
  console.log(shows);

  return (
    <HomeContainer>
      <Banner />
      <RowCards title={"Trending"} data={trending} variant={"large"} />
      <RowCards title={"Movies"} data={movies} variant={"medium"} />
      <RowCards title={"Shows"} data={shows} />
    </HomeContainer>
  );
};

export default Home;
