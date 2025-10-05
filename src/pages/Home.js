import React from 'react';
import Button from '../components/Button';
// import { useNavigate } from 'react-router-dom';
import pic from '../assets/WhatsApp Image 2025-10-01 at 12.15.05_a1d5e6e3.jpg';
import { motion } from 'framer-motion';
import './Home.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-scroll';


function Home() {

    // const negative = useNavigate(); //navigate to other pages

    // //functions to navigate to other pages
    // const goToProject = () => {
    //     negative('/project');
    // }

    // const goToContact = () => {
    //     negative('/contact');
    

  return (
    <div  className='home'>
        <motion.div
            className='home-content'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className='typing'>Hello I'm <span className='accent'>Tenoyan</span></h1>
            
            <p>A passionate Software Engineer & Data Analyst with expertise in Java, Python, SQL, Excel, and Power BI.
               I love turning data into insights and building smart, practical solutions
            </p>
        

            <motion.div
                className='stats'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >  
                
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08, type: 'spring', stiffness: 260, damping: 20 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -6, boxShadow: '0 12px 28px rgba(0,0,0,0.16)' }}
                    style={{alignItems: 'center'}}
                > 
                    {/* <FaProjectDiagram className='icon' /> */}
                    <h2>3+</h2>
                    <p>Project Completed</p>
                </motion.div>
                
            </motion.div>

            {/* button components */}
            <div className='buttons'> 
                {/* <Button className='btn' onClick={goToProject} variant='primary'> See My Work</Button> */}
                {/* <Button className='btn' onClick={goToContact} variant='secondary'>Get In Touch</Button> */}

                <Link to="project" smooth={true} duration={600} >
                    <Button className='btn' variant='primary'>See My Work</Button>
                </Link>

                <Link to="contact" smooth={true} duration={600}>
                    <Button variant='secondary'>Get In Touch</Button>
                </Link>
            </div>

            <div className="home-socials">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/nk-tenoyan-2592b3214/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="mailto:tenotenoyan@gmail.com">
                    <FaEnvelope />
                </a>
            </div>

        </motion.div>

            {/* profile image */}
            <motion.div
                className='home-image'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <img src={pic} alt="profile" />
        </motion.div>

        

       
       
    </div>
  )
}

export default Home