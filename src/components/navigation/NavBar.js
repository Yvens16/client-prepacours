import React from 'react';
import {  Link } from 'react-router-dom';
import './_navbar.scss';

const NavBar = () => {
  return (
    <>
    <header className="main_h">
      <div className="row">
        <Link to='/' className="logo">Logo</Link>

        <div className="mobile-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav>
          <ul>
            <li><a href="tel:+33627269473">06 27 26 94 73</a></li>
            <div className="fb-share-button" data-href="https://www.facebook.com/fabuno/" data-layout="button_count" data-size="small" data-mobile-iframe="true">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Ffabuno%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
            Partager
            </a>
            </div>
            <li><Link className='a' to=''>Partager</Link></li>
            <li><Link className='a' to='/application'>Réserver un cours</Link></li>
          </ul>
        </nav>
      </div>  
    </header>
    </>
  )
} 

export default NavBar;
