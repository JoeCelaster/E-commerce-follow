/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import React from 'react'
import Signup from "./pages/signup"
import Login from "./pages/Login"


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