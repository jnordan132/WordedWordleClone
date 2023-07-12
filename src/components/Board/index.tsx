import { AppContext } from "../../App";
import Key from "../Key";
import React, { useEffect, useCallback, useContext } from "react";

function Board() {
  const { onEnter, onDelete, onSelect } = useContext(AppContext);

  const rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowThree = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((event: { key: string }) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      rowOne.forEach((key) => {
        if (event.key.toUpperCase() === key.toUpperCase()) {
          onSelect(key);
        }
      });
      rowTwo.forEach((key) => {
        if (event.key.toUpperCase() === key.toUpperCase()) {
          onSelect(key);
        }
      });
      rowThree.forEach((key) => {
        if (event.key.toUpperCase() === key.toUpperCase()) {
          onSelect(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <section className="board" onKeyDown={handleKeyboard}>
      <div className="boardRow">
        {rowOne.map((letter) => {
          return <Key key={letter} keyValue={letter} util={false} />;
        })}
      </div>
      <div className="boardRow">
        {rowTwo.map((letter) => {
          return <Key key={letter} keyValue={letter} util={false} />;
        })}
      </div>
      <div className="boardRow">
        <Key keyValue={"ENTER"} util={true} />
        {rowThree.map((letter) => {
          return <Key key={letter} keyValue={letter} util={false} />;
        })}
        <Key keyValue={"DELETE"} util={true} />
      </div>
    </section>
  );
}

export default Board;
