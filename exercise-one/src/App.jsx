import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // Increments counter by 1
  const handleIncrement = () => {
    if(counter === 3) {
      setCounter(0)
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if(counter === -3) {
      setCounter(0)
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="App">
      <h1>Counter Exercise</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
