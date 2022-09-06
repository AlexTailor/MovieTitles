import axios from "axios";
import React, { useState, useEffect } from "react";
import MoviesTable from "./MoviesTable/MoviesTable";
import SearchBox from "./SearchBox/SearchBox";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import MOVIES_QUERY from "../../utils/Query";

export default function SearchMovies() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (movieName) {
      setIsLoading(true);
      axios
        .post(
          "https://tmdb.sandbox.zoosh.ie/dev/grphql",
          { query: MOVIES_QUERY, variables: { title: movieName } },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => res.data.data)
        .then((data) => {
          setMovies(data.searchMovies);
          setIsLoading(false);
        });
    }
  }, [movieName]);

  return (
    <div className="container">
      <SearchBox setMovieName={setMovieName} />
      {isLoading ? <LoadingSpinner /> : <MoviesTable movies={movies} />}
    </div>
  );
}
