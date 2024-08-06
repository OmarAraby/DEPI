import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Filter from "./assets/components/Filter";
import UseCallbackHook from "./assets/components/UseCallbackHook";
import Login from "./assets/components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      {/* <Filter />
      <UseCallbackHook /> */}
    </>
  );
}

export default App;
