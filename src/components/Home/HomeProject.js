import React from "react";

import "../Home/Styles/HomeProject.css";

function HomeProject() {
  return (
    <div className="home_project">
      <h1 className="HP_project">LES PROJETS</h1>
      <div className="HP_card">
        <p className="HP_number_left">01</p>
        <div className="HP_info_left">
          <div className="HP_img"></div>
          <h2 className="HP_title">PORSCHE RENTAL EXPERIENCE</h2>
        </div>
      </div>

      <div className="HP_card">
        <p className="HP_number_right">01</p>
        <div className="HP_info_right">
          <h2 className="HP_title">PORSCHE RENTAL EXPERIENCE</h2>
          <div className="HP_img"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeProject;
