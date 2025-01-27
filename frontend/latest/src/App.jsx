/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import React from 'react'
import {Login} from "./routes/Routes.jsx";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>welcome</h1>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
  
}
export default App;