import React from "react";
import "./Portfolio.scss";
// import projectInfo from "./ProjectInfo";
import AdviceGiver from "../../images/AdviceGiver.png";
import RandomActs from "../../images/RandomActs2.png";
import CoordinatedStories from "../../images/CoordinatedStories.png";
import WellDone from "../../images/WellDoneScreenshot.png";
// import { IoIosInformationCircleOutline } from "react-icons/io";
function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="section-header">
        <span className="portfolio-header">Portfolio</span>
      </div>
      <div className="project-container">
        {/* {projectInfo.map(project => (
          <div>
            <div>{project.name} </div>
            <div>{project.techStack} </div>
            <div>{project.description} </div>
          </div>
        ))} */}
        {/* Advice Giver  */}
        <div className="row" id="portfolio">
          <div className="project">
            <img src={AdviceGiver} alt="Advice Giver project screenshot" />
            <h3 className="project-name">Advice Giver</h3>
            <p className="tech-stack">HTML, CSS, JavaScript</p>
            <p className="project-description">
              A marketing landing page for Advice Giver, a platform connecting
              people seeking advice with those willing to provide it.
            </p>
            <div className="linkz">
              <a href="https://github.com/advice-giver/Web-UI/pull/1/commits">
                Code
              </a>
              <a href="https://infallible-lumiere-c93889.netlify.com/">
                Project
              </a>
            </div>
          </div>
          <div className="project">
            <img
              src={RandomActs}
              alt="Random Acts Generator project screenshot"
            />

            <h3 className="project-name">Random Acts Generator</h3>
            <p className="tech-stack">JavaScript, React</p>
            <p className="project-description">
              Worked with a front-end team of four. Random acts of kindness are
              generated for the user to perform based on their added contacts.
            </p>

            <div className="linkz">
              <a href="https://github.com/buildweek-random-acts-generator/front-end">
                Code
              </a>
              <a href="https://lucid-panini-415838.netlify.com/">Project</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="project" id="row2">
            <img
              src={CoordinatedStories}
              alt="Coordinated Stories project screenshot"
            />

            <h3 className="project-name">Coordinated Story Telling</h3>
            <p className="tech-stack">Node, Express</p>
            <p className="project-description">
              Our team's goal was to create a central location for gathering
              success stories for the Bountiful Children's Foundation, showing
              the positive impact donations have on the lives of children.
            </p>

            <div className="linkz">
              <a href="https://github.com/Coordinated-Story-Telling/Back-End">
                Code
              </a>
              <a href="https://bountifulchildren.org/">Company</a>
            </div>
          </div>
          <div className="project" id="row2">
            <img src={WellDone} alt="WellDone project screenshot" />
            <h3 className="project-name">WellDone</h3>
            <p className="tech-stack">JavaScript, React, Node, Express</p>
            <p className="project-description">
              WellDone is a non-profit that provides clean and sustainable water
              to areas in need. Built a BE to store well sensor data and a FE to
              visualize which pumps are functioning or need maintenance.
            </p>

            <div className="linkz">
              <a href="https://github.com/labs17-WellDone">Code</a>
              {/* <a href="#">Project</a> */}
              <a href="https://welldone.org/">Company</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
