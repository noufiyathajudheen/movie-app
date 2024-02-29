import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${
      import.meta.env.VITE_TMDB_ACCESS_TOKEN
    }`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
