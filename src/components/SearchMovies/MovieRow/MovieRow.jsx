import React from "react";

export default function MovieRow(props) {
  return (
    <div className="col-sm-3">
      <div className="card text-center">
        <img
          className="card-img-top image-size"
          src={props.movie.img.url}
          alt={props.movie.id}
        />
        <div className="card-body">
          <h5
            className="card-title"
            onClick={() => props.setWikiSearch(props.movie.name)}
          >
            {props.movie.name}
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Category: {props.movie.genres[0].name}
          </li>
          <li className="list-group-item">Score: {props.movie.score}</li>
        </ul>
      </div>
    </div>
  );
}
