import { useContext } from "react";
import { AppContext } from "../../App";

interface KeyProps {
  keyValue: string;
  util: boolean;
  disabled: boolean;
  needed: boolean;
  correct: boolean;
}

function Key({ keyValue, util, disabled, needed, correct }: KeyProps) {
  const { onSelect, onDelete, onEnter } = useContext(AppContext);

  const selected = () => {
    if (keyValue === "ENT") {
      onEnter();
    } else if (keyValue === "DEL") {
      onDelete();
    } else {
      onSelect(keyValue);
    }
  };

  const id = util
    ? "util"
    : disabled
    ? "disabledKey"
    : needed
    ? "neededKey"
    : correct
    ? "correctKey"
    : undefined;

  return (
    <div className="key" id={id} onClick={selected}>
      <p>{keyValue}</p>
    </div>
  );
}

export default Key;
