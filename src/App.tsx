import "./App.css";
import { useState, createContext, useEffect } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Board from "./components/Board";
import { wordLayout, generateWords } from "./utils/words";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppContext = createContext<any>(null);

function App() {
  const [board, setBoard] = useState(wordLayout);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    position: 0,
  });
  const [newSet, setNewSet] = useState<Set<string>>(new Set<string>());
  const [word, setWord] = useState<string>("");
  const [disabledValues, setDisabledValues] = useState<string[]>([]);
  const [neededValues, setNeededValues] = useState<string[]>([]);
  const [correctValues, setCorrectValues] = useState<string[]>([]);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

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

  const correctWord = word;
  // console.log(correctWord);

  useEffect(() => {
    generateWords().then(({ newSet, wordForThisGame }) => {
      setNewSet(newSet);
      setWord(wordForThisGame);
    });
  }, []);

  const onSelect = (keyValue: string) => {
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

    let wordGuessed = "";
    for (let i = 0; i < 5; i++) {
      wordGuessed += board[currentAttempt.attempt][i];
    }
    if (newSet.has(wordGuessed.toUpperCase())) {
      setCurrentAttempt({ attempt: currentAttempt.attempt + 1, position: 0 });
    } else {
      notify("Not in word list");
    }

    var prevPlayerObj = JSON.parse(localStorage.getItem("stats") as string) || {
      timesPlayed: 0,
      timesSolved: 0,
    };

    if (board[5][4] && !correctWord.includes(wordGuessed)) {
      notify(`The correct word is ${correctWord}`);
      var newPlayerObj = {
        timesPlayed: prevPlayerObj.timesPlayed + 1,
        timesSolved: prevPlayerObj.timesSolved,
      };
      localStorage.setItem("stats", JSON.stringify(newPlayerObj));
    }

    if (correctWord.includes(wordGuessed)) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        position: currentAttempt.position + 1,
      });
      notify(`You guessed the word`);
      var newPlayerObj = {
        timesPlayed: prevPlayerObj.timesPlayed + 1,
        timesSolved: prevPlayerObj.timesSolved + 1,
      };
      localStorage.setItem("stats", JSON.stringify(newPlayerObj));
      setTimeout(() => {
        setIsOpen(true);
      }, 1500);
    }
  };

  return (
    <>
      <ToastContainer
        closeButton={false}
        area-label="close modal"
        position="top-center"
        autoClose={800}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />

      <main>
        <AppContext.Provider
          value={{
            board,
            setBoard,
            currentAttempt,
            setCurrentAttempt,
            disabledValues,
            setDisabledValues,
            neededValues,
            setNeededValues,
            correctValues,
            setCorrectValues,
            onSelect,
            onDelete,
            onEnter,
            correctWord,
            modalIsOpen,
            setIsOpen,
          }}
        >
          <Header />
          <br />
          <Grid />
          <br />
          <Board />
        </AppContext.Provider>
      </main>
    </>
  );
}

export default App;
