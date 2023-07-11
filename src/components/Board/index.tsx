import { BsBackspace } from "react-icons/bs";

function Board() {


  return (
    <section className="board">
      <div className="boardRow">
        <div className="key">
          <p>Q</p>
        </div>
        <div className="key">
          <p>W</p>
        </div>
        <div className="key">
          <p>E</p>
        </div>
        <div className="key">
          <p>R</p>
        </div>
        <div className="key">
          <p>T</p>
        </div>
        <div className="key">
          <p>Y</p>
        </div>
        <div className="key">
          <p>U</p>
        </div>
        <div className="key">
          <p>I</p>
        </div>
        <div className="key">
          <p>O</p>
        </div>
        <div className="key">
          <p>P</p>
        </div>
      </div>
      <div className="boardRow">
        <div className="key">
          <p>A</p>
        </div>
        <div className="key">
          <p>S</p>
        </div>
        <div className="key">
          <p>D</p>
        </div>
        <div className="key">
          <p>F</p>
        </div>
        <div className="key">
          <p>G</p>
        </div>
        <div className="key">
          <p>H</p>
        </div>
        <div className="key">
          <p>J</p>
        </div>
        <div className="key">
          <p>K</p>
        </div>
        <div className="key">
          <p>L</p>
        </div>
      </div>
      <div className="boardRow">
      <div className="key util">
          <p>ENTER</p>
        </div>
        <div className="key">
          <p>Z</p>
        </div>
        <div className="key">
          <p>X</p>
        </div>
        <div className="key">
          <p>C</p>
        </div>
        <div className="key">
          <p>V</p>
        </div>
        <div className="key">
          <p>B</p>
        </div>
        <div className="key">
          <p>N</p>
        </div>
        <div className="key">
          <p>M</p>
        </div>
        <div className="key util">
          <p>
            <BsBackspace />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Board;
