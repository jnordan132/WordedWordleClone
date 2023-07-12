import React, { useContext } from "react";
import { AppContext } from "../../App";

function Box({ attempt, position }) {
  const { board } = useContext(AppContext);
  const value = board[attempt][position];
  return <div className="box">{value}</div>;
}

export default Box;
