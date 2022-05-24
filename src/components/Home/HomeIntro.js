import React from "react";

import "../Home/Styles/HomeIntro.css";

function HomeIntro() {
  return (
    <div className="intro">
      <div className="intro_info">
        <h2 className="intro_name">lucas barrere</h2>
        <h1 className="intro_title">
          Self-taught <br></br><span className="span_intro">UX DESIGNER</span><br></br> driven by curiosity
        </h1>
      </div>
      <div className="intro_img"></div>
    </div>
  );
}

export default HomeIntro;
