import React, { useState } from 'react'
import "./Home.css"
import { AiOutlineMessage, AiOutlineFire, AiOutlineCodeSandbox, AiOutlineHome, AiOutlineInfoCircle, AiOutlineClose, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMedium } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { MdPersonOutline, MdCode } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReeseImg2 from "../images/ReeseIMG2.PNG"
import useLocalStorage from 'use-local-storage'


function Home () {
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
     
        <div className='home-container'>
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
              </a>
           */}

           
            </div>
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
          <div className='left-right-wrapper'>
          {/* Left side */}
          <div className='left-side'>
          <div className='top'>
              <BiMenu onClick={HamburgerContent} className='hamburger' color='white' size={50}  />

            </div>

            <div className='bottom'>
           
            <div className='left-side-wrapper'>
            <h3 className='left-side-header'>
                Email
              </h3>
              <p className='left-side-p'>
                reesekunz21@gmail.com
                </p>
                </div>
                <div className='left-side-wrapper'>
            <h3 className='left-side-header'>
                Based In
              </h3>
              <p className='left-side-p'>
                Portland, OR
                </p>
                </div>
                <div className='left-side-wrapper'>
            <div className='find-me'>
              <h3 className='left-side-header'>
                Find Me On
              </h3>
              </div>
              <a className='left-side-p' href="https://github.com/reesekunz" target="_blank">
                              <AiOutlineGithub className='icon' color='white' size={30} />
              </a>
              <a className='left-side-p' href="https://twitter.com/ReeseKunz" target="_blank">

              <AiOutlineTwitter className='icon' color='white' size={30} />
              </a>
              <a className='left-side-p' href="https://www.linkedin.com/in/reesekunz/" target="_blank">

              <AiOutlineLinkedin className='icon' color='white' size={30} />
              </a>
              <a className='left-side-p' href="https://medium.com/@reesek" target="_blank">

              <AiOutlineMedium className='icon' color='white' size={30} />
              </a>

              </div>
            </div>
          </div>
                              {/* Middle */}
          <div className='middle'>
            <div className='middle-img-wrapper'>
              <img className='middle-img' src={ReeseImg2} />
            </div>
          </div>
                    {/* Right side */}

          <div className='right-side'>
          {/* <div className='top'>
              <BiMenu onClick={HamburgerContent} className='hamburger' color='black' size={50}  />

            </div> */}
            <div className='right-side-wrapper'>
            <h1 className='first-name'>REESE</h1>
            <h1 className='last-name'>KUNZ</h1>
            <h3 className='role'>Full-Stack Developer • Technical Writer</h3>
            {/* <p className='description'>

            </p> */}
            <div className='btn-wrapper'>

            <Link className='portfolio-btn' to="/portfolio">

              <btn>PORTFOLIO</btn>
              </Link>

              <Link className='resume-btn' to="/Reese_Resume.pdf" target="_blank" download>

              <btn >
                RESUME
                </btn>
                </Link>

            </div>
            </div>
          </div>
          </div>
</div>
    )
    }
    export default Home;