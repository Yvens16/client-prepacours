import React from 'react';
import {  Link } from 'react-router-dom';
import './_navbar.scss';

const NavBar = () => {
  return (
    <main className='navigation'>
    <nav>
      <ul>
        <li>Logo</li>
        <li> <a href="tel:+33627269473"> 06 27 26 94 73</a></li>
        <li>Logo middle</li>
        <li className="fb-share-button" data-href="https://www.facebook.com/fabuno/" data-layout="button_count" data-size="small" data-mobile-iframe="true">
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Ffabuno%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
        Partager
        </a>
        </li>
        <li><button id='reservation'> <Link to='/application'>Réserver un cours</Link></button></li>
      </ul>
    </nav>
    </main>
  )
} 

export default NavBar;