import React from "react";
import "./Portfolio.scss";
// import projectInfo from "./ProjectInfo";
import AdviceGiver from "../../images/AdviceGiver.png";
import RandomActs from "../../images/RandomActs2.png";
import CoordinatedStories from "../../images/CoordinatedStories.png";
function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="section-header">
        <span>Portfolio</span>
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
        <div className="row">
          <div className="project">
            <img src={AdviceGiver} alt="Advice Giver project screenshot" />
            <h3 className="project-name">Advice Giver</h3>
            <p className="tech-stack">HTML, CSS, JavaScript</p>
            <div className="linkz">
              <a href="#">Code</a>
              <a href="#">Project</a>
            </div>
          </div>
          <div className="project">
            <img
              src={RandomActs}
              alt="Random Acts Generator project screenshot"
            />

            <h3 className="project-name">Random Acts Generator</h3>
            <p className="tech-stack">JavaScript, React</p>
            <div className="linkz">
              <a href="#">Code</a>
              <a href="#">Project</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="project">
            <img
              src={CoordinatedStories}
              alt="Coordinated Stories project screenshot"
            />

            <h3 className="project-name">Coordinated Story Telling</h3>
            <p className="tech-stack">Node, Express</p>
            <div className="linkz">
              <a href="#">Code</a>
              <a href="#">Project</a>
            </div>
          </div>
          <div className="project">
            <img
              src={CoordinatedStories}
              alt="Coordinated Stories project screenshot"
            />
            <h3 className="project-name">WellDone</h3>
            <p className="tech-stack">JavaScript, React, Node, Express</p>
            <div className="linkz">
              <a href="#">Code</a>
              <a href="#">Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
