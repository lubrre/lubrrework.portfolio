import React from "react";

import "./Styles/PorscheProject.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";

function Porsche() {
  return (
    <div className="porsche">
      <h1 className="porsche_title">PORSCHE RENTAL EXPERIENCE</h1>

      <div className="porsche_icon">
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

      <div className="img_porsche_1"></div>

      <div className="porsche_part1">
        <h3 className="porsche_secondtitle">Contexte</h3>
        <p className="porsche_title_detail">Informations générales</p>
        <p className="porsche_text_p1">
          Pour ce projet, le client souhaitait mettre en place une application
          afin de permettre à ses plus fidèles clients de louer certains modèles
          de la concession. Porsche Rental Experience veut offrir à ses clients
          une expérience de location hors du temps avec un partage de données
          entre Porschistes.
        </p>
      </div>

      <div className="porsche_company">
        <div className="company">
          <div className="img_company"></div>
          <div className="company_info">
            <p className="title_company">L'ENTREPRISE</p>
            <p className="porsche_text">
              Porsche est un constructeur d'automobiles de sport allemand. Fondé
              en 1931 par Ferdinand Porsche, puis repris par son fils Ferry
              Porsche. Ferdinand Porsche est l'ingénieur qui créa la première
              Volkswagen. C'est chronologiquement la dixième marque à avoir
              intégré le groupe Volkswagen AG en 2009.
            </p>
          </div>
        </div>
      </div>

      <div className="porsche_brief_challenge">
        <div className="porsche_part1 brief">
          <p className="porsche_title_detail">Le brief</p>
          <p className="porsche_text_p1">
            Porsche cherche à avoir une application qui va permettre de
            développer untout nouveau service de location de véhicules pour
            leurs clients Porsche. Pour ce projet, nous avons déjà quelques
            idées grâce au client. En effet ayant une identité graphique déjà
            existante cela à permit d'établir un cahier des charges rapidement.
          </p>
        </div>

        <div className="porscherentalexperience"></div>
      </div>

      <div className="porsche_brief_challenge">
        <div className="porsche_part1 ">
          <p className="porsche_secondtitle">
            Pages principales de l'application
          </p>
          <p className="porsche_text mainpages">
            Les pages principales de l’application, accessibles via la barre de
            navigation sont : la homepage, le profil, la recherche
          </p>
        </div>
      </div>
      <div className="porsche_mainpage"></div>

      <div className="porsche_brief_challenge">
        <div className="porsche_part1 ">
          <p className="porsche_secondtitle">
            On Boarding
          </p>
          <p className="porsche_text mainpages">
            Sign up, Login, walktrhought de l'application permette de se rendre compte des différentes fonctionnalités de cette dernière.
          </p>
        </div>
      </div>      
      <div className="porsche_onboarding"></div>


      <div className="porsche_brief_challenge">
        <div className="porsche_part1 ">
          <p className="porsche_secondtitle">
            User Experience
          </p>
          <p className="porsche_text mainpages">
            La réflexion UX a été centrale pour ce projet qui présente des cibles aux usagers variés tout en étant précises.
          </p>
        </div>
      </div>      
      <div className="porsche_userflow"></div>
      <p className="porsche_text userflow">USERFLOW</p>

      <div className="porsche_part1">
        <h3 className="porsche_secondtitle">Direction artistique</h3>
        <p className="porsche_title_detail">Branding</p>
        <p className="porsche_text_p1">
          Fort de son identité. L'application PORSCHE RENTAL EXPERIENCE reprend les codes graphiques du monde Porsche. La continuité du design repris par l'application est un choix réalisé avec le client afin de rassurer ses clients actuels ainsi que les futurs clients qu'ils sont bien et toujours dans le monde Porsche ou qualité rime toujours avec performance et élégance.
        </p>
        <div className="porsche_branding"></div>

        <p className="porsche_title_detail CTA">Pictogrammes, CTA</p>
        <p className="porsche_text_p1">
          L'interface de PORSCHE RENTAL EXPERIENCE est sobre et porte une attention particulière aux pictogrammes utilisés. Les boutons Call-To-Action sont aussi étudié de manière à poursuivre la charte graphique du client préalablement établit.
        </p>
        <div className="porsche_picto"></div>
        <p className="porsche_text userflow">PICTOGRAMMES</p>
        <div className="porsche_CTA"></div>
        <p className="porsche_text userflow">CALL TO ACTION BUTTON</p>

        <p className="porsche_title_detail CTA">Typographies</p>
        <p className="porsche_text_p1">
          Les couleurs de l'application sont issues de la charte graphique de Porsche.
        </p>
        <div className="porsche_typo"></div>
        <p className="porsche_text userflow">TYPOGRAPHIE</p>
        <div className="porsche_colors"></div>
        <p className="porsche_text userflow">COULEURS</p>
      </div>

    </div>
  );
}

export default Porsche;
