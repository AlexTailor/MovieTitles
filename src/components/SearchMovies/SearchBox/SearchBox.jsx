import React, { useState } from "react";

export default function SearchBox(props) {
  const [inputText, setInputText] = useState("");

  function handleEnterPress(e) {
    e.key === "Enter" && props.setMovieName(inputText);
  }

  return (
    <div className="navbar">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Find your favourite movies..."
          required
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => handleEnterPress(e)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            onClick={() => props.setMovieName(inputText)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
