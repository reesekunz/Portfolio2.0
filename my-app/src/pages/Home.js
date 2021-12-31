import React from "react"
import Intro from "../components/Intro/Intro";
import AboutMe from "../components/AboutMe/AboutMe";
import Portfolio from "../components/Portfolio/Portfolio";
import HireMePlz from "../components/HireMePlz/HireMePlz";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Skills from "../components/Blog/Blog";
import ReactIcon from "../images/ReactIcon.png";
import "../App.scss";


function Home () {
    return (
     
        <div>
<Intro />
<Footer />
<div className="main-content-container">
  <NavBar />
  <AboutMe />
  <Portfolio />
  <Skills />
  <HireMePlz />
</div>
<div className="built-by-container">
  <div className="built-with-wrapper">
    <p className="built-with">
      Built with:
      <a href="https://reactjs.org/" target="_blank">
        <img className="react-icon" src={ReactIcon} alt="react-icon" />{" "}
      </a>
    </p>
  </div>
  <div className="design-wrapper">
    Design inspired by: &nbsp;
    <a
      className="design-credit"
      href="https://aj.lkn.io/"
      target="_blank"
    >
      AJ - Maker of Stuff.
    </a>{" "}
  </div>
</div>
</div>
    )
    }
    export default Home;