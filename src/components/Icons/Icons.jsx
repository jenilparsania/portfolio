import './Icons.css'
export default function Icon({name, iconSrc}){
    return (
        <span 
          className="d-flex flex-column align-items-center justify-content-center p-3 text-white"
          style={{ 
            borderRadius: "20px", 
            border: "0.5px solid rgb(51, 65, 85)", 
            width: "8rem", 
            height: "8rem",
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "5px"
          }}
          
        >
          <img 
            src={iconSrc} 
            alt={name} 
            style={{ height: "3rem", width: "3rem" }}
          />
          <p className="skill-name text-center text-wrap mt-2">{name}</p>
          
        </span>

      );
    
}

/*
return (
        <div 
          className="container d-flex flex-column align-items-center p-5 justify-content-center text-white" 
          style={{ 
            borderRadius: "20px", 
            border: "0.5px solid rgb(51, 65, 85)", 
            minWidth: "8rem", 
            maxWidth: "8rem", 
            height: "8rem"
          }}
        >
          <img 
            src={iconSrc} 
            alt={name} 
            className="mb-2" 
            style={{ height: "3rem", width: "3rem", margin: "8px auto" }}
          />
          <p className="skill-name text-center text-wrap">{name}</p>
        </div>
      );

*/