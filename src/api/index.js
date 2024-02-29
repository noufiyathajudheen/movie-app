import axios from "./axios";

const getNowPlaying = async () => {
  return await axios
    .get("/movie/now_playing?language=en-US&page=1")
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};

const getTrending = async () => {
  return await axios
    .get("/trending/all/day?language=en-US")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export { getNowPlaying, getTrending };
