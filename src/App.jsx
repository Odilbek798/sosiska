import React from 'react'
import './App.scss'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
    </>
  )
}

export default App