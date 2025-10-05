import React from 'react'
import {  FaCode, FaDatabase, FaLightbulb, FaBrain, FaChartLine, FaChartBar } from 'react-icons/fa';
import './About.css';
import Card from '../components/Card'; //importing card component
import { motion } from 'framer-motion';

function About() {

  return (
    <div className="about"
      // initial={{ opacity: 0, y: -30 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.6 }}
    >
      {/* Intro Card */}
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p>
          Hi, I'm <span className="accent">Tenoyan</span> 👋.  
          A passionate <strong>Software Engineer</strong> and <strong>Data Analyst</strong> with experience 
          in Java, Python, SQL, Excel, and Power BI.  
          I love turning complex data into meaningful insights and building 
          modern, user-friendly applications.
        </p>
        <p>
          Outside of coding, I enjoy learning new technologies, solving real-world problems, 
          and constantly improving my skills.
        </p>
      </div>

      {/* Knowledge Cards */}
      <motion.div className="about-cards"
        lassName="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, delay:  0.5 }}
      >
            
            <Card 
              icon={<FaChartBar />} 
              title="Data Visualization" 
              description="Creating compelling visualizations that tell stories." 
            />

            <Card 
              icon= {<FaDatabase />}
              title="Database Management"
              description= "Designing and optimizing SQL databases for performance." 
            />

            <Card 
              icon= {<FaCode />}
              title= "Software Development"
              description="Building scalable and maintainable web applications."
            />

            <Card 
              icon= {<FaLightbulb />}
              title= "Problem Solving"
              description= "Transforming complex challenges into practical solutions." 
            />

            <Card 
              icon= {<FaBrain />}
              title= "Machine Learning"
              description= "Building predictive models and classification systems."
            />

            <Card 
              icon= {<FaChartLine />}
              title= "Statistical Analysis"
              description= "Applying advanced statistical methods and hypothesis testing."
            />
          </motion.div>
      </div>
    
  );
}

export default About;

