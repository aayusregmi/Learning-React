import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Students({students}){
  console.log(students);
return(
  <>
  <ul>
    {students.map((std)=>(
      <li key={std.id} ><h1>{`Name of Student ${std.name} || Roll of Student ${std.roll}`}</h1></li>
    ))}
  </ul>
  </>
)
}
export function App(){
   let student = [
    {id:100 , name:"Abhiskar" , roll:1},
    {id:600 , name:"Aarogya" , roll:6},
    {id:800 , name:"Aayus" , roll:8}
   ]

  return(
    <>
  <Students students = {student}/>
    </>
  )
}

