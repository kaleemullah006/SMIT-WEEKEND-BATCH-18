import  { useCounter }  from "../context/CounterContext";


import React from "react";

function Counter() {
  const {count, dispatch} = useCounter();

  return (
    <>
      <h1>Counter: {count}</h1>

      <button onClick={() => dispatch({ type: "add" })}>ADD</button>
      <button onClick={() => dispatch({ type: "delete" })}>DELETE</button>
      <button onClick={() => dispatch({ type: "clear" })}>CLEAR</button>
    </>
  );
}

export default Counter;
