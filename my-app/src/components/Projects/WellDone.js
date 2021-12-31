import React from 'react'
import "./projects.scss"
import WellDoneLogo from "../../images/WelldoneLogo.png"
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function WellDone () {
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
                <img className='project-img' src={WellDoneLogo} />
            </div>
                {/* Intro Pt 1. */}
                <div className='intro-1-wrapper'>
            <p className='intro-1-p'>            Built a backend to persist well sensor data and a frontend to
              visualize which pumps need maintenance for{" "}
              <a
                href="https://welldone.org/"
                target="_blank"
             className='project-a'
              >
                WellDone
              </a>.
</p>
            <div className='intro-1-links'>
            <a className='intro-1-link' target="_blank" href="https://welldone-water.now.sh/">View live</a>
            <a className='intro-1-link' target="_blank"
                href="https://github.com/labs17-WellDone">Github</a>
                </div>

            </div>
            {/* Intro/Description */}
            <div className='project-section'>
            <h3 className='project-header'>Intro</h3>
            <p className='project-p'>WellDone International is a non-profit organization working to improve access to clean water which is essential to human health, productivity, and well-being. They place proprietary modular sensors on pumps in Cambodia and soon also in Uganda. Their work combines research, technology, and design to catalyze development solutions that are transformative, community-driven, and sustainable. </p>
            <p className='project-p'>This was part of Lambda School Labs, a 2-month long project where we gained valuable experience working as a team of 8. We took on an existing project and colloborated with real stakeholders; building on the work of Labs 15, they enlisted our teams support in order to build out their internal dashboard for monitoring the real time statuses of pump functionality. This involved building a robust backend and updating the aesthetics and user friendliness of the front-end. In addition, we have included dozens of tests and robust information for future developers on this project, including a detailed readme and API documentation. </p>

            </div>
             {/* Role */}
             <div className='project-section'>
            <h3 className='project-header'>Role</h3>
            <h4 className='role-header'>Full-stack Developer</h4>
            {/* <p className='project-p'>A fun and challenging part of working at a startup is the variety of roles you work in. Here's what I've worked on so far:</p> */}
            <ul className='role-ul'>
                <li className='role-li'>Collaborated with backend engineers for API integrations to collect data from well sensors as well as provide CRUD functionality specific to the logged-in user (admin) using React</li>
                <li className='role-li'>Built production-ready APIs and handled data persistence/user authentication using Node, Express, Postgres</li>
                <li className='role-li'>Conducted technical/competitor research and communicated with stakeholders to better understand client needs, designed and updated database schema accordingly</li>
            </ul>
            </div>
             {/* Tech */}
             <div className='project-section' id='last'>
            <h3 className='project-header'>Tech Stack</h3>
            <div className='project-p' id='tech-stack'>
            <p className='tech-p'>ReactJS </p>
            <p className='tech-p'>NodeJS </p>
            <p className='tech-p'>ExpressJS </p>
            <p className='tech-p'>SQLite3 </p>
            <p className='tech-p'>PostgreSQL </p>
            <p className='tech-p'>Vercel </p>


                </div>

          
            
               
            </div>
        </div>
    )
}

export default WellDone;