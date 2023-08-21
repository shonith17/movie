import React, { useState, useEffect } from 'react';
import { json, checkStatus } from './utils';
import { useParams } from "react-router-dom"

const Movie = () => {
  const params = useParams()
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=b7da8d63`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.Response === 'False') {
          throw new Error(data.Error)
        }

        if (data.Response === 'True') {
          console.log(data);
          setMovie(data);
          setError('');
        }
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  }, [params.id]);

  if (!movie) {
    return null;
  }

  const {
    Title,
    Year,
    Plot,
    Director,
    imdbRating,
    Poster,
  } = movie;

  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-6">
          <h1>{Title}</h1>
          <ul className="list-unstyled">
            <li>
              <p>Year: {Year}</p>
            </li>
            <li>
              <p>Director: {Director}</p>
            </li>
            <li>
              <p>Plot: {Plot}</p>
            </li>
            <li>
              <p>imdbRating: {imdbRating} / 10</p>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <img src={Poster} className="img-fluid" alt="Movie Poster" />
        </div>
      </div>
    </div>
  );
};

export default Movie;
