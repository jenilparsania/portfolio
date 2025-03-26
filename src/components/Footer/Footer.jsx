import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer py-5 mx-auto" style={{ zIndex: 100, position: 'relative' }}>
      <p className="footer-tagline text-white font-weight-medium text-center">Connect with me</p>
      <ul className="socials-container list-unstyled d-flex justify-content-center gap-4 my-3">
        <li>
          <a href="mailto:saumyagupta2025@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope socials-icon text-white" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github socials-icon text-white" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin socials-icon text-white" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="2" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter socials-icon text-white" aria-hidden="true"></i>
          </a>
        </li>
        
      </ul>
      <hr className="horizontal-line text-white text-center" />
      <p className="copyright text-white text-center medium mt-4 mb-2">
        Copyright ©2025 Jenil Kishor Parsania
      </p>
    </div>
  );
};

export default Footer;
