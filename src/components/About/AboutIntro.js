import React from "react";

import "./Styles/AboutIntro.css";

function AboutIntro() {
  return (
    <div className="about_intro">
      <div className="about_info">
        <h1 className="about_title">ABOUT</h1>
        <p className="about_text">
          Salut, moi c'est Lucas et je suis un multi-disciplinaire créatif qui
          vit dans le sud de la France. Je suis spécialisé dans le Product
          Design, UX Design et l'identité digitale
        </p>
        <p className="about_text">
          En addition de tout ça je fais des tapis custom, que vous pourrez
          retrouver sur{" "}
          <span href="www.instagram.com/rugsmatters/">@rugsmatters</span>
        </p>
        <div className="about_card_stack">
          <p className="about_stack">UX DESIGN</p>
          <p className="about_stack">HTML/CSS/JS INTEGRATION</p>
          <p className="about_stack">DIGITAL IDENTITY</p>
          <p className="about_stack">CUSTOM RUG</p>
        </div>
      </div>
      <div className="about_img"></div>
    </div>
  );
}

export default AboutIntro;
