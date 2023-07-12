import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Board from "./components/Board";
import { wordLayout, generateWordArr } from "./utils/words";
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(wordLayout);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    position: 0,
  });
  const [newSet, setNewSet] = useState(new Set());
  const [disabledValues, setDisabledValues] = useState([]);

  const correctWord = "RIGHT";

  useEffect(() => {
    generateWordArr().then((words) => setNewSet(words.newSet));
  });

  const onSelect = (keyValue) => {
    const currentBoard = [...board];
    if (currentAttempt.attempt > 5) return;
    if (currentAttempt.position > 4) return;
    currentBoard[currentAttempt.attempt][currentAttempt.position] = keyValue;
    setBoard(currentBoard);
    setCurrentAttempt({
      ...currentAttempt,
      position: currentAttempt.position + 1,
    });
  };

  const onDelete = () => {
    if (currentAttempt.position === 0) return;
    const currentBoard = [...board];
    currentBoard[currentAttempt.attempt][currentAttempt.position - 1] = "";
    setBoard(currentBoard);
    setCurrentAttempt({
      ...currentAttempt,
      position: currentAttempt.position - 1,
    });
  };

  const onEnter = () => {
    if (currentAttempt.position !== 5) return;

    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attempt][i];
    }
    console.log(currentWord);
    console.log(newSet);
    if (newSet.has(currentWord.toUpperCase())) {
      setCurrentAttempt({ attempt: currentAttempt.attempt + 1, position: 0 });
    } else {
      alert("Word Not Found");
    }

    if (currentWord === correctWord) {
      alert(`${correctWord} was correct!`);
    }
  };
  return (
    <>
      <Header />
      <br />
      <main>
        <AppContext.Provider
          value={{
            board,
            setBoard,
            currentAttempt,
            setCurrentAttempt,
            disabledValues,
            setDisabledValues,
            onSelect,
            onDelete,
            onEnter,
            correctWord,
          }}
        >
          <Grid />
          <br />
          <Board />
        </AppContext.Provider>
      </main>
    </>
  );
}

export default App;
