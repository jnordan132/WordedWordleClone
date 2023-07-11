import "./App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Board from "./components/Board";

function App() {
  return (
    <>
      <Header />
      <main>
        <Grid />
        <Board />
      </main>
    </>
  );
}

export default App;
