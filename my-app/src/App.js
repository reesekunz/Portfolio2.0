import React from "react";
import { Helmet } from "react-helmet";
import {Route} from "react-router-dom";
import "./App.scss";
import Favicon16 from "./images/favicon-16x16.png";
import Favicon32 from "./images/favicon-32x32.png";
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import TechWriting from "./pages/TechWriting"
import Blog from "./pages/Blog"
import Gemint from "./pages/Gemint"
import WellDone from "./pages/WellDone"
import StoryTelling from "./pages/StoryTelling"
import DarkMode from "./components/DarkMode"

import ReactGA from "react-ga";
const trackingId = "UA-156067052-1"; // Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  
      return (
    <div className="App">
         <div className='top2'>

      <DarkMode />
</div>
      {/* <Top /> */}
        {/* <Route exact path="/" component={Home} />
    <Route exact path="/gemint" component={Gemint} />
    <Route exact path="/storytelling" component={StoryTelling} />
    <Route exact path="/welldone" component={WellDone} />
    <Route exact path="/randomacts" component={RandomActs} /> */}

<Route exact path="/" component={Home} />
<Route exact path="/about" component={AboutMe} />
<Route exact path="/portfolio" component={Portfolio} />
<Route exact path="/portfolio/gemint" component={Gemint} />
<Route exact path="/portfolio/welldone" component={WellDone} />
<Route exact path="/portfolio/storytelling" component={StoryTelling} />

<Route exact path="/writing" component={TechWriting} />
<Route exact path="/blog" component={Blog} />


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
