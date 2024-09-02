import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [allowedNumber, setAllowedNumber]= useState(false);
  const [allowedChar, setAllowedChar]= useState(false);
  const [password, setPassword]= useState("");

  const passwordRef= useRef(null);

  const passwordGenerator= useCallback(() =>{
    let pass= ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(allowedNumber) str += "0123456789"
    if(allowedChar) str += "!@#$*%"

    for(let i= 1; i<=length; i++){
      let char= Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass);

  }, [length, allowedNumber, allowedChar, setPassword]);

  const copyPass= useCallback(() => {
    passwordRef.current?.select(0, 24);
    // passwordRef.current?.setSelectionRange(0, 24);
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, allowedNumber, allowedChar, passwordGenerator])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 "
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPass} className="outline-none bg-blue-700 text-white px-3 py-0.5 shink-0 hover:bg-blue-800 active:bg-blue-950">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1">
          <input
          type="range"
          min={6}
          max={69}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={allowedNumber}
          id='numberInput'
          onChange={() => {setAllowedNumber((prev) => !prev)}}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={allowedChar}
          id='charInput'
          onChange={() => {setAllowedChar((prev) => !prev)}}
          />
          <label htmlFor='charInput' >Special Char's</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
