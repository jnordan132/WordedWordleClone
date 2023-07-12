import React, { useContext } from "react";
import { AppContext } from "../../App";

function Key({ keyValue }) {
  const { board, setBoard, currentAttempt, setCurrentAttempt } =
    useContext(AppContext);

  const selected = () => {
    console.log(board);
    console.log(keyValue);
    if (keyValue == "ENTER") {
      if (currentAttempt.position !== 5) return;
      setCurrentAttempt({ attempt: currentAttempt.attempt + 1, position: 0 });
    } else if (keyValue === "DELETE") {
      if (currentAttempt.position === 0) return;
      const currentBoard = [...board];
      currentBoard[currentAttempt.attempt][currentAttempt.position - 1] = "";
      setBoard(currentBoard);
      setCurrentAttempt({
        ...currentAttempt,
        position: currentAttempt.position - 1,
      });
    } else {
      const currentBoard = [...board];
      if (currentAttempt.attempt > 4) return;
      currentBoard[currentAttempt.attempt][currentAttempt.position] = keyValue;
      setBoard(currentBoard);
      setCurrentAttempt({
        ...currentAttempt,
        position: currentAttempt.position + 1,
      });
    }
  };
  return (
    <div className="key" onClick={selected}>
      <p>{keyValue}</p>
    </div>
  );
}

export default Key;
