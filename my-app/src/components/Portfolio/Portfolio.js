import React, {useEffect } from "react";
import "./Portfolio.scss";
import RandomActs from "../../images/RandomActs2.png";
import CoordinatedStories from "../../images/CoordinatedStories.png";
import WellDone from "../../images/WellDoneScreenshot.png";
import Gemint2 from "../../images/Gemint2.png"
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";



// import { IoIosInformationCircleOutline, IoLogoGithub } from "react-icons/io";

function Portfolio() {

  return (
    <div className="portfolio-container" id="portfolio">
      <div className="section-header">
        <span className="portfolio-header">Portfolio</span>
      </div>
      <div className="project-container">
        <div className="row">
        <div className="project">
          
              <img src={Gemint2} alt="Gemint project screenshot" />
            
              {/* <a
                className="project-btn-link"
                target="_blank"
                href="https://github.com/gemint/gemint-waitlist"
              >
                <IoLogoGithub size={32} className="icon" />
                
              </a> */}
              <Link  to="/gemint">
              <h3 className="project-name">
                
                Gemint
                {/* <a
                  href="https://gemint.com/"
                  alt="project-link"
                  target="_blank"
                  className="project-link"
                >
                  Gemint
                </a> */}
              </h3>
              </Link>
            <p className="project-description">
            Gemint is a platform to connect sports card breakers and buyers with card breaking tools.
            </p>{" "}
            <Link className='read-more-link' to="/gemint">Read more  </Link>

            {/* <div className="tech-stack">
              <p className="tech-used">React JS</p>
              <p className="tech-used">Express JS</p>
              <p className="tech-used">Sass</p>
            </div> */}
          </div>
          <div className="project" id="row2">
         
              <img src={WellDone} alt="WellDone project screenshot" />
            <div className="linkz">
              {/* <a
                href="https://github.com/labs17-WellDone"
                className="project-btn-link"
                target="_blank"
              >
                {" "}
                <IoLogoGithub size={32} className="icon" />
              </a> */}
                            <Link  to="/welldone">

              <h3 className="project-name">
              WellDone

                {/* <a
                  href="https://welldone-water.now.sh/"
                  alt="project-link"
                  target="_blank"
                  className="project-link"
                >
                  WellDone
                </a> */}
              </h3>{" "}
              </Link>

              <div className="project-btn-link"></div>
              {/* <a className="project-btn-link" target="_blank" href="#">
                <IoIosInformationCircleOutline size={32} />
              </a> */}
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
            {/* <div className="tech-stack">
              {" "}
              <p className="tech-used">React JS</p>
              <p className="tech-used">Node JS</p>
              <p className="tech-used">Express JS</p>
            </div> */}
            <Link className='read-more-link' to="/welldone">Read more</Link>
          </div>

         
        </div>
        <div className="row">
          <div className="project" id="row2">
            <img
              src={CoordinatedStories}
              alt="Coordinated Stories project screenshot"
            />
              {/* <a
                href="https://github.com/Coordinated-Story-Telling/Back-End"
                className="project-btn-link"
                target="_blank"
              >
                <IoLogoGithub size={32} className="icon" />
              </a> */}
                                          <Link  to="/storytelling">

              <h3 className="project-name">
              Coordinated Story Telling

                {/* <a
                  href="https://coordinated-stories.herokuapp.com/api/stories"
                  alt="project-link"
                  target="_blank"
                  className="project-link"
                >
                  Coordinated Story Telling
                </a> */}
              </h3>
              </Link>
              {/* <a className="project-btn-link" target="_blank" href="#">
                <IoIosInformationCircleOutline size={32} />
              </a> */}

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
            {/* <div className="tech-stack">
              {" "}
              <p className="tech-used">Node JS</p>
              <p className="tech-used">Express JS</p>
            </div> */}
            <Link className='read-more-link' to="/storytelling">Read more </Link>
          </div>
          {/* Project here  */}
          {/* <div className="project">
         
              <img
                src={RandomActs}
                alt="Random Acts Generator project screenshot"
              />
         
                                                        <Link  to="/randomacts">

              <h3 className="project-name">
              Random Acts Generator

           
              </h3>
              </Link>
            

            <p className="project-description">
              Random acts of kindness are generated for the user to perform
              based on their added contacts.
            </p>

            <Link className='read-more-link' to="/randomacts">Read more <BsArrowRightShort size={25}/></Link>
         
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
