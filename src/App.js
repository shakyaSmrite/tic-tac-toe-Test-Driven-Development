import "./App.css";
import React from "react";
import Board from "./Components/Board/board";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>TIC TAC TOE GAME</h1>
      </div>
      <Board />
    </div>
  );
}

export default App;
