import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import './Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar() {

    const[isOpen, setIsOpen] = useState(false); // track menu state
    const toggle = () => setIsOpen(!isOpen); // toggle menu state
    const close = () => setIsOpen(false); // close menu

  return (
    <motion.nav className="navbar"
        // initial={{ y: -40, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >   
        <Link to='home' smooth={true} duration={600} onClick={close} offset={-140}>
            <div className="navbar-logo"> 
                Nk
                {/* <motion.div className="heart" animate={{ rotateY: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}><FaHeart/></motion.div> */}
                <div className="name">
                Tenoyan 
                </div>  
            </div>  
        </Link>
   
        
                
            <ul className='nav-links'> 
                <li><Link to="home" smooth={true} duration={600} onClick={close} offset={-140}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={600} onClick={close} offset={-120}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={600} onClick={close} >Skills</Link></li>
                <li><Link to="project" smooth={true} duration={600} onClick={close} offset={-50} >Project</Link></li>
                <li><Link to="contact" smooth={true} duration={600} onClick={close} offset={-50} >Contact</Link></li>
            </ul>

            <div className="menu-btn" onClick={toggle}>
                {isOpen ? <FaTimes/> : <FaBars/>}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul 
                        className='mobile-menu'
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                        whileHover={{ scale: 1.06 }}
                    >

                        {/* <div className="close-btn" onClick={close}>
                            <FaTimes />
                        </div> */}
                        
                        
                        <li><Link to="home" smooth={true} duration={600} onClick={close} offset={-70}>Home</Link></li>
                        <li><Link to="about" smooth={true} duration={600} onClick={close} offset={-70} >About</Link></li>
                        <li><Link to="skills" smooth={true} duration={600} onClick={close} >Skills</Link></li>
                        <li><Link to="project" smooth={true} duration={600} onClick={close} offset={-20} >Project</Link></li>
                        <li><Link to="contact" smooth={true} duration={600} onClick={close} offset={-10}>Contact</Link></li>
                    </motion.ul>
                )}  
            </AnimatePresence>

    </motion.nav>
  )
}

export default Navbar