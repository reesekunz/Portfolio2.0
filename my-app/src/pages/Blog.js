import React, { useState } from 'react'
import "../App.scss"
import "./Home.css"
import { AiOutlineMessage, AiOutlineFire, AiOutlineCodeSandbox, AiOutlineHome, AiOutlineInfoCircle, AiOutlineClose, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMedium } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { MdPersonOutline, MdCode } from "react-icons/md";
import { BsPencil } from "react-icons/bs";

function Blog () {
    const [toggle, setToggle] = useState(true)
    
    function HamburgerContent () {
        setToggle(!toggle)
        console.log(toggle)
        var hamburgerContent = document.querySelector(".hamburger-content")
        var hamburgerLinks= document.querySelector(".hamburger-links")
      
      
        if (toggle == true) {

          if (window.innerWidth < 1000) {
            hamburgerContent.style.width = '60%'
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
            <h1 className='page-header'>Blog </h1>
            <div className='blog-links'>
      <a className='blog-link' target="_blank" href="https://medium.com/@reesek/gemint-product-updates-march-2-2022-92f815bea944?source=user_profile---------0-------------------------------">
      Gemint Product Updates — March 2, 2022
      </a>
      <div id='view-all-wrapper'>
      <a id='view-all-link' target="_blank" href="https://medium.com/@reesek">View All</a>
      </div>
    </div>
            </div>
    )
}

export default Blog;