import React from "react";
import "./_footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <main className="footer">
      <ul>
        <li>
          <Link to='/'>Donner des cours</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
        </li>
        <li>
          <Link to='/'>Conditions générales</Link>
        </li>
        <li>
          <Link to='/'>À propos</Link>
        </li>
      </ul>
      {/*Crée par <a href="https://www.linkedin.com/in/yvens-belaston-0774a8141/" target="blank" className="footer__link">Yvens Belaston</a>*/}
    </main>
  );
};

export default Footer;
