import React, { useState, useRef, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovieForm from "./components/AddMovieForm";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retryTimeout = useRef(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong... Retrying!");
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      clearTimeout(retryTimeout.current);
    } catch (error) {
      setError(error.message);
      retryTimeout.current = setTimeout(fetchMoviesHandler, 5000);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  function cancelRetryHandler() {
    clearTimeout(retryTimeout.current);
    setError(null);
  }

  const addMovieHandler = (newMovie) => {
    console.log(newMovie);
  };

  let content = <p>Found no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = (
      <div>
        <p>{error}</p>
        <button onClick={cancelRetryHandler}>Cancel Retry</button>
      </div>
    );
  }

  if (isLoading) {
    content = <p>Loading......</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovieForm onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
