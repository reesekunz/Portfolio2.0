import React, { useState } from 'react'
import "../App.scss"
import "./Home.css"
import { AiOutlineMessage, AiOutlineFire, AiOutlineCodeSandbox, AiOutlineHome, AiOutlineInfoCircle, AiOutlineClose, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMedium } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { MdPersonOutline, MdCode } from "react-icons/md";
import { BsPencil } from "react-icons/bs";

function AboutMe () {
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
            <h1 className='page-header'>About Me </h1>
            <p className='about-me-p'>
            I am a full-stack web developer and technical writer based in Portland, Oregon. My background in marketing from the University of Arizona has given me a unique perspective on the industry. As a <a className='about-link' target="_blank" href="https://www.bloomtech.com/">BloomTech</a> (FKA Lambda School) coding boot camp student, I gained valuable experience working with various technologies, including ReactJS, JavaScript, NodeJS, ExpressJS, and Python. Feel free to look at <a className='about-link' href="/portfolio">my portfolio</a> to see some of the projects I've been working on.  </p>
            {/* <p className='about-me-p'>
            During my time as a student at the coding bootcamp <a className='about-link' target="_blank" href="https://www.bloomtech.com/">Lambda School</a> (now called BloomTech) I gained valuable experience working with technologies such as ReactJS, JavaScript, NodeJS, ExpressJS, and Python. To learn more about the projects I've been working on, feel free to check out <a className='about-link' href="/portfolio">my portfolio</a>. </p>  */}
            <p className='about-me-p'>
         
            As a BloomTech student, I enjoyed learning about full-stack web development and the technical writing component. I enrolled in Technical Writing Certificate courses through Oregon State University to improve my skills. These courses covered various technical writing topics, including accessible documentation, user-centered design, usability, and universal design. Check out <a className='about-link' href="/writing">my writing page</a> for technical writing samples I've worked on.
           
         </p>
            <p className='about-me-p'>
         
Other interests: 🏀, 📺, 🎮, ⛰️, 🎶 </p>
            </div>
    )
}

export default AboutMe;