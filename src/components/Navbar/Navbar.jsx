import { useState } from 'react';
import './Navbar.css';  

const Navbar = () => {

  const [isOpen , setIsOpen] = useState(false);

  const toggleNavbar = () => {

    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#home">JP</a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={closeNavbar}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNavbar}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills"  onClick={closeNavbar}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#work"  onClick={closeNavbar}>Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects"  onClick={closeNavbar}>Projects</a>
            </li>
            {/* 
            
            <li className="nav-item">
              <a className="nav-link" href="#blogs">Blogs</a>
            </li>
            */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
