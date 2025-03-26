
import './App.css'

import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'

import IconPage from './components/Icons/IconPage'
import Project from './components/Project/Project'
import Footer from './components/Footer/Footer'

import Timeline from './components/Timeline/Timeline'
import Navbar from './components/Navbar/Navbar'

function App() {
  
  return (
    <>
      <div>
        
        
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
