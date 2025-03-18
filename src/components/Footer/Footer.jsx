import './Footer.css'
import X from '../../assets/images/x.png';
import Linkedin from '../../assets/images/linkedin.png';
import Github from '../../assets/images/github.png';
import Email from '../../assets/images/envelope-fill.svg';
function Footer(){

    return(<div className="Footer">
        <div className=" footer-sub container text-center">
            <div className="footer-heading"> Connect with me </div>
            <div className='footer-symbols text-white'>
                <span className='icon'><img src={X} width='15px' height='15px'/></span>
                <span className='icon'><img src={Github} width='15px' height='15px'/></span>
                <span className='icon'><img src={Linkedin} width='15px' height='15px'/></span>
                <span className='icon'><img src={Email} width='15px' height='15px'/></span>
                <span className='icon'><i class="bi bi-envelope-fill"></i></span>
                {/* <FontAwesomeIcon icon={}/> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>
            </div>
            <div className="footer-elements"> 
            <p className="socials text-white text-3xl d-flex gap-3 mt-2">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-envelope text-white"></i>
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-file-lines text-white"></i>
      </a>
      <a href="/">
        <i className="fa-brands fa-linkedin text-white"></i>
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github text-white"></i>
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-twitter text-white"></i>
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-hashnode text-white"></i>
      </a>
    </p>
            </div>
            <hr/>
            <div className="footer-copyright">Copyright &copy; 2025  Jenil Parsania </div>
        </div>
        
    </div>);

}


export default Footer;