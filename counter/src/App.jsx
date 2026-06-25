import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  let [counter , setCounter] = useState(10);

  function addValue(){
  console.log("Value added" , counter);
  if(counter<20){
    counter++;
  }
  setCounter(counter);
  }
    function removeValue(){
    if(counter>0){
    counter--  
    }
    setCounter(counter);
  }
  return(
    <>
    <h1>Aayus and React</h1>
    <h2>Count Value: {counter}</h2>
    <button onClick={addValue}>Add on Value {counter}</button>
    <button onClick={removeValue}>Remove on Value {counter}</button>
    </>
    
  )
}
export default App
