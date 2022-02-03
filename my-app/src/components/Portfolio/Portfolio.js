import React, {useEffect } from "react";
import "./Portfolio.scss";
import RandomActs from "../../images/RandomActs2.png";
import CoordinatedStories from "../../images/CoordinatedStories.png";
import WellDone from "../../images/WellDoneScreenshot.png";
import Gemint2 from "../../images/Gemint2.png"
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import Coffee from "../../images/coffee.jpeg";
import Muffin from "../../images/muffin.jpeg";
import UniversalDesign from "../../images/universal_design.jpeg";




// import { IoIosInformationCircleOutline, IoLogoGithub } from "react-icons/io";

function Portfolio() {

  return (
    <div className="portfolio-container" id="portfolio">
      <div className="section-header">
        <span className="portfolio-header">Portfolio</span>
      </div>

    <div className='portfolio-wrapper'>
      <h2 className='secondary-header'>
      Web Development Projects
      </h2>
      {/* Gemint */}
      <div className='project'>
      
<div className='left-side'>
<h3 className='project-number'>
Work 01
</h3>
              <h1 className="project-name">
                
                Gemint
              
              </h1>

            <p className='project-description'>Gemint is a platform to connect sports card breakers and buyers with card breaking tools.
</p>
<button className='details-btn'>
<Link className='details-link' to="/gemint">Project details</Link>
</button>
</div>
{/* <div className='middle'></div> */}
<div className='right-side'>
<div id='project-img-wrapper'>
<img id='project-img' src={Gemint2} />

</div>
</div>
      </div>
      {/* WellDone  */}
      <div className='project'>
      
      <div className='left-side'>
      <h3 className='project-number'>
      Work 02
      </h3>
                    <h1 className="project-name">
                      
                      WellDone
                    
                    </h1>
      
                  <p className='project-description'> Built a backend to persist well sensor data and a frontend to
              visualize which pumps need maintenance for{" "}
              <a
                href="https://welldone.org/"
                target="_blank"
                className="company-link"
              >
                WellDone
              </a>.
      </p>
      <button className='details-btn'>
      <Link className='details-link' to="/welldone">Project details</Link>
      </button>
      </div>
      {/* <div className='middle'></div> */}
      <div className='right-side'>
      <div id='project-img-wrapper'>
      <img id='project-img' src={WellDone} />
      
      </div>
      </div>
            </div>
      
      {/* Coordinated Story Telling  */}
      <div className='project'>
      
      <div className='left-side'>
      <h3 className='project-number'>
      Work 03
      </h3>
                    <h1 className="project-name">
                      
                    Coordinated Story Telling 
                    
                    </h1>
      
                  <p className='project-description'> Created a central location for gathering success stories for the{" "}
              {""}
              <a
                className="company-link"
                href="https://bountifulchildren.org/"
                target="_blank"
              >
                Bountiful Children's Foundation
              </a>
              .
      </p>
      <button className='details-btn'>
      <Link className='details-link' to="/storytelling">Project details</Link>
      </button>
      </div>
      {/* <div className='middle'></div> */}
      <div className='right-side'>
      <div id='project-img-wrapper'>
      <img id='project-img' src={CoordinatedStories} />
      
      </div>
      </div>
            </div>
      <h2 className='secondary-header'>
      Technical Writing Samples
      </h2>      
      <div className='project'>
      
      <div className='left-side'>
      <h3 className='project-number'>
      Work 01
      </h3>
                    <h1 className="project-name">
                      
                    Keurig Owner’s Manual
                    
                    </h1>
      
                  <p className='project-description'>Sample owner’s manual for the K-Classic Coffee Maker.
      </p>
      <button className='details-btn'>
      <Link className='details-link' to="/Keurig_Owners_Manual.pdf" target="_blank" download>
              Download PDF
            </Link>      </button>
      </div>
      {/* <div className='middle'></div> */}
      <div className='right-side'>
      <div id='project-img-wrapper'>
      <img id='project-img' src={Coffee} />
      <p className='img-caption'>
      Photo by Kaboompics on Pexels.com
      </p>
      </div>
      </div>
            </div>
            <div className='project'>
      
      <div className='left-side'>
      <h3 className='project-number'>
      Work 02
      </h3>
                    <h1 className="project-name">
                      
                    Recipe Process and Procedure Flow
                    
                    </h1>
      
                  <p className='project-description'>A detailed process and procedure flow for a delicious blueberry muffin recipe.
      </p>
      <button className='details-btn'>
      <Link className='details-link' to="/Recipe_Process_Flow.pdf" target="_blank" download>
              Download PDF
            </Link>      </button>
      </div>
      {/* <div className='middle'></div> */}
      <div className='right-side'>
      <div id='project-img-wrapper'>
      <img id='project-img' src={Muffin} />
      <p className='img-caption'>
      Photo by Ela Haney on Pexels.com
      </p>
      </div>
      </div>
            </div>
            <div className='project'>
      
      <div className='left-side'>
      <h3 className='project-number'>
      Work 03
      </h3>
                    <h1 className="project-name">
                      
                    Universal Design Principles Presentation
                    
                    </h1>
      
                  <p className='project-description'>A PowerPoint presentation highlighting key aspects of universal design principles.
      </p>
      <button className='details-btn'>
      <Link className='details-link' to="/UX_Design.pdf" target="_blank" download>
              Download PDF
            </Link>      </button>
      </div>
      {/* <div className='middle'></div> */}
      <div className='right-side'>
      <div id='project-img-wrapper'>
      <img id='project-img' src={UniversalDesign} />
      <p className='img-caption'>
      Photo by Kaboompics on Pexels.com
      </p>
      </div>
      </div>
            </div>
      </div>
      {/* <div className="project-container">
        <div className="row">
        <div className="project">
          
              <img src={Gemint2} alt="Gemint project screenshot" />
            
           
              <Link  to="/gemint">
              <h3 className="project-name">
                
                Gemint
              
              </h3>
              </Link>
            <p className="project-description">
            Gemint is a platform to connect sports card breakers and buyers with card breaking tools.
            </p>{" "}
            <Link className='read-more-link' to="/gemint">👉 {""} Project details</Link>

          
          </div>
          <div className="project" id="row2">
         
              <img src={WellDone} alt="WellDone project screenshot" />
            <div className="linkz">
          
                            <Link  to="/welldone">

              <h3 className="project-name">
              WellDone

             
              </h3>{" "}
              </Link>

              <div className="project-btn-link"></div>
           
            </div>

            <p className="project-description">
              Built a backend to persist well sensor data and a frontend to
              visualize which pumps need maintenance for{" "}
              <a
                href="https://welldone.org/"
                target="_blank"
                className="company-link"
              >
                WellDone
              </a>.
              
            </p>
        
            <Link className='read-more-link' to="/welldone">Project details</Link>
          </div>

         
        </div>
        <div className="row">
          <div className="project" id="row2">
            <img
              src={CoordinatedStories}
              alt="Coordinated Stories project screenshot"
            />
      
                                          <Link  to="/storytelling">

              <h3 className="project-name">
              Coordinated Story Telling

            
              </h3>
              </Link>
           

            <p className="project-description">
              Created a central location for gathering success stories for the{" "}
              {""}
              <a
                className="company-link"
                href="https://bountifulchildren.org/"
                target="_blank"
              >
                Bountiful Children's Foundation
              </a>
              .
            </p>
       
            <Link className='read-more-link' to="/storytelling">Project details </Link>
          </div>
        
        </div>
      </div> */}
    </div>
  );
}
export default Portfolio;
