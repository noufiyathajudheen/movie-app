import React, { useEffect, useState } from "react";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../api/movies";
import RowCards from "../../components/rowcards";
import { MoviesContainer } from "./style";

const Movies = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    getNowPlayingMovies().then((response) => setNowPlaying(response?.results));
    getPopularMovies().then((response) => setPopular(response?.results));
    getTopRatedMovies().then((response) => setTopRated(response?.results));
    getUpcomingMovies().then((response) => setUpcoming(response?.results));
  }, []);
  return (
    <MoviesContainer>
      <RowCards title={"Now Playing"} data={nowPlaying} variant={"large"} />
      <RowCards title={"Popular"} data={popular} variant={"medium"} />
      <RowCards title={"Top Rated"} data={topRated} variant={"medium"} />
      <RowCards title={"Upcoming"} data={upcoming} variant={"medium"} />
    </MoviesContainer>
  );
};

export default Movies;
