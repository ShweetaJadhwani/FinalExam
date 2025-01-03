import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Router } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  render();
  return (
    <Router>
      <div className="App"></div>
    </Router>
  );
}

export default App;
