import React, { useState } from 'react'
import "./projects.scss"
import BCFLogo from "../images/BCFLogo.png"
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineMessage, AiOutlineFire, AiOutlineCodeSandbox, AiOutlineHome, AiOutlineInfoCircle, AiOutlineClose, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMedium } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { MdPersonOutline, MdCode } from "react-icons/md";
import { BsPencil } from "react-icons/bs";

function StoryTelling () {
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
              <MdCode  size={25} color='#072a49'/>
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
                <img className='project-img' src={BCFLogo} />
            </div>
                {/* Intro Pt 1. */}
                <div className='intro-1-wrapper'>
            <p className='intro-1-p'>            Created a central location for gathering success stories for the{" "}
              {""}
              <a
                className="project-a"
                href="https://bountifulchildren.org/"
                target="_blank"
              >
                Bountiful Children's Foundation
              </a>
              .
</p>
            <div className='intro-1-links'>
            {/* <a className='intro-1-link' target="_blank" href="https://welldone-water.now.sh/">View live</a> */}
            <a className='intro-1-link' target="_blank"
                href="https://github.com/Coordinated-Story-Telling/Back-End">Github</a>
                </div>

            </div>
            {/* Intro/Description */}
            <div className='project-section'>
            <h3 className='project-header'>Intro</h3>
            <p className='project-p'>Bountiful Children's Foundation is deeply committed to addressing the critical issue of malnutrition among infants and toddlers. Their primary focus revolves around reducing malnutrition rates, and they employ various strategies to accomplish this mission. One of their key approaches involves spreading awareness about their cause. To achieve this, they capture and distribute inspiring success stories of children who have experienced significant improvements in their health due to the foundation's efforts. By showcasing tangible results, they effectively generate increased support and donations from individuals who witness the transformative impact of their contributions.

</p>
            <p className='project-p'>During a Lambda School build week, myself and another student had the privilege of working on an impactful project for Bountiful Children's Foundation. With the objective of advancing to the next section of our boot camp, we were tasked with developing a fully functional backend within a limited timeframe of one week. Our primary responsibility was to create a centralized repository where these success stories could be stored, greatly enhancing the foundation's organizational capabilities and workflow processes.</p>
<p className='project-p'>By building this backend system, we aimed to streamline the foundation's operations and provide a robust platform for managing and accessing these inspiring narratives. This efficient storage solution ensures that the success stories are easily retrievable, enabling the Bountiful Children's Foundation to leverage them effectively in their awareness campaigns. Through our contribution, we hope to have made a tangible difference in the foundation's ability to reach more individuals and garner increased support for their vital mission of combating infant and toddler malnutrition.</p>
            </div>
             {/* Role */}
             <div className='project-section'>
            <h3 className='project-header'>Role</h3>
            <h4 className='role-header'>Backend Developer </h4>
            {/* <p className='project-p'>A fun and challenging part of working at a startup is the variety of roles you work in. Here's what I've worked on so far:</p> */}
            <ul className='role-ul'>
            <li className='role-li'>Developed Express models and routes for API endpoints, including users, countries, and stories </li>
            <li className='role-li'>Utilized Knex migrations for creating database tables and Knex seeds for populating the database</li>
            <li className='role-li'>Implemented custom middleware for validation, JWT-based authentication, bcrypt-based hashing, and Jest testing </li>

            </ul>
            </div>
             {/* Tech */}
             <div className='project-section' id='last'>
            <h3 className='project-header'>Tech Stack</h3>
            <div className='project-p' id='tech-stack'>
            <p className='tech-p'>NodeJS </p>
            <p className='tech-p'>ExpressJS </p>
            <p className='tech-p'>Jest </p>
            <p className='tech-p'>KnexJS </p>
            <p className='tech-p'>SQLite3 </p>
            <p className='tech-p'>Heroku </p>


                </div>

          
            
               
            </div>
        </div>
    )
}

export default StoryTelling;