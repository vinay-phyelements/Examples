import React, { useCallback, useState } from "react";
import Child from "./Child";

function Usereducer() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  function addition() {
    setAdd(add + 1);
  }
  const Learning = useCallback(() => {}, [count]);
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{add}</h3>
      <button onClick={addition}>Addition</button>
      <h4>{count}</h4>
      <Child Learn={Learning} count={count} />
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default Usereducer;
