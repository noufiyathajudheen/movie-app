import axios from "./axios";

export const getNowPlayingMovies = async () => {
  return await axios
    .get("/movie/now_playing?language=en-US&page=1")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getPopularMovies = async () => {
  return await axios
    .get("/movie/popular?language=en-US&page=1")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getTopRatedMovies = async () => {
  return await axios
    .get("/movie/top_rated?language=en-US&page=1")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
export const getUpcomingMovies = async () => {
  return await axios
    .get("/movie/upcoming?language=en-US&page=1")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
