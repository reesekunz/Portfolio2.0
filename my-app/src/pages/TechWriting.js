import React, { useState } from 'react'
import "../App.scss"
import "./Home.css"
import { AiOutlineMessage, AiOutlineFire, AiOutlineCodeSandbox, AiOutlineHome, AiOutlineInfoCircle, AiOutlineClose, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMedium } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { MdPersonOutline, MdCode } from "react-icons/md";
import { BsPencil } from "react-icons/bs";

function TechWriting() {
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
            <a href="/contact" className='hamburger-link'>
              <AiOutlineMessage size={25} color='white' />
              <p className='link-p'>
              Contact Me 
              </p>
              </a>
          

              </div>

            </div>
            <h1 className='page-header'>Technical Writing</h1>
            <p className='about-me-p'>
            Now based in Portland, Oregon, I'm a full-stack web developer and technical writer with a background in marketing from the University of Arizona. Currently I'm working as a developer at a startup called Gemint and also recently obtained a technical writing certificate through Oregon State University. </p>
            <p className='about-me-p'>
            During my time as a student at the coding bootcamp Lambda School (now called BloomTech) I gained valuable experience working with technologies such as ReactJS, JavaScript, NodeJS, ExpressJS, and Python. </p>
            <p className='about-me-p'>
         
Other interests: 🏀, 📺, 🎮, ⛰️, 🎶 </p>
            </div>
    )
}

export default TechWriting;