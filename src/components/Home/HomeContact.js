import React from "react";

import "./Styles/HomeContact.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function HomeContact() {
  return (
    <div className="HC_contact">
      <h2 className="HC_title"><span className="HC_hover">Un projet</span>,<span className="HC_hover">une idée</span>...<br></br>Parlons en ensemble !</h2>
      <div className="HC_card">
        <a href="mailto:barrere.lucas@icloud.com?subject=formulaire de contact du portfolio" className="HC_mailto">Envoyer un email</a>
        <FontAwesomeIcon icon={faEnvelope} className="icon_env" />
      </div>
    </div>
  );
}

export default HomeContact;
