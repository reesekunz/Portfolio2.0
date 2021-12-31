import React, { useState } from "react";
import "./Burger.scss";
import { IoIosHome, IoIosKey, IoIosSettings, IoMdCreate } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";

// import { IoIosKey } from "react-icons/io";
// import { IoIosSettings } from "react-icons/io";
// import { IoMdCreate } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Link, Redirect, NavLink } from "react-router-dom";

const Burger = props => {
  // console.log('props in Menu', props)

  const openNav = () => {
    document.getElementById("myNav").style.width = "400px";
    document.getElementById("myNav").style.boxShadow = "1px 1px 3px 3px black";

    
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };



  return (
    <div className='burger-container'>
      {/* <div className="hamburger-menu" onClick={openNav}>
        <span style={{ backgroundColor: "white" }}></span>
        <span style={{ backgroundColor: "white" }}></span>
        <span style={{ backgroundColor: "white" }}></span>
      </div> */}
      <div id="myNav" className="overlay">
        <div className='close-wrapper'>
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={closeNav}>
            X
          </a>
          </div>
        <div className="overlay-content-map">
          <div class="eachNav">
          <NavLink to="/"><IoIosHome size={25} /></NavLink>
            <NavLink to="/"> Home</NavLink>
          </div>
          <div className="eachNav">
          <NavLink to="/gemint"><IoMdCreate size={25} /></NavLink>

            <NavLink to="/gemint">Blog</NavLink>
          </div>
          <div className="eachNav">
          <NavLink to="/gemint"><FaLaptopCode size={25} /> </NavLink>

            <NavLink to="/gemint">Gemint</NavLink>
          </div>
          <div className="eachNav">
          <NavLink to="/welldone"><FaLaptopCode size={25} /> </NavLink>

            <NavLink to="/welldone"> WellDone</NavLink>
          </div>
          <div className="eachNav">
          <NavLink to="/storytelling"><FaLaptopCode size={25} />  </NavLink>

            <NavLink to="/storytelling">Coordinated Story Telling </NavLink>
          </div>
          <div className="eachNav">
          <NavLink to="/randomacts"><FaLaptopCode size={25} /> </NavLink>

            <NavLink to="/randomacts"> Random Acts Generator</NavLink>
          </div>
         
        </div>
      </div>
      <div className="hamburger-menu" onClick={openNav}>
        <span style={{ backgroundColor: "white" }}></span>
        <span style={{ backgroundColor: "white" }}></span>
        <span style={{ backgroundColor: "white" }}></span>
      </div>
    </div>
  );
};

export default Burger;