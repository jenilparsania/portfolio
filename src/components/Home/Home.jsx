import Navbar from '../Navbar/Navbar'
import './Home.css'




export  const Home = () => {
    return (<div className='home-main'>
        <div className='home-sub'>
            
            <div className='home-name'>
                <span className='firstname'>Jenil </span> <span className="lastname" style={{color:'#0EA5E9'}}> Parsania </span>
            </div>
            <div className='home-position'>
                Software Engineer
            </div>
            <div className='home-icons'>
                <ul className="socials-container list-unstyled d-flex justify-content-center gap-4 my-3">
                    <li>
                        <a href="mailto:parsaniajenil@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-envelope socials-icon text-white" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/jenilparsania" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github socials-icon text-white" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jenilparsania" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin socials-icon text-white" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/__beyond_dreams" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-x-twitter socials-icon text-white" aria-hidden="true"></i>
                        </a>
                    </li>
        
                </ul>
            </div>

        </div>
    </div>)
}