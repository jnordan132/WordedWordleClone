import React, { useState } from "react"

function Grid() {
  const [charOne, setCharOne] = useState("");
  const [charTwo, setCharTwo] = useState("");
  const [charThree, setCharThree] = useState("");
  const [charFour, setCharFour] = useState("");
  const [charFive, setCharFive] = useState("");
  const [characterValue, setCharacterValue] = useState("");

  const handleCharOne = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCharOne(event.target.value);
  };
  const handleCharTwo = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCharTwo(event.target.value);
  };
  const handleCharThree = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCharThree(event.target.value);
  };
  const handleCharFour = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCharFour(event.target.value);
  };
  const handleCharFive = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCharFive(event.target.value);
  };


  return (
    <section className="grid">
      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </section>
  );
}

export default Grid;
