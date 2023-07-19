import { useContext, useEffect } from "react";
import { AppContext } from "../../App";

interface BoxProps {
  attempt: number;
  position: number;
}

function Box({ attempt, position }: BoxProps) {
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
  const needed =
    !correct &&
    value !== "" &&
    correctWord.includes(value) &&
    board[attempt].includes(value);
  const valueState =
    currentAttempt.attempt > attempt
      ? correct
        ? "correct"
        : needed
        ? "needed"
        : "wrong"
      : undefined;

  useEffect(() => {
    if (value !== "" && !correct && !needed) {
      setDisabledValues((used: string[]) => [...used, value]);
    }
    if (value !== "" && needed) {
      setNeededValues((used: string[]) => [...used, value]);
    }
    if (value !== "" && correct) {
      setCorrectValues((used: string[]) => [...used, value]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div className="box" id={valueState}>
      {value}
    </div>
  );
}

export default Box;
