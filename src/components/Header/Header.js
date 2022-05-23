import React from "react";

///import style
import "../Header/Header.css";

///react router
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav_header">
        <h1 className="logo">
          <Link to="/" className="nav_logo">LUBRRE</Link>
        </h1>

        <ul className="nav_menu">
          <li className="nav_item">
            <Link to="/project" className="nav_link">
              PROJETS
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/about" className="nav_link">
              A PROPOS
            </Link>
          </li>
          <li className="nav_item">
            <a href="mailto:barrere.lucas@icloud.com?subject=formulaire de contact du portfolio" className="nav_link contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
