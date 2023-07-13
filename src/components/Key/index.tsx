import React, { useContext } from "react";
import { AppContext } from "../../App";

function Key({ keyValue, util, disabled, needed, correct }) {
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
    <div
      className="key"
      id={
        util
          ? "util"
          : (disabled && "disabledKey") ||
            (needed && "neededKey") ||
            (correct && "correctKey")
      }
      onClick={selected}
    >
      <p>{keyValue}</p>
    </div>
  );
}

export default Key;
