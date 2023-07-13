import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";

function Box({ attempt, position }) {
  const {
    board,
    correctWord,
    currentAttempt,
    setDisabledValues,
    setNeededValues,
    setCorrectValues,
  } = useContext(AppContext);
  const value = board[attempt][position];

  const correct = correctWord[position] === value;
  const needed = !correct && value !== "" && correctWord.includes(value);
  const valueState =
    currentAttempt.attempt > attempt &&
    (correct ? "correct" : needed ? "needed" : "wrong");

  useEffect(() => {
    if (value !== "" && !correct && !needed) {
      setDisabledValues((used: any) => [...used, value]);
    }
    if (value !== "" && needed) {
      setNeededValues((used: any) => [...used, value]);
    }
    if (value !== "" && correct) {
      setCorrectValues((used: any) => [...used, value]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div className="box" id={valueState}>
      {value}
    </div>
  );
}

export default Box;
