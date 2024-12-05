import React from 'react'
import Header from './Header'
import App from './App'
import Hero from './Hero'
import { Routes, Route } from "react-router";

const Body = () => {
  return (
    <div>
        <Header/>    
        <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/create' element={<App/> } />
        </Routes>
    </div>
  )
}

export default Body