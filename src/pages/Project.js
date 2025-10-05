import React from 'react';
import { motion } from 'framer-motion';
import './Project.css';
import fd from '../assets/download.jpeg'
import sts from '../assets/0_u1QpOaoU0NGVOhkC.jpg'
import pizza from '../assets/1000276461.png'

function Project() {
  const projects = [
    {
      title: "Fraud Detection using Statistical Modeling",
      description: "Developed a comprehensive fraud detection system using statistical modeling techniques including anomaly detection, logistic regression, and ensemble methods.",
      image: fd,
      link: "https://github.com/Tenoyan/Credit_Card_Fraud_Detection",
    },
    {
      title: "SARIMA Time Series Forecasting",
      description: "Implemented SARIMA models for time series forecasting with seasonal decomposition, ACF/PACF analysis, and model validation techniques.",
      image: sts,
      link: "https://github.com/Tenoyan/Sales-prediction-using-historical-sales-transaction-data",
    },
    {
      title: "Pizza Sales Dashboard",
      description: "Develope dadashboard using Pizza sales historical data. A Pizza Sales Dashboard in PowerBI provides a visual representation of key sales metrics, trends, and per formance insights related to pizza sales.",
      image: pizza,
      link: "https://github.com/Tenoyan/Pizza-Sales-Dashboard-",
    },
  ];

  return (
    <div className="project">
      <motion.h2
        className="project-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((proj, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Project;
