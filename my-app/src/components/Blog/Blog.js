import React from "react";
import "./Blog.scss";
import { IoIosRocket, IoLogoJavascript } from "react-icons/io";
import {
  FaReact,
  FaRecycle,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaSass
} from "react-icons/fa";
import { RiGatsbyFill, RiTestTubeFill, RiCodeSSlashLine } from "react-icons/ri";
import { GiMeatHook, GiCycle } from "react-icons/gi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiDjango } from "react-icons/si";

// import { GrGatsbyjs } from "react-icons/gr";
// import { GrGatsbyjs } from "grommet-icons";

import { Link } from "react-router-dom";
function Blog() {
  return (
    <div className="blog-container" id="skills">
      <div className="section-header">
        <span>Skills</span>
      </div>
      <div className="blog-content">
        <div className="column">
          <p className="tech">
            <AiOutlineConsoleSql size={25} color="black" />
            <h3 className="tech-name">SQL</h3>
          </p>
          <p className="tech">
            <RiTestTubeFill size={25} color="black" />
            <h3 className="tech-name">Jest</h3>
          </p>

          <p className="tech">
            <FaReact size={25} color="black" />{" "}
            <h3 className="tech-name">React</h3>
          </p>
          <p className="tech">
            <FaRecycle size={25} color="black" />{" "}
            <h3 className="tech-name">Redux</h3>
          </p>
          <p className="tech">
            <RiCodeSSlashLine size={25} color="black" />
            <h3 className="tech-name">AJAX</h3>
          </p>
          <p className="tech">
            <FaPython size={25} color="black" />{" "}
            <h3 className="tech-name">Python</h3>
          </p>

          <p className="tech">
            <SiDjango size={25} color="black" />{" "}
            <h3 className="tech-name">Django</h3>
          </p>
        </div>
        <div className="column">
          <p className="tech">
            <RiGatsbyFill size={25} color="black" />{" "}
            <h3 className="tech-name">Gatsby</h3>
          </p>
          <p className="tech">
            <GiCycle size={25} color="black" />{" "}
            <h3 className="tech-name">REST API</h3>
          </p>
          <p className="tech">
            <IoLogoJavascript size={25} color="black" />
            <h3 className="tech-name">JavaScript</h3>
          </p>
          <p className="tech">
            <FaHtml5 size={25} color="black" />
            <h3 className="tech-name">HTML/CSS</h3>
          </p>
          <p className="tech">
            <GiMeatHook size={25} color="black" />
            <h3 className="tech-name">React Hooks</h3>
          </p>
          <p className="tech">
            <FaNodeJs size={25} color="black" />
            <h3 className="tech-name">Node/Express</h3>
          </p>
          <p className="tech">
            <FaSass size={25} color="black" />{" "}
            <h3 className="tech-name">CSS Preprocessors</h3>
          </p>
        </div>
      </div>
      <div className="resume-wrapper">
        <p className="download-resume">
          <Link to="/Reese_Resume.pdf" target="_blank" download>
            Download Resume <IoIosRocket size={32} className="icon" />
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Blog;
