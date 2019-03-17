import React from 'react';
import './_footer.scss';

const Footer = () => {
  return (
    <main className="footer">
    <ul>
    <li><a href="http://">Donner des cours</a></li>
    <li><a href="http://">Contact</a></li>
    <li><a href="http://">Conditions générales</a></li>
    <li><a href="http://">À propos</a></li>
    </ul>
    {/*Crée par <a href="https://www.linkedin.com/in/yvens-belaston-0774a8141/" target="blank" className="footer__link">Yvens Belaston</a>*/}
    </main>
  )
}

export default Footer;