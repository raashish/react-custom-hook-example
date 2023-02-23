import React from "react";
import "./style.css";
import {useCustomHook} from './useCustomHook.js'

export default function App() {
  const [count, incrementCounter, decrementCounter, resetCounter, loading] = useCustomHook();
  if(loading) return <h2>Loading...Please Wait!</h2>
  return (
    <div>
      <h1>{count}</h1>
      <p>Start clicking to see some magic happen :)</p>
      <hr/>
      <button onClick={incrementCounter}>Click to Increment</button>
      <button onClick={decrementCounter}>Click to Decrement</button>
      <button onClick={resetCounter}>Click to Reset</button>
    </div>
  );
}
