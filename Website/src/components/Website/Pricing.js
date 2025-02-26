import React from 'react'
import './function.css'
import { GrCodepen } from "react-icons/gr";
import {  FaGithub, FaTwitter, FaGlobe, FaYoutube } from "react-icons/fa";

function Pricing() {
  return (

    <div>
      <section className="heroo">
        <p className="heroo-subtitle">Free to learn and experiment.</p>
        <p className="heroo-subtitle">Pay as you grow.</p> 
      </section>
      <footer className="footer">
        <div className="footer-logo"><GrCodepen size={50} color='blue'/>
          <div className="logo-box">CodeBox</div>
        </div>
        <div className="footer-section">
          <h4>Use Cases</h4>
          <ul>
                    <li>Cloud Dev Environments</li>
                    <li>Code Reviews</li>
                    <li>Code in Sandboxes</li>
                    <li>Learn & Experiment</li>
                    <li>Coding Exercises</li>
                    <li>Instant Feedback</li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h4>Ecosystem</h4>
                  <ul>
                    <li>Features</li>
                    <li>VS Code Extension</li>
                    <li>Sandpack</li>
                    <li>Status</li>
                    <li>Enterprise</li>
                    <li>Pricing</li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h4>Explore</h4>
                  <ul>
                    <li>Discover</li>
                    <li>Changelog</li>
                    <li>Documentation</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h4>Company</h4>
                  <ul>
                    <li>About</li>
                    <li>Support</li>
                    <li>Careers</li>
                    <li>Brand kit</li>
                  </ul>
                </div>
              </footer>
          
          
          
          
              <footer className="foot">
                <p className="footer-text">Copyright © 2024 CodeSandbox B.V. All rights reserved.</p>
                <div className="footer-links">
                  <a href="#" className="footer-link">Terms of Use</a>
                  <span className="footer-separator">|</span>
                  <a href="#" className="footer-link">Privacy & Cookie Policy</a>
                </div>
              
                <div className="footer-icons">
                  <a href="#" className="hover:text-white"><FaGithub size={20} color='white' /></a>
                  <a href="#" className="hover:text-white"><FaTwitter size={20} color='white'/></a>
                  <a href="#" className="hover:text-white"><FaGlobe size={20} color='white'/></a>
                  <a href="#" className="hover:text-white"><FaYoutube size={20} color='white'/></a>
                </div>
              </footer>
    </div>
  )
}

export default Pricing