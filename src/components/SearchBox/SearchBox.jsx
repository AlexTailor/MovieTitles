import React, { useState } from "react";

export default function SearchBox(props) {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        type="text"
        required
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={() => props.setMovieName(inputText)}>Search</button>
    </div>
  );
}
