import "./App.css";
import React, { useState, createContext } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Board from "./components/Board";
import { wordLayout } from "./utils/words";
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(wordLayout);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    position: 0,
  });

  const onSelect = (keyValue) => {
    const currentBoard = [...board];
    if (currentAttempt.attempt > 4) return;
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
    setCurrentAttempt({ attempt: currentAttempt.attempt + 1, position: 0 });
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
            onSelect,
            onDelete,
            onEnter,
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
