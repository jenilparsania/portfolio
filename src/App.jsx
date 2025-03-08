import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from './components/Icons/Icons';
import HTML from './assets/images/HTML.png';
import IconPage from './components/Icons/IconPage'
import Project from './components/Project/Project'
import ProjectCard from './components/Project/ProjectCard'
import Footer from './components/Footer/Footer'

function App() {
  const heading = "Hello, I am Jenil Parsania"
  const intro = "Based in Bangalore, I'm a results-driven Data Engineer holding a B.Tech degree in Computer Science & Engineering. My professional journey revolves around transforming raw data into impactful insights, and I'm particularly passionate about Data Science, Machine Learning, and Generative AI Proficient in Java, Python, Spark, JavaScript and React, I bring a creative touch using HTML and CSS for visual appeal. Navigating key Python libraries such as Numpy and Pandas, I craft intelligent solutions with tools like Scikit-Learn, Tensorflow and Streamlit. Beyond coding, I view data as an infinite canvas for innovation, and my future is a thrilling horizon of AI possibilities. Committed to continuous improvement, I hold certifications in emerging technologies and actively participate in workshops to stay ahead of industry trends"
  return (
    <>
      <div>
        this is nav bar 
        {/*  
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </BrowserRouter>

        */}
        <Home/>
        <About intro={intro} heading={heading}/>
        <IconPage/>


        <Project/>
        <Footer/>
      </div>
    </>
  )
}

export default App
