import './Project.css'
import Excalidraw from "../../assets/images/ai_excalidraw.jpeg"
import Paytm from "../../assets/images/paytm.jpeg"
import ECommerce from "../../assets/images/e-commerce.jpeg"
import Frogger from "../../assets/images/frogger.jpeg"
import Laravel from "../../assets/images/laravel.jpeg"
import GameAndroid from "../../assets/images/gaming-console.webp"
import ContactiOS from "../../assets/images/contacts.jpeg"
import Portfolio from "../../assets/images/portfolio.jpeg"
import Healthcare from "../../assets/images/healthcare-dashboard.png"

import Trial from '../Trial/Trial'

export default function Project(){
    
   
  // Array of project data
  const projects = [
    {
      banner : Healthcare,
      title : "Healthcare Data Dashboard",
      description : 
      "This dashboard project simulates the work of a Decision Support Analyst by visualizing healthcare data trends relevant to Canada's public health system. Using public datasets from Health Canada, the project focuses on metrics such as patient wait times and appointment volumes across different regions and dates.",
      github:"https://github.com/jenilparsania/healthcare-data-dashboard"
    },
    {
      banner: Excalidraw,
      title: "Excalidraw Clone",
      description:
        "A collaborative whiteboarding tool built using MERN stack, leveraging monorepos and turborepos for efficient code management and scalability.",
      //github: "https://github.com/yourgithub/Excalidraw-Clone",
      //demo: "https://yourdemo.com",
    },
    {
      banner: Paytm,
      title: "PayTM Website",
      description:
        "A MERN-based clone of the PayTM website, featuring secure authentication, seamless payment gateway integration, and a responsive user interface.",
      github: "https://github.com/jenilparsania/paytm",
      //demo: "https://yourdemo.com",
    },
    {
      banner: ECommerce,
      title: "E-Commerce Website",
      description:
        "A front-end e-commerce platform for books , using API to fetch the details of  the products ",
      //github: "https://github.com/yourgithub/E-Commerce",
      //demo: "#",
    },
    {
      banner: Laravel,
      title: "Store Inventory System",
      description:
        "A Laravel-based inventory management system that enables businesses to track stock levels, manage products.",
      github: "https://github.com/jenilparsania/inventory_system",
      //demo: "#",
    },
    {
      banner: Portfolio,
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio built with React and Bootstrap, showcasing my projects and skills.",
      github: "https://github.com/jenilparsania/portfolio",
      //demo: "#",
    },
    {
      banner: Frogger,
      title: "Frogger Game",
      description:
        "A classic Frogger game developed in Java, featuring multi-threading for smooth animations, collision detection, and scoring.",
      github: "https://github.com/jenilparsania/Frogger_Game",
      //demo: "#",
    },
    {
      banner: GameAndroid,
      title: "Gaming Console App",
      description:
        "A CRUD-based gaming console application built in Kotlin, allowing users to manage game collections, track progress, and store game details.",
      //github: "https://github.com/yourgithub/Gaming-Console",
      //demo: "#",
    },
    {
      banner: ContactiOS,
      title: "Contacts App",
      description:
        "A Swift-based CRUD application for managing contacts, featuring a clean UI, search functionality, and seamless data persistence.",
      //github: "https://github.com/yourgithub/Contacts-List",
      //demo: "#",
    },
    
    
  ];

  return (
    <div className='project-main'>
      <div className='project-sub'>
        <div className='text-white text-center pt-4 display-3'> Projects </div>

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
    </div>
    
  );
}

