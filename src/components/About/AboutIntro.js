import React from "react";

import { Link } from "react-router-dom";

import "./Styles/AboutIntro.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function AboutIntro() {
  return (
    <div className="about">
      <div className="about_p1">
        <div className="about_info">
          <h1 className="about_title">ABOUT</h1>
          <p className="about_text">
            Salut, moi c'est Lucas et je suis un multi-disciplinaire créatif qui
            vit dans le sud de la France. Je suis spécialisé dans le Product
            Design, UX Design et l'identité digitale.
          </p>
          <p className="about_text">
            En addition de tout ça je fais des tapis custom, que vous pourrez
            retrouver sur <span>@rugsmatters</span>.
          </p>
          <div className="about_card_stack">
            <p className="about_stack">UX DESIGN</p>
            <p className="about_stack">HTML/CSS/JS INTEGRATION</p>
            <p className="about_stack">DIGITAL IDENTITY</p>
            <p className="about_stack">CUSTOM RUG</p>
          </div>
        </div>
        <div className="img_info">
          <div className="about_img"></div>
          <div className="info_me">
            <div className="me">
              <p className="info_text">Lucas, 24ans.</p>
              <a href="https://www.instagram.com/lubrre/">
                <FontAwesomeIcon icon={faInstagram} className="icon_me" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about_p2">
        <p className="about_text_p2">
          UX Design est au centre de mon processus créatif. Mon objectif est
          d'accompagner l'utilisateur dans son expérience, de lui permettre
          d'avoir accès facilement à l'information de manière claire et
          efficace.
        </p>
        <p>
          Ce focus tourné vers l'expérience utilisateur permet une navigation
          agréable, fluide et percutante.
        </p>
      </div>

      <div className="about_p3p4">
        <div className="about_p3">
          <h3 className="title_soft">SOFT SKILLS</h3>
          <div className="about_card_p3">
            <p className="p3_card">IDENTITÉ DIGITALE</p>
            <p className="p3_card">UX DESIGN</p>
            <p className="p3_card">FRONTEND DEV</p>
          </div>
        </div>

        <div className="about_p4">
          <p className="about_text_p4">
            Ma mission est de créer une expérience digital fluide et dynamique
            au service de l'utilisateur et du client
          </p>
          <p className="about_text_p4">
            Mon but est de représenter la fiabilité et la bienveillance du
            client à travers un site, une application ou une identité numérique
            fonctionnelle et mémorisable.
          </p>
        </div>
      </div>

      <div className="about_p5">
        <p>
          Malgré mon amour profond pour le design, je suis aussi attirer par des
          passions qui m'anime depuis ma petite enfance.
        </p>
        <div className="about_hobbies">
          <p className="hobbie">STREET FOOD</p>
          <p className="hobbie">VOYAGE</p>
          <p className="hobbie">
            LE MONDE DE L'AUTOMOBILE<br></br>
            <span className="hob">les courses, la modication, etc...</span>
          </p>
          <p className="hobbie">MODE</p>
          <p className="hobbie">ARCHITECTURE</p>
        </div>
      </div>

      <div className="about_p6">
        <p className="text_p6">Je suis toujours à la rechercher de nouvaux challenges. Vous allez pouvoir retrouver mon CV <Link to="/files/lubrreresume.pdf" target="_blank" download className="link_p6">ici</Link>. <br></br><br></br>N'hésitez pas à me contacter pour tout projet j'étudie chaque proposition !</p>
        <a
          href="mailto:barrere.lucas@icloud.com?subject=formulaire de contact du portfolio"
          className="about_contact"><div className="memoji"></div></a>
      </div> 
    </div>
  );
}

export default AboutIntro;
