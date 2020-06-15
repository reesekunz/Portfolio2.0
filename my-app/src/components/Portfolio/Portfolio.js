import React from "react";
import "./Portfolio.scss";
import AdviceGiver from "../../images/AdviceGiver.png";
import RandomActs from "../../images/RandomActs2.png";
import CoordinatedStories from "../../images/CoordinatedStories.png";
import WellDone from "../../images/WellDoneScreenshot.png";
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
              href="https://infallible-lumiere-c93889.netlify.com/"
              alt="project-link"
              target="_blank"
              className="project-link"
            >
              <img src={AdviceGiver} alt="Advice Giver project screenshot" />
            </a>
            <div className="linkz">
              <a
                className="project-btn-link"
                target="_blank"
                href="https://github.com/advice-giver/Web-UI/pull/1/commits"
              >
                <IoLogoGithub size={32} className="icon" />
              </a>
              <h3 className="project-name">
                <a
                  href="https://infallible-lumiere-c93889.netlify.com/"
                  alt="project-link"
                  target="_blank"
                  className="project-link"
                >
                  Advice Giver
                </a>
              </h3>
              <div className="project-btn-link"></div>
              {/* <a className="project-btn-link" target="_blank" href="#">
                <IoIosInformationCircleOutline size={32} />
              </a> */}
            </div>
            <p className="project-description">
              A responsive landing page for Advice Giver, a platform connecting
              people seeking advice with those willing to provide it.
            </p>{" "}
            <p className="tech-stack">Tech Stack: HTML, LESS, JavaScript</p>
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
            <p className="tech-stack">Tech Stack: JavaScript, React</p>
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
                {/* <a
                  href="https://github.com/Coordinated-Story-Telling/Back-End"
                  alt="project-link"
                  target="_blank"
                  className="project-link"
                > */}
                Coordinated Story Telling
                {/* </a> */}
              </h3>
              <div className="project-btn-link"></div>

              {/* <a className="project-btn-link" target="_blank" href="#">
                <IoIosInformationCircleOutline size={32} />
              </a> */}
            </div>

            <p className="project-description">
              Created a central location for gathering success stories for the{" "}
              {""}
              <a href="https://bountifulchildren.org/" target="_blank">
                Bountiful Children's Foundation
              </a>
              .
            </p>
            <p className="tech-stack">Tech Stack: Node, Express</p>
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
              <a href="https://welldone.org/" target="_blank">
                WellDone
              </a>
              .
            </p>
            <p className="tech-stack">Tech Stack: React, Node, Express</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
