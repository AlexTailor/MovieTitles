import axios from "axios";
import React, { useState, useEffect } from "react";
import MoviesTable from "./MoviesTable/MoviesTable";
import SearchBox from "./SearchBox/SearchBox";

const MOVIES_QUERY = `
    query SearchMovies($title: String!) {
        searchMovies(query: $title) {
          id
          name
          score
          img: poster {
            url: custom(size: "w185_and_h278_bestv2")
          }
          genres {
            id
            name
          }
        }
    }
`;

export default function SearchMovies() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieName &&
      axios
        .post(
          "https://tmdb.sandbox.zoosh.ie/dev/grphql",
          { query: MOVIES_QUERY, variables: { title: movieName } },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => res.data.data)
        .then((data) => setMovies(data.searchMovies));
  }, [movieName]);

  return (
    <div className="container">
      <SearchBox setMovieName={setMovieName} />
      {!!movies && <MoviesTable movies={movies} />}
    </div>
  );
}
