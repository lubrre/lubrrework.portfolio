import React from "react";

import "./Styles/OneProject.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";

function Porsche() {
  return (
    <div className="OP">
      <h1 className="OP_title">PORSCHE RENTAL EXPERIENCE</h1>

      <div className="OP_icon">
        <div className="card_icon">
          <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon>
          <h3 className="icon_title">ROLE</h3>
          <p className="icon_detail">UX Design, UX Research</p>
        </div>

        <div className="card_icon">
          <FontAwesomeIcon icon={faCalendar} className="icon"></FontAwesomeIcon>
          <h3 className="icon_title">TIMELINE</h3>
          <p className="icon_detail">Projet fictif</p>
        </div>

        <div className="card_icon">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="icon"
          ></FontAwesomeIcon>
          <h3 className="icon_title">OUTILS</h3>
          <p className="icon_detail">Figma, Photoshop</p>
        </div>
      </div>

      <div className="OP_part1">
        <h3 className="OP_secondtitle">Contexte</h3>
        <p className="OP_title_detail">Informations générales</p>
        <p className="OP_text_p1">
          Pour ce projet, le client souhaitait mettre en place une application
          afin de permettre à ses plus fidèles clients de louer certains modèles
          de la concession. Porsche Rental Experience veut offrir à ses clients
          une expérience de location hors du temps avec un partage de données
          entre Porschistes.
        </p>
      </div>

      <div className="OP_company">
        <div className="company">
          <div className="img_company"></div>
          <div className="company_info">
            <p className="title_company">L'ENTREPRISE</p>
            <p className="OP_text">
              Porsche est un constructeur d'automobiles de sport allemand. Fondé
              en 1931 par Ferdinand Porsche, puis repris par son fils Ferry
              Porsche. Ferdinand Porsche est l'ingénieur qui créa la première
              Volkswagen. C'est chronologiquement la dixième marque à avoir
              intégré le groupe Volkswagen AG en 2009.
            </p>
          </div>
        </div>
      </div>

      <div className="OP_brief_challenge">
        <div className="OP_part1">
          <p className="OP_title_detail">Le brief</p>
          <p className="OP_text_p1">
            Porsche cherche à avoir une application qui va permettre de
            développer untout nouveau service de location de véhicules pour
            leurs clients Porsche. Pour ce projet, nous avons déjà quelques
            idées grâce au client. En effet ayant une identité graphique déjà
            existante cela à permit d'établir un cahier des charges rapidement.
          </p>
        </div>

        <div className="OP_part1">
          <p className="OP_title_detail">Les challenges</p>
          <p className="OP_text_p1">
            Porsche cherche à avoir une application qui va permettre de
            développer untout nouveau service de location de véhicules pour
            leurs clients Porsche. Pour ce projet, nous avons déjà quelques
            idées grâce au client. En effet ayant une identité graphique déjà
            existante cela à permit d'établir un cahier des charges rapidement.
          </p>
        </div>
      </div>

      <div className="OP_part1">
        <h3 className="OP_secondtitle">Solution</h3>
        <p className="OP_title_detail">Task flows</p>
        <p className="OP_text_p1">
          Comme le projet était complexe et impliquait plusieurs acteurs, l'analyse fonctionnelle réalisé en collaboration avec le client à été extrêment utile. Cela nous permet d'avoir une vision globale des différentes fonctionnalités que nous avons dû concevoir. La création d'un taskflow en mettant en lumière la fonctionnalité principale de l'application permet de comprendre comment l'application va se comporter.
        </p>
        <div className="OP_userflow1"></div>
        <p className="OP_text_p2">Userflow de l'utilisateur, montrant le processus pour reserver la location d'un véhicule</p>
      </div>
      
      <div className="OP_part1">
        <p className="OP_title_detail">Analyse fonctionnelle et maquettes</p>
        <p className="OP_text_p1">
          Merci à l'userflow et à l'analyse fonctionnelle, nous étions prêt à créer les maquettes. Différentes features ont été divisés en histoire, chacune d'elle coorespondant à une action de l'utilisateur au sein de l'application. Pour ce projet,les histoires ont pour but de couvrir toutes les actions possibiles pour le client et la concession qui loue le véhicule.
        </p>
        <p className="OP_text_p3">Cette segmentation en histoire permet:<br></br>-Une cohérence entre l'analyse fontionnelle et les maquettes créés.<br></br>-Une facilité de compréhension lors de la présentaion au client.</p>
        <div className="OP_wireframes1"></div>
      </div>
      
      
    </div>
  );
}

export default Porsche;
