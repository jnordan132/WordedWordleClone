import { BsBackspace } from "react-icons/bs";
import React, { useState, useEffect } from "react";

function Board() {
  const rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowThree = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <section className="board">
      <div className="boardRow">
        {rowOne.map((letter) => {
          return (
            <div className="key">
              <p>{letter}</p>
            </div>
          );
        })}
      </div>
      <div className="boardRow">
        {rowTwo.map((letter) => {
          return (
            <div className="key">
              <p>{letter}</p>
            </div>
          );
        })}
      </div>
      <div className="boardRow">
        <div className="key util">
          <p>ENTER</p>
        </div>
        {rowThree.map((letter) => {
          return (
            <div className="key">
              <p>{letter}</p>
            </div>
          );
        })}
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
