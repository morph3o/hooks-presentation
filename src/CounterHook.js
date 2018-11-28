import React, { useState } from "react";

const CounterHook = props => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Hello Counter with Hooks!</h1>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
};

export default CounterHook;
