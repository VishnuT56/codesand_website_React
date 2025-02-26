

import React from 'react';
import './style.css'
import img from './Img/img.png'
import Video from './Video/Video.mp4'
import { AiFillAndroid } from "react-icons/ai";
import { IoLogoAngular } from "react-icons/io5";
import { IoLogoDocker } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { CgGitFork } from "react-icons/cg";
import { GrCodepen } from "react-icons/gr";
import { FaGithub, FaTwitter, FaGlobe, FaYoutube } from "react-icons/fa";


function CodeBox() {
  return (
    <div className="third">
      <h1 className="title1">Instant cloud</h1>
      <h1 className="title2">development</h1>
      <p className="description1">
        CodeSandbox gives you 24/7 collaborative cloud
      </p>
      <p className="description2">
        development environments (CDEs) that resume in 2 seconds.
      </p>
      <button className="button">Start for free</button>



      <div className="five">          
        <h1 className="title3">Meet a CDE that</h1>
        <h1 className="title4"> makes an impact</h1>
        <div className="stats">
          <div className="stat">
            <div className="value">5+</div>
            <div className="bold">hours saved</div>
            <div className="description"> per developer, per week</div>
          </div>
          <div className="stat">
            <div className="value">90%</div>
            <div className="bold">reduction</div>
            <div className="description"> in dev onboarding time</div>
          </div>
          <div className="stat">
            <div className="value">60%</div>
            <div className="description">of cloud workloads will be built and deployed using CDEs by 2026, <u>according to Gartner</u></div>
          </div>
        </div>
        <button className="learn-more">Learn more about CDES></button>
      </div>



      <div className="Six">
        <h1 className="title5">One environment for</h1>
        <h1 className="title6"> the whole team.</h1>
        <h1 className="title7">Get always consistent development environments</h1>
        <h1 className="title8">that boost productivity and empower collaboration.</h1>
        <div className='part'>
          <div className="next">
            <div className="head">Faster than local</div>
            <div className="tex">Get rid of slow build times and time lost in context-switching. Our powerful VMs run your code up to 200x faster than local and resume any project in 2 seconds.</div>
          </div>
          <div className="next">
            <div className="head">Works on everyone’s machine</div>
            <div className="tex">Instead of putting each developer's machine in the cloud, we run each branch on a centralized CDE that gives everyone the same experience.</div>
          </div>
          <div className="next">
            <div className="head">Collaborative 24/7</div>
            <div className="tex">CodeSandbox is the only fully collaborative CDE. Your entire team can connect to the same environment and code live, together, anytime.</div>
          </div>
          <div className="next">
            <div className="head">Reliable and secure</div>
            <div className="tex">We are SOC 2 Type II compliant, ensuring the security of your code and data. You get flexible permissions, access control, security monitoring, private npm, and more.</div>
          </div>
        </div>
        <div className="link">
          <button className="start">Start for free></button>
        </div>


        <div className="nex">
          <h1 className='title9'>Accelerate</h1>
          <h1 className='title10'>your git workflow.</h1>
          <h1 className='title11'>Shorten the review cycle with an all-in-one platform for</h1>
          <h1 className='title12'>efficient code reviews.</h1>
        </div>




        <div className="Vide">
          <div className="Video">
            <video width="1000" height="500" controls>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
          <div className="sidebar">
            <div className="sidebar-section">
              <h3>Every PR and branch is a URL</h3>
              <p>Get a cloud dev environment for every PR that starts in 2 seconds and integrates all code review tooling into a single platform.</p>
            </div>
            <div className="sidebar-section"> 
              <h3>Review code in record time</h3>
              <p>Save hours every week reviewing PRs. See the code, tests and a preview, make any necessary changes, and merge it.</p>
            </div>
            <div className="sidebar-section">      
              <h3>Collaborate effectively</h3>
              <p>Work seamlessly with your team in real time, with integrated tools to keep everyone on the same page.</p>
            </div>
          </div>


          <div className="sub">  
            <h1 className="sub1">Plug and Play</h1>
            <h1 className="ti1">Integrate seamlessly</h1>
            <h1 className="ti2">with your dev setup.</h1>
            <p className="description6">
              Get all the benefits of cloud development working
            </p>
            <p className="description6">
              flawlessly alongside your current setup.
            </p>
      
          </div>



          <div className="play">
            <div className="plug">
              <h2>Use the editor of your choice</h2>
              <p>Switch between VS Code and our web editor to keep coding and collaborating without skipping a beat.</p>
              <a href="#">VS Code Extension></a>
            </div>

            <div className="plug">
              <h2>GitHub integration</h2>
              <p>Review PRs in record time and get automatic deployment previews.</p>
              <a href="#">Install our GitHub App ></a>
            </div>

            <div className="plug">
              <h2>Pre-configured environments</h2>
              <p>We use Dev Containers to pre-configure your environments with all the required tools, libraries, and dependencies, so you can skip the setup and start coding.</p>
              <a href="#">Learn more ></a>
            </div>
          </div>
          <div className="sub">  
            <h1 className="sub1">Template universe</h1>
            <h1 className="ti1">Start with your</h1>
            <h1 className="ti2">favorite stack.</h1>
          </div>



          <div class="template-grid">
            <div class="card3">
              <div class="icon"><AiFillAndroid color='blue'/></div>
              <h3 class="title15">AI Code Completion</h3>
              <p class="description8">Write code faster using our built-in code completion.</p>
              <div class="stats"><CgGitFork fontSize='20'color='white'/>2.5k </div>
            </div>
            <div class="card3">
              <div class="icon"><IoLogoAngular color='red'/></div>
              <h3 class="title15">Angular</h3>
              <p class="description8">The quickest way to get started with Angular!</p>
              <div class="stats"><CgGitFork fontSize='21'color='white'/>271.5k </div>
            </div>
            <div class="card3">
              <div class="icon"><IoLogoDocker  color='blue'/></div>
              <h3 class="title15">Docker</h3>
              <p class="description8">The easiest way to get started from Docker in CodeSandbox.</p>
              <div class="stats"><CgGitFork fontSize='21'color='white'/>66.3k </div>
            </div>
            <div class="card3">
              <div class="icon"><FaHtml5 color='orange'/></div>
              <h3 class="title15">HTML + CSS</h3>
              <p class="description8">A template for HTML and CSS.</p>
              <div class="stats"><CgGitFork fontSize='21'color='white'/>23.4k </div>
            </div>
            <div class="card3">
              <div class="icon"><IoLogoJavascript color='yellow'/></div>
              <h3 class="title15">JavaScript</h3>
              <p class="description8">The JavaScript template.</p>
              <div class="stats"><CgGitFork fontSize='21'color='white'/>19.0k </div>
            </div>
            <div class="card3">
              <div class="icon"><SiNextdotjs color='black'/></div>
              <h3 class="title15">Next.js</h3>
              <p class="description8">The official Next.js template by the CodeSandbox team.</p>
              <div class="stats"><CgGitFork fontSize='15'color='white'/>88.3k </div>
            </div>
            <div class="card3">
              <div class="icon"><SiNextdotjs color='black'/></div>
              <h3 class="title15">Next.js + Postgres</h3>
              <p class="description8">Starter for a full-stack application using Next.js and Postgres.</p>
              <div class="stats"><CgGitFork fontSize='21'color='white'/>1.2k </div>
            </div>
            <div class="card3">
              <div class="icon"><FaPython  color='blue'/></div>
              <h3 class="title15">Python</h3>
              <p class="description8">The starter template of Python for CodeSandbox.</p>
              <div class="stats"><CgGitFork fontSize='20'color='white'/>105.2k </div>
            </div>
            <div class="card3">
              <div class="icon"><IoLogoReact color='blue'/></div>
              <h3 class="title15">React (JS)</h3>
              <p class="description8">Quickest way to get started with a React application.</p>
              <div class="stats"><CgGitFork fontSize='21'color='white'/>3.4k </div>
            </div>
          </div>
          <button class="explore-button">Explore templates</button>



          <div className="play">
            <div className="plug">
            <h4>4 million+</h4>
            <h5>users</h5>
          </div>

          <div className="plug">
            <h4>10,000+</h4>
            <h5>repositories connected</h5>      
          </div>

          <div className="plug">
            <h4>20,000+</h4>
            <h5>organizations</h5>        
          </div>
      
          <div className="plug">       
            <h4>1 million+</h4>
            <h5>lines of code written</h5>      
          </div>
        </div>


        <div className="ne">
          <h1 className='tit'>Join the future</h1>
          <h1 className='titl'>of building</h1>
        </div>
        <button class="explore-butt">Start for free</button>



        <img src={img}className='Img' alt='img'  width={'1515px'} height={'500px'} />

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
    </div>
    </div>

  );
}

export default CodeBox;
