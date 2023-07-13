import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";

function Box({ attempt, position }) {
  const { board, correctWord, currentAttempt, setDisabledValues, active } =
    useContext(AppContext);
  const value = board[attempt][position];
  // console.log(active);
  const correct = correctWord[position] === value;
  const needed = !correct && value !== "" && correctWord.includes(value);
  const valueState =
    currentAttempt.attempt > attempt &&
    (correct ? "correct" : needed ? "needed" : "wrong");

  useEffect(() => {
    if (value !== "" && !correct && !needed) {
      setDisabledValues((prev: any) => [...prev, value]);
    }
  }, currentAttempt.attempt);

  return (
    <div className={active ? "box active" : "box"} id={valueState}>
      {value}
    </div>
  );
}

export default Box;
