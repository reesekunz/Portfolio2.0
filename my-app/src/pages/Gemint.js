import React, { useState } from 'react'
import "./projects.scss"
import GemintLogo from "../images/roundlogo.png"
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineMessage, AiOutlineFire, AiOutlineCodeSandbox, AiOutlineHome, AiOutlineInfoCircle, AiOutlineClose, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMedium } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { MdPersonOutline, MdCode } from "react-icons/md";
import { BsPencil } from "react-icons/bs";



function Gemint () {
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
            <div className='project-img-wrapper'>
                <img className='project-img' id='gemint-logo' src={GemintLogo} />
            </div>
                {/* Intro Pt 1. */}
                <div className='intro-1-wrapper'>
            <p className='intro-1-p'>            Gemint is a sports card media platform that provides card breaking tools, checklists, and news.
</p>
            <div className='intro-1-links'>
            <a className='intro-1-link' target="_blank" href="https://www.gemint.com/">View live</a>
            <a className='intro-1-link' target="_blank"
                href="https://github.com/gemint/gemint-waitlist">Github</a>
                </div>

            </div>
            {/* Intro/Description */}
            <div className='project-section'>
            <h3 className='project-header'>Intro</h3>
            <p className='project-p'>Gemint has been gradually growing for over 2 years now. We originally started as a social media company that targeted relevant sports card news and highlights. Then we developed an online platform geared towards sports card breakers, providing them with various customizable randomizers and checklists to help their efficiency. </p>
            <p className='project-p'> </p>

            </div>
             {/* Role */}
             <div className='project-section'>
            <h3 className='project-header'>Role</h3>
            <h4 className='role-header'>Full-Stack Developer</h4>
            <p className='project-p'>A fun and challenging part of working at a startup is the variety of roles you work in. Here's what I've worked on so far:</p>
            <ul className='role-ul'>
                <li className='role-li'>Communicated with multiple stakeholders, including product owners and UX designers, to establish development priorities and delivery timelines</li>
                <li className='role-li'>Implemented UI/UX for React-based web application with REST API state management</li>
                <li className='role-li'>Built custom features such as the Randomizers and Checklists to provide more value to subscribed users</li>
                {/* <li className='role-li'>Oversaw technical process with short-term contractors, managing Git workflow and assisting where necessary </li> */}
                {/* <li className='role-li'>Pitched tech to investors? </li> */}
                {/* <li className='role-li'>Managed twitter account? </li> */}


            </ul>
            </div>
             {/* Tech */}
             <div className='project-section'>
            <h3 className='project-header'>Tech Stack</h3>
            <div className='project-p' id='tech-stack'>
            <p className='tech-p'>ReactJS </p>
            <p className='tech-p'>Firebase </p>
            <p className='tech-p'>ExpressJS </p>
            <p className='tech-p'>Stripe </p>
            <p className='tech-p'>Netlify </p>


                </div>

            </div>
              {/* Stats */}
              <div className='project-section'>
            <h3 className='project-header'>Stats</h3>
            <ul className='role-ul'>
                <li className='role-li'>442 registered free users since launching product in September, 2021</li>
                <li className='role-li'>90 paid monthly subscribers for Premium Randomizer since premium offering in October, 2021.</li>
                <li className='role-li'>Last 30 days: 839 users, 2.3K sessions, 72% bounce rate, 3m 30s session duration</li>
                <li className='role-li'>15.7K followers on Instagram</li>

                {/* <li className='role-li'>Built custom features such as the Randomizers to provide more value on the platform</li>
                <li className='role-li'>Oversaw technical process with short-term contractors, managing Git workflow and assisting where necessary </li> */}

            </ul>
            <p className='project-p'>* Last updated April 6, 2022</p>
            
            </div>
                {/* Testimonial */}
                <div className='project-section' id='last'>
            <h3 className='project-header'>Testimonial</h3>
            <p className='project-p'>"I have had the pleasure of co-founding Gemint and collaborating with Reese over the past year. In that time, he has proven to be a reliable and skilled dev who consistently illustrates critical thinking with an emphasis on how his technical work can benefit our customers.</p> 
            <p className='project-p'>Reese always puts forth a thoughtful and imaginative effort, which I am blessed to have part of our team. He is fearless when it comes to entering into grey areas or moving forward with uncertainty and I think that is due to his curiosity to learn and willingness to figure things out even when circumstances aren’t perfect. </p> 
            <p className='project-p'>Together we have created a paid subscription product, website and Social Media for the Sports Card Hobby that delivers unique value for collectors around the world. I am very proud of what we have built together — everything we have accomplished with our product/tech is thanks to Reese’s ambition and talents."
 </p> 



<p className='project-p'>- Jason Barrera, CEO of Gemint</p>
            </div>
        </div>
    )
}

export default Gemint;