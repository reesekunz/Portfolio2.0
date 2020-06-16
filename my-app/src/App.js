import React from "react";
import { Helmet } from "react-helmet";
import "./App.scss";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import HireMePlz from "./components/HireMePlz/HireMePlz";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Blog from "./components/Blog/Blog";
import Favicon16 from "./images/favicon-16x16.png";
import Favicon32 from "./images/favicon-32x32.png";
import ReactGA from "react-ga";
import ReactIcon from "./images/ReactIcon.png";

const trackingId = "UA-156067052-1"; // Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Reese's Portfolio</title>
        <meta name="description" content="Showcasing projects I've built." />
        <link rel="icon" type="image/png" sizes="32x32" href={Favicon16} />
        <link rel="icon" type="image/png" sizes="16x16" href={Favicon32} />
      </Helmet>
      <Intro />
      <Footer />
      <div className="main-content-container">
        <NavBar />
        <AboutMe />
        <Portfolio />
        <Blog />
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
  );
}

export default App;
