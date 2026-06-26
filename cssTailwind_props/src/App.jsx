import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export function Coder(props){
  console.log(props);
return(
  <>
  <p>{props.userName}</p>
  <p>{props.Roll_No}</p>
  </>
)
}


export function App(){
   let student = {
    userName : "Aayus Regmi",
    Roll_No : 8
   }

  return(
    <>
  <Coder {...student} />
    </>
  )
}

