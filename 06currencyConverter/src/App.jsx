import { useState } from 'react'
import InputBox from './components/InputBox'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <InputBox/>
    </>
  )
}

export default App
