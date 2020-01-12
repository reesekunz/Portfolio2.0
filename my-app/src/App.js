import React from "react";
import { Helmet } from "react-helmet";
import "./App.scss";
// import "./Typography.scss";
// import { Route } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
// import Blog from "./components/Blog/Blog";
import HireMePlz from "./components/HireMePlz/HireMePlz";
import Footer from "./components/Footer/Footer";
import Favicon16 from "./images/favicon-16x16.png";
import Favicon32 from "./images/favicon-32x32.png";
import ReactGA from "react-ga";
import auth from "./auth.ts"; // Sample authentication provider
import { createBrowserHistory } from "history";

// const trackingId = "UA-156067052-1"; // Google Analytics tracking ID
// ReactGA.initialize(trackingId);
// ReactGA.set({
//   userId: auth.currentUserId()
// any data that is relevant to the user session
// that you would like to track with google analytics
// });

// const history = createBrowserHistory();
// Initialize google analytics page view tracking
// history.listen(location => {
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

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
