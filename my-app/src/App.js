import React from "react";
import { Helmet } from "react-helmet";
import {Route} from "react-router-dom";
import "./App.scss";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import HireMePlz from "./components/HireMePlz/HireMePlz";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Blog/Blog";
import Favicon16 from "./images/favicon-16x16.png";
import Favicon32 from "./images/favicon-32x32.png";
import ReactIcon from "./images/ReactIcon.png";
import Gemint from "./components/Projects/Gemint"
import WellDone from "./components/Projects/WellDone"
import StoryTelling from "./components/Projects/StoryTelling"
import RandomActs from "./components/Projects/RandomActs"
import Home from "./pages/Home"
import Top from "./components/NavBar/Top"


import ReactGA from "react-ga";
const trackingId = "UA-156067052-1"; // Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  
      return (
    <div className="App">
      {/* <Top /> */}
        <Route exact path="/" component={Home} />
    <Route exact path="/gemint" component={Gemint} />
    <Route exact path="/storytelling" component={StoryTelling} />
    <Route exact path="/welldone" component={WellDone} />
    <Route exact path="/randomacts" component={RandomActs} />



      <Helmet>
        <title>Reese's Portfolio</title>
        <meta name="description" content="Showcasing projects I've built." />
        <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
        <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
      </Helmet>
    </div>
  );
}

export default App;
