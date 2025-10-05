import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left side: Copyright */}
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="accent">Tenoyan</span>. All Rights Reserved.
        </p>

        {/* Right side: Social links */}
        <div className="footer-socials">
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
      </div>
    </footer>
  );
}

export default Footer;
