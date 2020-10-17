import React from "react";
import "./Portfolio.scss";
import RandomActs from "../../images/RandomActs2.png";
import CoordinatedStories from "../../images/CoordinatedStories.png";
import WellDone from "../../images/WellDoneScreenshot.png";
import MRK from "../../images/MRK.png";

import { IoIosInformationCircleOutline, IoLogoGithub } from "react-icons/io";

function Portfolio() {
  return (
    <div className="portfolio-container" id="portfolio">
      <div className="section-header">
        <span className="portfolio-header">Portfolio</span>
      </div>
      <div className="project-container">
        <div className="row">
          <div className="project">
            <a
              href="https://mrkunzspvms.com/"
              alt="project-link"
              target="_blank"
              className="project-link"
            >
              <img src={MRK} alt="Mr Kunz' Classroom project screenshot" />
            </a>
            <div className="linkz">
              <a
                className="project-btn-link"
                target="_blank"
                href="https://github.com/reesekunz/MrK/tree/master/mrk"
              >
                <IoLogoGithub size={32} className="icon" />
              </a>
              <h3 className="project-name">
                <a
                  href="https://mrkunzspvms.com/"
                  alt="project-link"
                  target="_blank"
                  className="project-link"
                >
                  Mr. Kunz' Classroom
                </a>
              </h3>
              <div className="project-btn-link"></div>
              {/* <a className="project-btn-link" target="_blank" href="#">
                <IoIosInformationCircleOutline size={32} />
              </a> */}
            </div>
            <p className="project-description">
              Had a lot of fun building this unique (and some might say too
              colorful) site for my dad, a 7th grade teacher transitioning to
              online teaching.
            </p>{" "}
            <div className="tech-stack">
              <p className="tech-used">React JS</p>
              <p className="tech-used">SASS</p>
            </div>
          </div>

          <div className="project">
            <a
              href="https://lucid-panini-415838.netlify.com/"
              alt="project-link"
              target="_blank"
              className="project-link"
            >
              <img
                src={RandomActs}
                alt="Random Acts Generator project screenshot"
              />
            </a>
            <div className="linkz">
              <a
                href="https://github.com/buildweek-random-acts-generator/front-end"
                className="project-btn-link"
                target="_blank"
              >
                <IoLogoGithub size={32} className="icon" />
              </a>
              <h3 className="project-name">
                <a
                  href="https://lucid-panini-415838.netlify.com/"
                  alt="project-link"
                  target="_blank"
                  className="project-link"
                >
                  Random Acts Generator
                </a>
              </h3>
              <div className="project-btn-link"></div>

              {/* <a className="project-btn-link" target="_blank" href="#">
                <IoIosInformationCircleOutline size={32} />
              </a> */}
            </div>

            <p className="project-description">
              Random acts of kindness are generated for the user to perform
              based on their added contacts.
            </p>
            <div className="tech-stack">
              {" "}
              <p className="tech-used">JavaScript</p>
              <p className="tech-used">React JS</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="project" id="row2">
            <img
              src={CoordinatedStories}
              alt="Coordinated Stories project screenshot"
            />
            <div className="linkz">
              <a
                href="https://github.com/Coordinated-Story-Telling/Back-End"
                className="project-btn-link"
                target="_blank"
              >
                <IoLogoGithub size={32} className="icon" />
              </a>
              <h3 className="project-name">
                <a
                  href="https://coordinated-stories.herokuapp.com/api/stories"
                  alt="project-link"
                  target="_blank"
                  className="project-link"
                >
                  Coordinated Story Telling
                </a>
              </h3>
              <div className="project-btn-link"></div>

              {/* <a className="project-btn-link" target="_blank" href="#">
                <IoIosInformationCircleOutline size={32} />
              </a> */}
            </div>

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
            <div className="tech-stack">
              {" "}
              <p className="tech-used">Node JS</p>
              <p className="tech-used">Express JS</p>
            </div>
          </div>
          <div className="project" id="row2">
            <a
              href="https://welldone-water.now.sh/"
              alt="project-link"
              target="_blank"
              className="project-link"
            >
              <img src={WellDone} alt="WellDone project screenshot" />
            </a>
            <div className="linkz">
              <a
                href="https://github.com/labs17-WellDone"
                className="project-btn-link"
                target="_blank"
              >
                {" "}
                <IoLogoGithub size={32} className="icon" />
              </a>
              <h3 className="project-name">
                <a
                  href="https://welldone-water.now.sh/"
                  alt="project-link"
                  target="_blank"
                  className="project-link"
                >
                  WellDone
                </a>
              </h3>{" "}
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
              </a>
              .
            </p>
            <div className="tech-stack">
              {" "}
              <p className="tech-used">React JS</p>
              <p className="tech-used">Node JS</p>
              <p className="tech-used">Express JS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
