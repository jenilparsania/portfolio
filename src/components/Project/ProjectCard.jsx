import './ProjectCard.css'

export default function ProjectCard({ banner, title, information }) {
    return (
      <div className="project-card px-2">
        <div className='project-card-sub'>
            <img src={banner} alt={title} className="project-banner" />
            
            <div className="project-content">
            <h3 className="project-title text-white">{title}</h3>
            <p className="project-info">
                <p>{information}</p>
            </p>
            
            <div className="button-group">
                <button className="btn btn-primary">Git</button>
                <button className="btn btn-outline-primary">Demo</button>
            </div>
            </div>
        </div>
        
      </div>
    );
  }
  
        
    
  