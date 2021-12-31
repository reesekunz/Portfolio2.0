import React from 'react'
import "./projects.scss"
import BCFLogo from "../../images/BCFLogo.png"
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function StoryTelling () {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className='projects-container'>
            <Link to="/" className='home-link'>
            <BsArrowLeft />{""}
            Back to home
            </Link>
            <div className='project-img-wrapper'>
                <img className='project-img' src={BCFLogo} />
            </div>
                {/* Intro Pt 1. */}
                <div className='intro-1-wrapper'>
            <p className='intro-1-p'>            Created a central location for gathering success stories for the{" "}
              {""}
              <a
                className="project-a"
                href="https://bountifulchildren.org/"
                target="_blank"
              >
                Bountiful Children's Foundation
              </a>
              .
</p>
            <div className='intro-1-links'>
            {/* <a className='intro-1-link' target="_blank" href="https://welldone-water.now.sh/">View live</a> */}
            <a className='intro-1-link' target="_blank"
                href="https://github.com/Coordinated-Story-Telling/Back-End">Github</a>
                </div>

            </div>
            {/* Intro/Description */}
            <div className='project-section'>
            <h3 className='project-header'>Intro</h3>
            <p className='project-p'>The core focus of Bountiful Children's Foundation is to reduce malnutrition for infants and toddlers. One way they work to achieve this goal is through spreading and increasing awareness. They record and distribute success stories of children who are much healthier now becuase of their foundation, which in turn leads to more donations since people are seeing first-hand the results of their donations.</p>
            <p className='project-p'>This backend project was worked on during a Lambda School build week, where myself and one other student had one week to produce a fully functioning backend in order to move on to the next section of our bootcamp. It was our job to build out a backend to store these success stories so that they would be in one central location, drastically helping the Bountiful Children's Foundation with their organization and workflow process. </p>

            </div>
             {/* Role */}
             <div className='project-section'>
            <h3 className='project-header'>Role</h3>
            <h4 className='role-header'>Backend Developer </h4>
            {/* <p className='project-p'>A fun and challenging part of working at a startup is the variety of roles you work in. Here's what I've worked on so far:</p> */}
            <ul className='role-ul'>
            <li className='role-li'>Created models and routes for users, countries, and stories API endpoints with Express </li>
            <li className='role-li'>Utilized Knex migrations to create database tables and Knex seeds to populate the database </li>
            <li className='role-li'>Implemented custom middleware validation, authentication with JWT, hashing with bcrypt, and testing with Jest </li>

            </ul>
            </div>
             {/* Tech */}
             <div className='project-section' id='last'>
            <h3 className='project-header'>Tech Stack</h3>
            <div className='project-p' id='tech-stack'>
            <p className='tech-p'>NodeJS </p>
            <p className='tech-p'>ExpressJS </p>
            <p className='tech-p'>Jest </p>
            <p className='tech-p'>KnexJS </p>
            <p className='tech-p'>SQLite3 </p>
            <p className='tech-p'>Heroku </p>


                </div>

          
            
               
            </div>
        </div>
    )
}

export default StoryTelling;