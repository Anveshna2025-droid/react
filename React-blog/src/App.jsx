import React from 'react'
import Bollywood from "./component/Bollywood"
import Hollywood from "./component/Hollywood"
import Technology from './component/Technology'
import Food from "./component/Food"
import Fitness from "./component/Fitness"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'
import "./App.css"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/bollywood" element={<Bollywood/>}/>
      <Route path="/hollywood" element={<Hollywood/>}/>
      <Route path="/technology" element={<Technology/>}/>
      <Route path="/fitness" element={<Fitness/>}/>
      <Route path="/food" element={<Food/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App