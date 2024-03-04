import axios from "./axios";

const getTrending = async () => {
  return await axios
    .get("/trending/all/day?language=en-US")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

const getTrendingMovies = async () => {
  return await axios
    .get("/trending/movie/day?language=en-US")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

const getTrendingShows = async () => {
  return await axios
    .get("/trending/tv/day?language=en-US")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export { getTrending, getTrendingMovies, getTrendingShows };
