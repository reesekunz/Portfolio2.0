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
              <BiMenu onClick={HamburgerContent} className='hamburger' color='navy' size={50}  />

            </div>
             <div className='hamburger-content'>
            <div className='close-btn-wrapper'>
            <AiOutlineClose onClick={HamburgerContent} className='close-btn' color='navy' size={40}  />
            </div>
            <div className='hamburger-links'>
            <a href="/" className='hamburger-link'>
              <AiOutlineHome size={25} color='navy' />
              <p className='link-p'>
              Home 
              </p>
              </a>
            <a href="/about" className='hamburger-link'>
              <MdPersonOutline size={25} color='navy' />
              <p className='link-p'>
              About Me
              </p>
              </a>
            <a href="/portfolio" className='hamburger-link'>
              <MdCode  size={25} color='navy' />
              <p className='link-p'>
              Portfolio 
              </p>
              </a>
            <a href="/writing" className='hamburger-link'>
              <BsPencil size={25} color='navy' />
              <p className='link-p'>
              Technical Writing 
              </p>
              </a>

          

              </div>

            </div>
            <div className='project-img-wrapper'>
                <img className='project-img' id='gemint-logo' src={GemintLogo} />
            </div>
                {/* Intro Pt 1. */}
                <div className='intro-1-wrapper'>
            <p className='intro-1-p'>      Gemint, a sports card media platform, offers card-breaking resources such as randomizing tools, checklists, and news.
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
            <p className='project-p'>Gemint began its journey as a dynamic social media company, primarily focusing on delivering timely sports card news and captivating highlights to its users. However, recognizing the evolving needs of the sports card industry, we expanded our offerings and developed a comprehensive online platform tailored specifically for sports card breakers. </p>
            <p className='project-p'>Our platform now encompasses a range of innovative tools and customizable features designed to enhance the efficiency and productivity of sports card breaking businesses. By providing breakers with advanced randomizing tools and comprehensive checklists, we empower them to streamline their operations and maximize their success in this competitive industry. </p>

            </div>
             {/* Role */}
             <div className='project-section'>
            <h3 className='project-header'>Role</h3>
            <h4 className='role-header'>Full-Stack Developer</h4>
            <ul className='role-ul'>
                <li className='role-li'>Led React-based web app UI/UX development, integrating REST API state management to enhance user experience</li>
                <li className='role-li'> Enhanced the value proposition for 100+ premium users by delivering custom features such as Randomizers and Checklists</li>
                <li className='role-li'> Managed git workflow for contractors, ensuring code quality, minimizing conflicts, and setting development priorities/timelines</li>
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