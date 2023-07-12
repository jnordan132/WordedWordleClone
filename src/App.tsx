import "./App.css";
import React, {useState, createContext} from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Board from "./components/Board";
import { wordLayout } from "./utils/words";

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(wordLayout)
  return (
    <>
      <Header />
      <br />
      <main>
        <AppContext.Provider value={{board, setBoard}}>
        <Grid />
        <br />
        <Board />
        </AppContext.Provider>
      </main>
    </>
  );
}

export default App;
