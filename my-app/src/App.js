import React from "react";
import "./App.scss";
// import "./Typography.scss";
// import { Route } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
// import Blog from "./components/Blog/Blog";
import HireMePlz from "./components/HireMePlz/HireMePlz";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Intro />
      <div className="main-content-container">
        <AboutMe />
        <Portfolio />
        {/* <Blog /> */}
        <HireMePlz />
      </div>
      <Footer />
    </div>
  );
}

export default App;
