import React, { useState } from "react";
import "./App.css";
import SearchBox from "../SearchBox/SearchBox";

function App() {
  const [movieName, setMovieName] = useState("");
  return (
    <div className="App">
      <SearchBox setMovieName={setMovieName} />
    </div>
  );
}

export default App;
