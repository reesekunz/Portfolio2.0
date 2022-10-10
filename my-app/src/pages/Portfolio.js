import React, { useState } from 'react'
import { Link } from "react-router-dom";

import "../App.scss"
import "./Home.css"
import { AiOutlineMessage, AiOutlineFire, AiOutlineCodeSandbox, AiOutlineHome, AiOutlineInfoCircle, AiOutlineClose, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMedium } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { MdPersonOutline, MdCode } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import CoordinatedStories from "../images/CoordinatedStories.png";
import WellDone from "../images/WellDoneScreenshot.png";
import Gemint2 from "../images/Gemint5.png"

function Portfolio() {
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
        <div className='container'>
               <div className='top'>
              <BiMenu onClick={HamburgerContent} className='hamburger' color='indianred' size={50}  />

            </div>
             <div className='hamburger-content'>
            <div className='close-btn-wrapper'>
            <AiOutlineClose onClick={HamburgerContent} className='close-btn' color='indianred' size={40}  />
            </div>
            <div className='hamburger-links'>
            <a href="/" className='hamburger-link'>
              <AiOutlineHome size={25} color='indianred' />
              <p className='link-p'>
              Home 
              </p>
              </a>
            <a href="/about" className='hamburger-link'>
              <MdPersonOutline size={25} color='indianred' />
              <p className='link-p'>
              About Me
              </p>
              </a>
            <a href="/portfolio" className='hamburger-link'>
              <MdCode  size={25} color='indianred' />
              <p className='link-p'>
              Portfolio 
              </p>
              </a>
            <a href="/writing" className='hamburger-link'>
              <BsPencil size={25} color='indianred' />
              <p className='link-p'>
              Technical Writing 
              </p>
              </a>
            <a href="/blog" className='hamburger-link'>
              <AiOutlineFire size={25} color='indianred' />
              <p className='link-p'>
              Blog  
              </p>
              </a>
            {/* <a href="/contact" className='hamburger-link'>
              <AiOutlineMessage size={25} color='white' />
              <p className='link-p'>
              Contact Me 
              </p>
              </a> */}
          

              </div>

            </div>
            <h1 className='page-header'>Portfolio</h1>
            {/* <p className='about-me-p'>
   I had a positive experience learning about full-stack web development as a student at Lambda School. I really enjoyed the technical writing aspect of recording documentation, project steps, readme, etc. and decided it was something that I wanted to devote more time improving.                        Recently I obtained my Technical Writing Certificate through Oregon State University. In these courses we learned about a variety of technical writing topics, including accessible documentation, user-centered design, usability, and universal design.           


         </p>
         
            <p className='about-me-p'>
         
            To me, technical writing is the process of taking in information and presenting it in a more effective manner for your audience. As a technical writer that specializes in web development, I have a background that helps me communicate complex steps or problems in a concise and organized way.    </p> */}
           <div className='portfolio-wrapper'>

             <div className='project'>
               <div className='project-left'>
             <h3 className='project-number'>WORK 01</h3>
             <h1 className='project-title'>Gemint</h1>
             <p className='project-description'>     <a
                href="https://gemint.com/"
                target="_blank"
                className="company-link"
              >
                Gemint
              </a> is a sports card media platform that provides card breaking tools, checklists, and news.</p>
             <button className='details-btn'>
      <Link className='details-link' to="/portfolio/gemint">
              Project Details
            </Link>      </button>
            </div>
            <div className='project-middle'></div>

            <div className='project-right'>
            <div id='project-img-wrapper'>
      <img id='project-img' src={Gemint2} />
      {/* <p className='img-caption'>
      </p> */}
      </div>            </div>
             </div>

             <div className='project'>
               <div className='project-left'>
             <h3 className='project-number'>WORK 02</h3>
             <h1 className='project-title'>WellDone</h1>
             <p className='project-description'>Built a backend to persist well sensor data and a frontend to
              visualize which pumps need maintenance for{" "}
              <a
                href="https://welldone.org/"
                target="_blank"
                className="company-link"
              >
                WellDone
              </a>.</p>
             <button className='details-btn'>
             <Link className='details-link' to="/portfolio/welldone">
             Project Details
            </Link>      </button>
            </div>
            <div className='project-middle'></div>

            <div className='project-right'>
            <div id='project-img-wrapper'>
      <img id='project-img' src={WellDone} />
      {/* <p className='img-caption'>
      </p> */}
      </div>            </div>
             </div>

             <div className='project' id='three'>
               <div className='project-left'>
             <h3 className='project-number'>WORK 03</h3>
             <h1 className='project-title'>Coordinated Story Telling </h1>
             <p className='project-description'>Created a central location for gathering success stories for the{" "}
              {""}
              <a
                className="company-link"
                href="https://bountifulchildren.org/"
                target="_blank"
              >
                Bountiful Children's Foundation
              </a>
              .</p>
             <button className='details-btn'>
             <Link className='details-link' to="/portfolio/storytelling">
              Project Details
            </Link>      </button>
            </div>
            <div className='project-middle'></div>
            <div className='project-right'>
            <div id='project-img-wrapper'>
      <img id='project-img' src={CoordinatedStories} />
      {/* <p className='img-caption'>
      </p> */}
      </div>            </div>
             </div>
           </div>
           
            </div>
    )
}

export default Portfolio;