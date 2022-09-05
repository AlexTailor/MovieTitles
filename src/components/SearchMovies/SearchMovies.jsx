import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox/SearchBox";

const MOVIES_QUERY = `
    query SearchMovies($title: String!) {
        searchMovies(query: $title) {
        id
        name
        overview
        releaseDate
        cast {
            id
            person {
            name
            }
            role {
            ... on Cast {
                character
            }
            }
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

  useEffect(() => {
    movies.map((movie) => console.log(movie.name));
  }, [movies]);

  return (
    <div>
      <SearchBox setMovieName={setMovieName} />
    </div>
  );
}
