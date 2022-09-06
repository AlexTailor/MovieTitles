import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieRow from "../MovieRow/MovieRow";
import WikiModal from "../WikiModal/WikiModal";

export default function MoviesTable(props) {
  const [wikiSearch, setWikiSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [movieId, setMovieId] = useState("");
  useEffect(() => {
    wikiSearch &&
      axios
        .get(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${wikiSearch}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => setSearchResult(response.data));
  }, [wikiSearch]);

  return (
    <div className="row">
      {props.movies.map((movie) => (
        <MovieRow
          key={movie.id}
          movie={movie}
          setWikiSearch={setWikiSearch}
          setMovieId={setMovieId}
        />
      ))}
      {searchResult && (
        <WikiModal
          searchResult={searchResult}
          movieId={movieId}
          setSearchResult={setSearchResult}
        />
      )}
    </div>
  );
}
