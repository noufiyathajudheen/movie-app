import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Page from "./pages";
import Home from "./pages/home";
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
  return <RouterProvider router={router} />;
}

export default App;
