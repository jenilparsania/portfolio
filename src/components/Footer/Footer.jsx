import './Footer.css'
import X from '../../assets/images/x.png';
import Linkedin from '../../assets/images/linkedin.png';
import Github from '../../assets/images/github.png';
import Email from '../../assets/images/email.png';
function Footer(){

    return(<div className="Footer">
        <div className=" footer-sub container text-center">
            <div className="footer-heading"> Connect with me </div>
            <div className='footer-symbols'>
                <span className='icon'><img src={X} width='15px' height='15px'/></span>
                <span className='icon'><img src={Github} width='15px' height='15px'/></span>
                <span className='icon'><img src={Linkedin} width='15px' height='15px'/></span>
                <span className='icon'><img src={Email} width='15px' height='15px'/></span>
            </div>
            <div className="footer-elements"> </div>
            <hr/>
            <div className="footer-copyright">Copyright &copy; 2025  Jenil Parsania </div>
        </div>
        
    </div>);

}


export default Footer;