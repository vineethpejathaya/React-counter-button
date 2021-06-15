import { useState } from "react";
import "./styles.css";

export default function App() {
  let [count, setCount] = useState(0);
  const counterPlus = function () {
    count = count + 1;
    setCount(count);
  };
  const counterMinus = function () {
    count = count - 1;
    setCount(count);
  };
  return (
    <div className="container">
      <h1>Hello EveryOne!</h1>
      <h2>Counter Button</h2>
      <button onClick={counterMinus}>-</button>
      <span>{count}</span>
      <button onClick={counterPlus}>+</button>
    </div>
  );
}
