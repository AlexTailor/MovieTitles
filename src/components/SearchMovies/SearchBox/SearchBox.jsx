import React, { useState } from "react";

export default function SearchBox(props) {
  const [inputText, setInputText] = useState("");

  function handleEnterPress(e) {
    e.key === "Enter" && props.setMovieName(inputText);
  }

  return (
    <div>
      <input
        type="text"
        required
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleEnterPress(e)}
      />
      <button onClick={() => props.setMovieName(inputText)}>Search</button>
    </div>
  );
}
