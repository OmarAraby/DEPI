import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Simple Calc ! </h1>
        <Calculator />
      </div>
    </>
  );
}

export default App;
