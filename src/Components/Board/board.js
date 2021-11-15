import React from "react";
import Square from "./../Square/square";

function Board() {
  return (
    <div className="rows">
      <div className="rows">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="rows">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="rows">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default Board;
