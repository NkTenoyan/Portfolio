import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

// Skill categories with titles, descriptions, and skills with proficiency levels
const skillCategories = [
  {
    title: "💻 Programming",
    description:
      "Skilled in designing efficient, scalable applications with a strong foundation in data structures and algorithms.",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "📊 Data Visualization",
    description:
      "Creating compelling dashboards and visualizations to make data-driven decisions clear and accessible.",
    skills: [
      { name: "Power BI", level: 85 },
      { name: "Excel", level: 90 },
      { name: "Matplotlib / Seaborn", level: 75 },
    ],
  },
  {
    title: "📈 Statistics",
    description:
      "Applying advanced statistical methods and hypothesis testing to derive insights from data.",
    skills: [
      { name: "Hypothesis Testing", level: 80 },
      { name: "Regression Analysis", level: 75 },
      { name: "Probability", level: 70 },
    ],
  },
  {
    title: "🤖 Machine Learning",
    description:
      "Building predictive models, classification systems, and working with ML algorithms.",
    skills: [
      { name: "Scikit-learn", level: 80 },
      { name: "TensorFlow", level: 70 },
      { name: "Pandas / NumPy", level: 85 },
    ],
  },
  {
    title: "🌐 Web Development",
    description:
      "Building responsive, modern, and user-friendly applications with clean and scalable code.",
    skills: [
      { name: "React.js", level: 80 },
      { name: "HTML / CSS", level: 85 },
      { name: "Node.js", level: 70 },
    ],
  },
];

function Skills() {
  return (
    <div className="skills">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="skills-title"
      >
        My Skills
      </motion.h1>

        {/* title and description */}
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{category.title}</h3>
            <p>{category.description}</p>

              {/* diagram */}
            <div className="progress-list"> 
              {category.skills.map((skill, i) => (
                <div key={i} className="progress-item">
                  <span>{skill.name}</span>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: i * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
}

export default Skills;
