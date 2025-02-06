
/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import React from 'react'

import {Login,Signup} from "./routes/routes"

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>welcome</h1>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
  
}
export default App;