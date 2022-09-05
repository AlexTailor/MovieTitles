import React from "react";
import MovieRow from "../MovieRow/MovieRow";

export default function MoviesTable(props) {
  return (
    <div className="row">
      {props.movies.map((movie) => (
        <MovieRow key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
