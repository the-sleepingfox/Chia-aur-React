import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    name: "ayush",
    age: 34
  }

  return (
    <>
      <div className="bg-blue-500 text-white p-4 rounded-xl mb-4">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <Card name= "sleepingfox"/>
      <Card/>
    </>
  );
}

export default App;
