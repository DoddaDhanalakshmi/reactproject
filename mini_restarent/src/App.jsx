import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Cart from './Cart'
import Catogory from './Catogory'
import Menu from './Menu'


const App = () => {
  return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    {/* <Route path="/menu" element={<Menu/>}/> */}
    <Route  path="/catogorie" element={<Catogory/>}/>
   </Routes></BrowserRouter>

  )
}

export default App