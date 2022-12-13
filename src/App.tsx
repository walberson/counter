import "./App.css";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function sumCount() {
    setCount(count + 2);
  }
  function subCount() {
    setCount(count - 2);
  }
  function cleanCount() {
    setCount(0);
  }

  return (
    <div className="App">
      <h1>Olá Futuros DEVs!!!</h1>
      <p>Faltam {count} dias para sua contratação!!!</p>
      <div className="buttons">
        <button onClick={subCount}>-</button>
        <button onClick={sumCount}>+</button>
        <button onClick={cleanCount}>Zerar</button>
      </div>
    </div>
  );
}

export default App;
