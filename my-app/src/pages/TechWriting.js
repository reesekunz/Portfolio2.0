import React, { useState } from 'react'
import { Link } from "react-router-dom";

import "../App.scss"
import "./Home.css"
import { AiOutlineMessage, AiOutlineFire, AiOutlineCodeSandbox, AiOutlineHome, AiOutlineInfoCircle, AiOutlineClose, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMedium } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { MdPersonOutline, MdCode } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import Coffee from "../images/coffee.jpeg";
import Muffin from "../images/muffin.jpeg";
import UniversalDesign from "../images/universal_design.jpeg";

function TechWriting() {
    const [toggle, setToggle] = useState(true)
    
    function HamburgerContent () {
        setToggle(!toggle)
        console.log(toggle)
        var hamburgerContent = document.querySelector(".hamburger-content")
        var hamburgerLinks= document.querySelector(".hamburger-links")
      
      
        if (toggle == true) {

          if (window.innerWidth < 1000) {
            hamburgerContent.style.width = '80%'
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
            <h1 className='page-header'>Technical Writing</h1>
            {/* <p className='about-me-p'>
   I had a positive experience learning about full-stack web development as a student at Lambda School. I really enjoyed the technical writing aspect of recording documentation, project steps, readme, etc. and decided it was something that I wanted to devote more time improving.                        Recently I obtained my Technical Writing Certificate through Oregon State University. In these courses we learned about a variety of technical writing topics, including accessible documentation, user-centered design, usability, and universal design.           


         </p> */}
         
            {/* <p className='about-me-p'>
         
            To me, technical writing is the process of taking in information and presenting it in a more effective manner for your audience. As a technical writer that specializes in web development, I have a background that helps me communicate complex steps or problems in a concise and organized way.    </p> */}
           <div className='portfolio-wrapper'>

             <div className='project'>
               <div className='project-left'>
             <h3 className='project-number'>WORK 01</h3>
             <h1 className='project-title'>Keurig Owner’s Manual</h1>
             <p className='project-description'>Sample owner’s manual for the K-Classic Coffee Maker.</p>
             <button className='details-btn'>
      <Link className='details-link' to="/Keurig_Owners_Manual.pdf" target="_blank" download>
              Download PDF
            </Link>      </button>
            </div>
            <div className='project-middle'></div>

            <div className='project-right'>
            <div id='project-img-wrapper'>
      <img id='project-img' src={Coffee} />
      <p className='img-caption'>
      Photo by Kaboompics on Pexels.com
      </p>
      </div>            </div>
             </div>

             <div className='project'>
               <div className='project-left'>
             <h3 className='project-number'>WORK 02</h3>
             <h1 className='project-title'>Recipe Process and Procedure Flow</h1>
             <p className='project-description'>A detailed process and procedure flow for a delicious blueberry muffin recipe.</p>
             <button className='details-btn'>
      <Link className='details-link' to="/Recipe_Process_Flow.pdf" target="_blank" download>
              Download PDF
            </Link>      </button>
            </div>
            <div className='project-middle'></div>

            <div className='project-right'>
            <div id='project-img-wrapper'>
      <img id='project-img' src={Muffin} />
      <p className='img-caption'>
      Photo by Ela Haney on Pexels.com
      </p>
      </div>            </div>
             </div>

             <div className='project' id='three'>
               <div className='project-left'>
             <h3 className='project-number'>WORK 03</h3>
             <h1 className='project-title'>Universal Design Principles Presentation</h1>
             <p className='project-description'>A PowerPoint presentation highlighting key aspects of universal design.</p>
             <button className='details-btn'>
      <Link className='details-link' to="/UX_Design.pdf" target="_blank" download>
              Download PDF
            </Link>      </button>
            </div>
            <div className='project-middle'></div>
            <div className='project-right'>
            <div id='project-img-wrapper'>
      <img id='project-img' src={UniversalDesign} />
      <p className='img-caption'>
      Photo by Kaboompics on Pexels.com
      </p>
      </div>            </div>
             </div>
           </div>
           
            </div>
    )
}

export default TechWriting;