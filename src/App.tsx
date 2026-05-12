import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { DataFetcher } from "./Components/DataFetcher/DataFetcher";

function App() {
  return (
    <>
      <DataFetcher />
    </>
  );
}

export default App;
