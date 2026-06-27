import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  let [counter , setCounter] = useState(10);

  function addValue(){
  console.log("Value added" , counter);
   /*setCounter(counter + 1); //add 1 to the present value
   setCounter(counter + 1);  //add 1 to the present value
   setCounter(counter + 1);  //add 1 to the present value
   setCounter(counter + 1);  //add 1 to the present value
-----> Here the concept of fibre comes in use: According to the concept of fibre:> When there is the queue that update the state or (that result in the DOM change) , the update is not shown one by one , the final update is provided to the DOM. 
Here in the example of doing (counter + 1) all the three same line of code does the same thing the counter is still 10 which is same for three setter so what does react do it evaluate all things and gives the final update since one setter give the result as 11 anoterh also 11 another also 11 so the final is 11.
counter is a state variable — it gets captured once when the function runs and stays frozen at 15 for all 4 calls. You can't change it mid-function.
   */
setCounter(prev => prev + 1) // React queues: "add 1 to whatever the latest is"
setCounter(prev => prev + 1)  // React queues: "add 1 to whatever the latest is"
setCounter(prev => prev + 1)  // React queues: "add 1 to whatever the latest is"
setCounter(prev => prev + 1)  // React queues: "add 1 to whatever the latest is"
/* the setcounter have the hidden stuff which is inside it we can write () = >  where previous counter value is stored so for the first it update let say to 11 , the previous value is passed one after another with the updated value.
prev is just a function argument — React fills it in with the latest queued value each time. You're giving React a recipe, not a value.



*/
  }
    function removeValue(){
    counter--  
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
