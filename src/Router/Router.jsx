import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Vakansiya from '../Pages/Vakansiya'
import Reviews from '../Pages/Reviews'

const Router = () => {
  return (
    <Routes path="/">
        <Route path='/home' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/vakansiya' element={<Vakansiya/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
    </Routes>
  )
}

export default Router
