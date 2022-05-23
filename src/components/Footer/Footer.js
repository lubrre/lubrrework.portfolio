import React from "react";

import "../Footer/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_nav">
        <a
          href="mailto:barrere.lucas@icloud.com?subject=formulaire de contact du portfolio"
          className="footer_contact">un projet ? parlons-en !</a>
        <div className="footer_link">
          <p>privacy policy</p>
          <p>instagram</p>
          <p>behance</p>
        </div>
      </div>
      <p className="footer_right">2022 LUBRRE - ALL RIGHTS RESERVED</p>
    </div>
  );
}

export default Footer;
