import React from "react";
import "./Timeline.css"; // Add custom styles

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Nova Scotia Build",
    duration: "Jan 2025 - April 2025",
    description:
      "I contribute to building a management application that enables managers to publish content for employees. I work on designing user-friendly interfaces, optimizing performance, and integrating Firebase for real-time database management, authentication, and cloud functions. As part of a cross-platform team, I help develop Android, iOS, and web versions for a seamless user experience.",
    side: "right",
  },
  {
    title: "Information Technology Tutor",
    company: "NSCC Waterfront Campus",
    duration: "Nov 2024 - Jan 2025",
    description:
      "I conducted one-on-one tutoring sessions for first-year IT Programming students, assessing their strengths and weaknesses to create personalized lesson plans. I simplified complex programming concepts to enhance understanding and provided constructive feedback to help students improve their skills. By monitoring their progress, I ensured they gained confidence and a solid foundation in programming.",
    side: "left",
  },
  {
    title: "Web Developer Intern",
    company: "Cornerstone",
    duration: "April 2024 - June 2024",
    description:
      "I collaborated with a team to redesign and rebuild the company's website, improving its functionality, performance, and user experience. I explored ways to visualize GitHub collaboration in a classroom setting and developed responsive, user-friendly interfaces using HTML, CSS, and JavaScript. Additionally, I optimized website performance by implementing best practices in web design and development.",
    side: "right",
  },
  
];

export default function Timeline() {
  return (
    <div className="timeline-container pt-20 pb-12">
      
      <div className='work-heading text-center text-white display-3'> Experience </div>
      <div className="timeline mt-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-block timeline-block-${exp.side}`}
          >
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{exp.title}</h3>
              <span className="text-white">{exp.company}</span>
              <p className="text-white mb-3">
                <em>{exp.duration}</em>
              </p>
              <p className="timeline-desc text-justify">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

