import React, { useState } from 'react'
import "./projects.scss"
import WellDoneLogo from "../images/WelldoneLogo.png"
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineMessage, AiOutlineFire, AiOutlineCodeSandbox, AiOutlineHome, AiOutlineInfoCircle, AiOutlineClose, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMedium } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { MdPersonOutline, MdCode } from "react-icons/md";
import { BsPencil } from "react-icons/bs";

function WellDone () {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const [toggle, setToggle] = useState(true)
    
      function HamburgerContent () {
          setToggle(!toggle)
          console.log(toggle)
          var hamburgerContent = document.querySelector(".hamburger-content")
          var hamburgerLinks= document.querySelector(".hamburger-links")
        
        
          if (toggle == true) {
  
            if (window.innerWidth < 1000) {
              hamburgerContent.style.width = '100%'
            } else {
              hamburgerContent.style.width = '30%'
          
          }
            hamburgerContent.style.display = 'flex'
            hamburgerContent.style.transition = `all .5s`;
            hamburgerContent.style.visibility = 'visible'
        
            hamburgerLinks.style.display = 'flex'
        
            
        
          }
          else {
            // hamburgerContent.style.display = 'none'
            hamburgerContent.style.width = '0%'
            hamburgerContent.style.transition = `all .5s`;
            hamburgerContent.style.visibility = 'hidden'
        
            hamburgerLinks.style.display = 'none'
        
        
        
          }
        
        }
        
    return (
        <div className='projects-container'>
            <div className='top'>
              <BiMenu onClick={HamburgerContent} className='hamburger' color='#072a49' size={50}  />

            </div>
             <div className='hamburger-content'>
            <div className='close-btn-wrapper'>
            <AiOutlineClose onClick={HamburgerContent} className='close-btn' color='#072a49' size={40}  />
            </div>
            <div className='hamburger-links'>
            <a href="/" className='hamburger-link'>
              <AiOutlineHome size={25} color='#072a49' />
              <p className='link-p'>
              Home 
              </p>
              </a>
            <a href="/about" className='hamburger-link'>
              <MdPersonOutline size={25} color='#072a49' />
              <p className='link-p'>
              About Me
              </p>
              </a>
            <a href="/portfolio" className='hamburger-link'>
              <MdCode  size={25} color='#072a49' />
              <p className='link-p'>
              Portfolio 
              </p>
              </a>
            <a href="/writing" className='hamburger-link'>
              <BsPencil size={25} color='#072a49' />
              <p className='link-p'>
              Technical Writing 
              </p>
              </a>
 

              </div>

            </div>
            <div className='project-img-wrapper'>
                <img className='project-img' src={WellDoneLogo} />
            </div>
                {/* Intro Pt 1. */}
                <div className='intro-1-wrapper'>
            <p className='intro-1-p'>            Built a backend to persist well sensor data and a frontend to
              visualize which pumps need maintenance for{" "}
              <a
                href="https://welldone.org/"
                target="_blank"
             className='project-a'
              >
                WellDone
              </a>.
</p>
            <div className='intro-1-links'>
            <a className='intro-1-link' target="_blank" href="https://welldone-water.now.sh/">View live</a>
            <a className='intro-1-link' target="_blank"
                href="https://github.com/labs17-WellDone">Github</a>
                </div>

            </div>
            {/* Intro/Description */}
            <div className='project-section'>
            <h3 className='project-header'>Intro</h3>
            <p className='project-p'>WellDone International is a dedicated non-profit organization committed to enhancing access to clean water, a fundamental requirement for human health, productivity, and overall well-being. With a focus on transformative and community-driven solutions, they leverage research, technology, and design to catalyze sustainable development initiatives. To achieve their mission, WellDone International deploys proprietary modular sensors on pumps, initially in Cambodia and soon expanding to Uganda.</p>
            <p className='project-p'>Lambda School Labs provided an invaluable opportunity for our team of eight to gain practical experience and contribute to meaningful projects. In collaboration with real stakeholders, we took on the responsibility of building upon the progress made by Labs 15. Specifically, we were entrusted with enhancing the internal dashboard used to monitor the real-time functionality of pumps. Our efforts included developing a robust backend infrastructure while improving the aesthetics and user-friendliness of the front-end interface. </p>
<p className='project-p'>In addition to our development work, we took the initiative to create a comprehensive set of tests and informative resources for future developers involved in this project. This includes a detailed readme and API documentation, ensuring the continuity and longevity of the project beyond our involvement. We are proud to have contributed to this important cause and are confident that our efforts will make a lasting impact on the communities served by WellDone International.</p>
            </div>
             {/* Role */}
             <div className='project-section'>
            <h3 className='project-header'>Role</h3>
            <h4 className='role-header'>Full-stack Developer</h4>
            {/* <p className='project-p'>A fun and challenging part of working at a startup is the variety of roles you work in. Here's what I've worked on so far:</p> */}
            <ul className='role-ul'>
                <li className='role-li'>Developed production-ready APIs with data persistence and secure user authentication using Node, Express, and PostgreSQL</li>
                <li className='role-li'> Collaborated with back-end engineers to implement API integrations, providing CRUD functionality to logged-in users</li>
                <li className='role-li'>Performed in-depth technical research and engaged with stakeholders, gaining insights into client needs and database schema</li>
            </ul>
            </div>
             {/* Tech */}
             <div className='project-section' id='last'>
            <h3 className='project-header'>Tech Stack</h3>
            <div className='project-p' id='tech-stack'>
            <p className='tech-p'>ReactJS </p>
            <p className='tech-p'>NodeJS </p>
            <p className='tech-p'>ExpressJS </p>
            <p className='tech-p'>SQLite3 </p>
            <p className='tech-p'>PostgreSQL </p>
            <p className='tech-p'>Vercel </p>


                </div>

          
            
               
            </div>
        </div>
    )
}

export default WellDone;