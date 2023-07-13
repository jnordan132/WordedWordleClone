import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Board from "./components/Board";
import { wordLayout, generateWordArr } from "./utils/words";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NOT_FOUND_MESSAGE, CORRECT_WORD_MESSAGE } from "./utils/message";
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(wordLayout);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    position: 0,
  });
  const [newSet, setNewSet] = useState(new Set());
  const [disabledValues, setDisabledValues] = useState([]);
  const [correctValues, setCorrectValues] = useState([]);
  // const [disabledValues, setDisabledValues] = useState([]);

  const notify = (message: string, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
      });
    } else {
      toast(message, {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
      });
    }
  };

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
      notify(NOT_FOUND_MESSAGE);
    }

    if (currentWord === correctWord) {
      notify(CORRECT_WORD_MESSAGE);
    }
  };
  return (
    <>
      <ToastContainer
        closeButton={false}
        position="top-center"
        autoClose={800}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
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
            correctValues,
            setCorrectValues,
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
