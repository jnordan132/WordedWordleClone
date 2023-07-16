import { useEffect, useCallback, useContext } from "react";
import { AppContext } from "../../App";
import Key from "../Key";

function Board() {
  const {
    onEnter,
    onDelete,
    onSelect,
    disabledValues,
    neededValues,
    correctValues,
  } = useContext(AppContext);

  const rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowThree = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback(
    (event: KeyboardEvent) => {
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
    },
    [onEnter, onDelete, onSelect, rowOne, rowTwo, rowThree]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboard as EventListener);
    return () => {
      window.removeEventListener("keydown", handleKeyboard as EventListener);
    };
  }, [handleKeyboard]);

  return (
    <section className="board">
      <div className="boardRow">
        {rowOne.map((letter) => {
          return (
            <Key
              key={letter}
              keyValue={letter}
              util={false}
              disabled={disabledValues.includes(letter)}
              needed={neededValues.includes(letter)}
              correct={correctValues.includes(letter)}
            />
          );
        })}
      </div>
      <div className="boardRow">
        {rowTwo.map((letter) => {
          return (
            <Key
              key={letter}
              keyValue={letter}
              util={false}
              disabled={disabledValues.includes(letter)}
              needed={neededValues.includes(letter)}
              correct={correctValues.includes(letter)}
            />
          );
        })}
      </div>
      <div className="boardRow">
        <Key
          keyValue={"ENT"}
          util={true}
          disabled={false}
          needed={false}
          correct={false}
        />
        {rowThree.map((letter) => {
          return (
            <Key
              key={letter}
              keyValue={letter}
              util={false}
              disabled={disabledValues.includes(letter)}
              needed={neededValues.includes(letter)}
              correct={correctValues.includes(letter)}
            />
          );
        })}
        <Key
          keyValue={"DEL"}
          util={true}
          disabled={false}
          needed={false}
          correct={false}
        />
      </div>
    </section>
  );
}

export default Board;
