import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Icon from './components/Icons/Icons';
import HTML from './assets/images/HTML.png';
import IconPage from './components/Icons/IconPage'
import Project from './components/Project/Project'
import Footer from './components/Footer/Footer'
import Work from './components/Work/Work'
import Timeline from './components/Timeline/Timeline'
import Navbar from './components/Navbar/Navbar'

function App() {
  
  return (
    <>
      <div>
        
        {/*  
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </BrowserRouter>

        */}
        <Navbar/>
        <section id='home'>
          <Home/>
        </section>
        <section id='about'>
        <About/>
        </section>
        
        <section id='skills'>
          <IconPage/>
        </section>
        <section id='work'>
          <Timeline/>
        </section>
        <section id='projects'>
          <Project/>
        </section>

        <Footer/>

        
        
        
      </div>
    </>
  )
}

export default App
