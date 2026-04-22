import React from 'react'
import Navbar from './Navbar'
import "./App.css"
import { add ,subtract } from './math'
import Parent from './propsPassing/Parent'
import Child from './propsPassing/Child'
import MultiCounter from './Hooks/MultiCounter'

const App = () => {
  console.log(add(2,3));
  console.log(subtract(5,2));
  return (
    <>
    
    
    <MultiCounter/>
    </>
  )
}

export default App
