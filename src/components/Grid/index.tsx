import Box from "../Box";
import { AppContext } from "../../App";
import React, { useContext } from "react";

function Grid() {
  const { active } = useContext(AppContext);

  return (
    <section className="grid">
      <div className="row">
        <Box attempt={0} position={0} />
        <Box attempt={0} position={1} />
        <Box attempt={0} position={2} />
        <Box attempt={0} position={3} />
        <Box attempt={0} position={4} />
      </div>
      <div className="row">
        <Box attempt={1} position={0} />
        <Box attempt={1} position={1} />
        <Box attempt={1} position={2} />
        <Box attempt={1} position={3} />
        <Box attempt={1} position={4} />
      </div>
      <div className="row">
        <Box attempt={2} position={0} />
        <Box attempt={2} position={1} />
        <Box attempt={2} position={2} />
        <Box attempt={2} position={3} />
        <Box attempt={2} position={4} />
      </div>
      <div className="row">
        <Box attempt={3} position={0} />
        <Box attempt={3} position={1} />
        <Box attempt={3} position={2} />
        <Box attempt={3} position={3} />
        <Box attempt={3} position={4} />
      </div>
      <div className="row">
        <Box attempt={4} position={0} />
        <Box attempt={4} position={1} />
        <Box attempt={4} position={2} />
        <Box attempt={4} position={3} />
        <Box attempt={4} position={4} />
      </div>
      <div className="row">
        <Box attempt={5} position={0} />
        <Box attempt={5} position={1} />
        <Box attempt={5} position={2} />
        <Box attempt={5} position={3} />
        <Box attempt={5} position={4} />
      </div>
    </section>
  );
}

export default Grid;
