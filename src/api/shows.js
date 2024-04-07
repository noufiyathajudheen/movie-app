import axios from "./axios";

export const getAiringTodayShows = async () => {
  return await axios
    .get("/tv/airing_today?language=en-US&page=1")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getOnTheAirShows = async () => {
  return await axios
    .get("/tv/on_the_air?language=en-US&page=1")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getPopularShows = async () => {
  return await axios
    .get("/tv/popular?language=en-US&page=1")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getTopRatedShows = async () => {
  return await axios
    .get("/tv/top_rated?language=en-US&page=1")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
