import Key from "../Key";

function Board() {
  const rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowThree = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"];

  return (
    <section className="board">
      <div className="boardRow">
        {rowOne.map((letter) => {
          return <Key keyValue={letter} />;
        })}
      </div>
      <div className="boardRow">
        {rowTwo.map((letter) => {
          return <Key keyValue={letter} />;
        })}
      </div>
      <div className="boardRow">
        {rowThree.map((letter) => {
          return <Key keyValue={letter} />;
        })}
      </div>
    </section>
  );
}

export default Board;
