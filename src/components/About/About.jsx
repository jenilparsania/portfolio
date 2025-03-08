import './About.css'
import myImage from "../../assets/images/image_1.png"


export  const About = ({intro , heading}) => {
    
    return (
    <div className='about'>
        <div className="about-inner row align-items-center text-center text-md-start">
            <div className="offset-md-1 col-md-3 d-flex justify-content-center">
                <img src={myImage} alt="vfd" width={215} height={200} className="img-fluid" />
            </div>

            <div className="col-md-8">
                <span className="intro-heading fw-bold">{heading}</span> <br />
                {intro}
            </div>
        </div>

        
    </div>)
}