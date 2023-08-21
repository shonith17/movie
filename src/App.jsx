import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MovieFinder from './Home';
import Movie from './Movie';
import Header from "./Header";

const NotFound = () => {
  return <h2>404 Not Found</h2>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/movie/" element={<Header />}>
      <Route index element={<MovieFinder />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
