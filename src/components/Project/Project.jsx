import './Project.css'
import ProjectCard from './ProjectCard'
import Project1 from "../../assets/images/project-1.jpg"
import Trial from '../Trial/Trial'

export default function Project(){
    
   
  // Array of project data
  const projects = [
    {
      banner: Project1,
      title: "Health Information and Diagnostic System",
      description:
        "A system that helps users to know about their wellbeing based on various health parameters...",
      github: "https://github.com/yourgithub/AI-Chatbot",
      demo: "https://yourdemo.com",
    },
    {
      banner: Project1,
      title: "AI Chatbot",
      description:
        "An intelligent AI-powered chatbot that helps users answer queries using natural language processing.",
      github: "https://github.com/yourgithub/AI-Chatbot",
      demo: "https://yourdemo.com",
    },
    {
      banner: Project1,
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce platform with authentication, payment integration, and product management.",
      github: "https://github.com/yourgithub/E-Commerce",
      demo: "#",
    },
  ];

  return (
    <div className='project-main '>
        <div className='text-white text-center pt-2 display-3'> Projects </div>

        <div className="d-flex flex-wrap justify-content-center gap-4 py-5">
        {projects.map((project, index) => (
          <Trial
            key={index} // Unique key for React rendering optimization
            banner={project.banner}
            title={project.title}
            description={project.description}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
    
  );
}

