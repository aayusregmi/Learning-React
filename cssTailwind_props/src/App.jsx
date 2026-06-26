import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export function Button({children , onClick}){
  return(
    <button onClick={onClick} className="text-black">
      {children}
    </button>
  );
}

export function App(){
  return(
    <>
    <Button onClick={()=>{
      alert("You clicked the first button!!")
    }}>
      first Button
    </Button>

    <Button onClick={()=>{
      alert("You clicked the Second button!!")
    }}>
      Second Button
    </Button>
    </>
  )
}

