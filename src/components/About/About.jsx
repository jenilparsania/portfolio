import './About.css'
import myImage from "../../assets/images/image_1.png"


export  const About = () => {
    
    const heading = "Hello, I am Jenil Kishor Parsania"
    const intro = "I am  passionate software engineer with a strong foundation in developing innovative and efficient software solutions. With a keen eye for detail and a commitment to continuous learning, I strive to create high-quality, user-centric applications that solve real-world problems. Outside of coding, I am an avid reader of self-growth books. I believe that personal development plays a key role in becoming a better developer and a more well-rounded individual. The insights I gain from my reading help me stay motivated, inspired, and focused on improving both my technical and interpersonal skills.Feel free to explore my portfolio, where I showcase my work and projects that reflect my skills and dedication to the craft of software development."

    return (
    <div className='about'>
        <div className="about-inner row align-items-center">
            <div className="col-12 col-md-3 d-flex justify-content-center mb-3 mb-md-0">
                <img src={myImage} alt="vfd" width={230} height={215} className="img-fluid" />
            </div>

            <div className="intro-div col-12 col-md-8">
                <span className="intro-heading fw-bold">{heading}</span> <br />
                <p className='intro-text'>{intro}</p>
            </div>
        </div>

        
    </div>)
}