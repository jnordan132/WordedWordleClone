import React, { useContext } from "react";
import { AppContext } from "../../App";

function Key({ keyValue, util }) {
  const { onSelect, onDelete, onEnter } = useContext(AppContext);

  const selected = () => {
    if (keyValue == "ENTER") {
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete;
    } else {
      onSelect(keyValue);
    }
  };
  return (
    <div className="key" id={util ? "util" : ""} onClick={selected}>
      <p>{keyValue}</p>
    </div>
  );
}

export default Key;
