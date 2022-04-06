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
              <BiMenu onClick={HamburgerContent} className='hamburger' color='black' size={50}  />

            </div>
             <div className='hamburger-content'>
            <div className='close-btn-wrapper'>
            <AiOutlineClose onClick={HamburgerContent} className='close-btn' color='indianred' size={40}  />
            </div>
            <div className='hamburger-links'>
            <a href="/" className='hamburger-link'>
              <AiOutlineHome size={25} color='white' />
              <p className='link-p'>
              Home 
              </p>
              </a>
            <a href="/about" className='hamburger-link'>
              <MdPersonOutline size={25} color='white' />
              <p className='link-p'>
              About Me
              </p>
              </a>
            <a href="/portfolio" className='hamburger-link'>
              <MdCode  size={25} color='white' />
              <p className='link-p'>
              Portfolio 
              </p>
              </a>
            <a href="/writing" className='hamburger-link'>
              <BsPencil size={25} color='white' />
              <p className='link-p'>
              Technical Writing 
              </p>
              </a>
            <a href="/blog" className='hamburger-link'>
              <AiOutlineFire size={25} color='white' />
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
            <h1 className='page-header'>About Me </h1>
            <p className='about-me-p'>
            Now based in Portland, Oregon, I'm a full-stack web developer and technical writer with a background in marketing from the University of Arizona. Currently I'm working as a developer at a startup called <a className='about-link' target="_blank" href="https://www.gemint.com/">Gemint</a>. </p>
            <p className='about-me-p'>
            During my time as a student at the coding bootcamp <a className='about-link' target="_blank" href="https://www.bloomtech.com/">Lambda School</a> (now called BloomTech) I gained valuable experience working with technologies such as ReactJS, JavaScript, NodeJS, ExpressJS, and Python. To learn more about the projects I've been working on, feel free to check out <a className='about-link' href="/portfolio">my portfolio</a>. </p> 
            <p className='about-me-p'>
         
            I had a positive experience learning about full-stack web development as a student at Lambda School. I really enjoyed the technical writing aspect of recording documentation, project steps, readme, etc. and decided it was something that I wanted to devote more time improving.                        Recently I obtained my Technical Writing Certificate through Oregon State University. In these courses we learned about a variety of technical writing topics, including accessible documentation, user-centered design, usability, and universal design. 
            You can view the technical writing samples I've worked on <a className='about-link' href="/writing">here</a>. 
                        {/* To me, technical writing is the process of taking in information and presenting it in a more effective manner for your audience. As a technical writer that specializes in web development, I have a background that helps me communicate complex steps or problems in a concise and organized way.     */}
           
         </p>
            <p className='about-me-p'>
         
Other interests: 🏀, 📺, 🎮, ⛰️, 🎶 </p>
            </div>
    )
}

export default AboutMe;