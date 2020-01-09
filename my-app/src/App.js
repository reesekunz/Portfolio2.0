import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      {/* INTRO  */}
      <Intro />
      {/* MAIN CONTENT  */}
      <div className="main-content-container">
        <AboutMe />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default App;
