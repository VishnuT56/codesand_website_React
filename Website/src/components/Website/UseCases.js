import React from 'react'
import './function.css'
import img from './Img/img.png'
import projectCaro from './Img/projectCaro.png'
import projectDesign from './Img/projectDesign.png'
import workImage from './Img/workImage.png'
import { GrCodepen } from "react-icons/gr";
import {  FaGithub, FaTwitter, FaGlobe, FaYoutube } from "react-icons/fa";

function UseCases() {
  return (
    <div>
        <section className="hero">
            <h1 className="hero-title">Cloud Development</h1>
            <h1 className="hero-title">Environments</h1>
            <p className="hero-subtitle">Give every developer a 2x faster machine.</p>
            <a href="#" className="hero-link">Learn more &rsaquo;</a>
        </section>
        <div className='imag5'>
            <img src={img}className='Img' alt='img'  width={'1100px'} height={'500px'} />
        </div>

        <section className="hero">
            <h1 className="hero-title">Code</h1>
            <h1 className="hero-title">Reviews</h1>
            <p className="hero-subtitle">Review PRs without breaking flow.</p>
            <a href="#" className="hero-link">Learn more &rsaquo;</a>
        </section>
        <div className='imag5'>
            <img src={projectCaro}className='Img' alt='projectCaro'  width={'1100px'} height={'500px'} />
        </div>

        <section className="hero">
            <h1 className="hero-title">Code in</h1>
            <h1 className="hero-title">Sandboxes</h1>
            <p className="hero-subtitle">Prototype your ideas in record time.</p>
            <a href="#" className="hero-link">Learn more &rsaquo;</a>
        </section>
        <div className='imag5'>
            <img src={projectDesign}className='Img' alt='projectDesign'  width={'1100px'} height={'500px'} />
        </div>

        <section className="hero">
            <h1 className="hero-title">Learn &</h1>
            <h1 className="hero-title">Experiment</h1>
            <p className="hero-subtitle">Try frameworks and new tools.</p>
            <a href="#" className="hero-link">Learn more &rsaquo;</a>
        </section>
        <div className='imag5'>
            <img src={workImage}className='Img' alt='workImage'  width={'1100px'} height={'500px'} />
        </div>


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

export default UseCases