import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home";
import { useEffect } from "react";
import { getNowPlaying } from "./api/movie";
import Page from "./pages";
import Movies from "./pages/movies";
import Shows from "./pages/shows";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Page />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="shows" element={<Shows />} />
    </Route>
  )
);

function App() {
  useEffect(() => {
    getNowPlaying();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
