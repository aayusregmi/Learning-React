import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/card.jsx'

const myObj = {
  name : "Aayus Regmi",
  age : 19
}

let newArr = [1 , 2 , 3 , 4];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card userName = "Regmi Aayus" btnTxt="Contact Me"/>
    <Card userName="Aayus Regmi"  btnTxt="Visit Me"/>
  </StrictMode>,
)
