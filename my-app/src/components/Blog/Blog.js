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
    <div className="blog-container" id="blog">
      <div className="section-header">
        <span>Skills</span>
      </div>
      <div className="blog-content">
        <div className="column" id="1">
          <p>
            I have over a year of experience working primarily with these
            technologies to provide creative, user-friendly, and accessible
            single-page applications. Always down to learn new technologies,
            too!
          </p>
          <div className="resume-wrapper">
            <Link to="/Reese_Resume.pdf" target="_blank" download>
              Resume <IoIosRocket size={32} className="icon" />
            </Link>
          </div>
        </div>
        <div className="column" id="2">
          <p className="tech">
            <FaReact size={25} color="black" />{" "}
            <h3 className="tech-name">React</h3>
          </p>
          <p className="tech">
            <FaRecycle size={25} color="black" />{" "}
            <h3 className="tech-name">Redux</h3>
          </p>
          <p className="tech">
            <RiGatsbyFill size={25} color="black" />{" "}
            <h3 className="tech-name">Gatsby</h3>
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
        </div>
        <div className="column" id="3">
          <p className="tech">
            <AiOutlineConsoleSql size={25} color="black" />
            <h3 className="tech-name">SQL</h3>
          </p>
          <p className="tech">
            <RiTestTubeFill size={25} color="black" />
            <h3 className="tech-name">Jest</h3>
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
          <p className="tech">
            <GiCycle size={25} color="black" />{" "}
            <h3 className="tech-name">REST API</h3>
          </p>
          <p className="tech">
            <FaSass size={25} color="black" />{" "}
            <h3 className="tech-name">CSS Preprocessors</h3>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
