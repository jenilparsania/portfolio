import React from "react";
import "./Timeline.css"; // Add custom styles

const experiences = [
  {
    title: "Associate Data Engineer",
    company: "Shell, Bangalore",
    duration: "July 2023 - Present",
    description:
      "Built end-to-end data pipelines using Azure SQL DB, PySpark, Databricks, and PowerBI for dashboards. Used DBT for ETL to populate a data lake in the Medallion Architecture.",
    side: "right",
  },
  {
    title: "Data and AI Intern",
    company: "Cognitive Garage, Delhi",
    duration: "Jan 2023 - June 2023",
    description:
      "Analyzed transaction data for credit risk. Built an object detection model using YOLOv7 with 95% accuracy. Developed an RNN model for disease prediction based on symptoms.",
    side: "left",
  },
  {
    title: "Data Science Intern",
    company: "Lets Grow More, eLearning Company",
    duration: "March 2022 - April 2022",
    description:
      "Worked on ML and Deep Learning projects like Stock Market Prediction, Stacked LSTM, and a Music Recommendation System using TensorFlow and Sklearn.",
    side: "right",
  },
  {
    title: "Machine Learning Application Developer",
    company: "Technocolabs Softwares, Indore",
    duration: "Feb 2022 - March 2022",
    description:
      "Performed EDA on a 3M+ entry H-1B visa dataset. Built an ML model using Random Forest with 85% accuracy and deployed it using Flask and Heroku.",
    side: "left",
  },
];

export default function Timeline() {
  return (
    <div className="timeline-container pt-20 pb-12">
      <h3 className="text-white text-center text-3xl font-bold my-6">
        Work Experience
      </h3>
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

