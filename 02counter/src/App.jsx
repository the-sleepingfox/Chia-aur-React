import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue= () => {
    // if(counter===20) return -1;
    setCounter(counter+1);
  }

  const removeValue= () => {
    if(counter === 0) return -1;
    setCounter(counter-1);
  }

  return (
    <>
    <h1>chai aur react</h1>
    <p>counter project learn hooks</p>
    <button onClick={addValue}>add click{counter}</button><br/>
    <button onClick={removeValue}>remove{counter}</button>
    </>
  )
}

export default App
