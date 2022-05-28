import React from 'react'

import "../Project/Styles/Project.css";

import { Link } from "react-router-dom"

function Project() {
  return (
    <div className="project">
      <h1 className="P_project">LES PROJETS</h1>

    <Link to="/porscherentalexperience">
      <div className="P_card">
        <p className="P_number_left">01</p>
        <div className="P_info_left">
          <div className="P_img"></div>
          <h2 className="P_title_left">PORSCHE RENTAL EXPERIENCE</h2>
        </div>
      </div></Link>

    <Link to="/raceclub" className='link_project'>
      <div className="P_card">
        <p className="P_number_right">02</p>
        <div className="P_info_right">
          <h2 className="P_title">RACE<br></br>CLUB</h2>
          <div className="P_img"></div>
        </div>
      </div>
      </Link>

      <div className="P_card">
        <p className="P_number_left">03</p>
        <div className="P_info_left">
          <div className="P_img"></div>
          <h2 className="P_title_left">ROAD<br></br>ART</h2>
        </div>
      </div>

      <div className="P_card">
        <p className="P_number_right">04</p>
        <div className="P_info_right">
          <h2 className="P_title">RESERVIA</h2>
          <div className="P_img"></div>
        </div>
      </div>
    </div>
  )
}

export default Project;