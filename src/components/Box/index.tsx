import React, { useContext } from "react";
import { AppContext } from "../../App";

function Box({ attempt, position }) {
  const { board, correctWord, currentAttempt } = useContext(AppContext);
  const value = board[attempt][position];

  const correct = correctWord[position] === value;
  const needed = !correct && value !== "" && correctWord.includes(value);
  const valueState =
    currentAttempt.attempt > attempt &&
    (correct ? "correct" : needed ? "needed" : "wrong");

  return (
    <div className="box" id={valueState}>
      {value}
    </div>
  );
}

export default Box;
