import Box from "../Box"

function Grid() {

  return (
    <section className="grid">
      <div className="row">
        <Box attempt={0} position={0} />
        <Box attempt={1} position={0} />
        <Box attempt={2} position={0} />
        <Box attempt={3} position={0} />
        <Box attempt={4} position={0} />
      </div>
      <div className="row">
      <Box attempt={0} position={1} />
        <Box attempt={1} position={1} />
        <Box attempt={2} position={1} />
        <Box attempt={3} position={1} />
        <Box attempt={4} position={1} />
      </div>
      <div className="row">
      <Box attempt={0} position={2} />
        <Box attempt={1} position={2} />
        <Box attempt={2} position={2} />
        <Box attempt={3} position={2} />
        <Box attempt={4} position={2} />
      </div>
      <div className="row">
      <Box attempt={0} position={3} />
        <Box attempt={1} position={3} />
        <Box attempt={2} position={3} />
        <Box attempt={3} position={3} />
        <Box attempt={4} position={3} />
      </div>
      <div className="row">
      <Box attempt={0} position={4} />
        <Box attempt={1} position={4} />
        <Box attempt={2} position={4} />
        <Box attempt={3} position={4} />
        <Box attempt={4} position={4} />
      </div>
      <div className="row">
      <Box attempt={0} position={5} />
        <Box attempt={1} position={5} />
        <Box attempt={2} position={5} />
        <Box attempt={3} position={5} />
        <Box attempt={4} position={5} />
      </div>
    </section>
  );
}

export default Grid;
