import React from "react";
import logo from '../logo1.svg';
import { Link } from "react-router-dom";
import '../sideDrawer/DrawerToggleBtn';
import "./_navbar.scss";
import DrawerToggleBtn from "../sideDrawer/DrawerToggleBtn";

const Navbar = props => (
  <header className="toolbar">
  <nav className="toolbar__navigation">
    <div className="toolbar__toggle-btn">
      <DrawerToggleBtn click={props.drawerClickHandler} />
    </div>
    <div className="toolbar__navigation-logo">
      <Link to='/'><img src={logo} style={{height: '100px', width:'160px', transform: 'translateY(8%)'}} alt='Logo prepacours'/></Link>
      </div>
      <div className="toolbar__navigation-spacer"/>
      <div className="toolbar__navigation-items">
      <ul>
      <li><a href="tel:+33627269473">06 27 26 94 73</a></li>
      <li>
      <div className="fb-share-button" data-href="https://www.facebook.com/fabuno/" data-layout="button_count" data-size="small" data-mobile-iframe="true">
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Ffabuno%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
      Partager
      </a>
      </div>
      </li>
      <li>
      <button><Link className='a' to='/application'>Réserver un cours</Link></button>
      </li>
      </ul>
    </div>
    </nav>
          </header>
);

export default Navbar;

// <div className="row">
// <Link to='/' className="logo">Logo</Link>
// <div className="mobile-toggle">
//   <span></span>
//   <span></span>
//   <span></span>
// </div>
// <nav>
//   <ul>
//     <li><a href="tel:+33627269473">06 27 26 94 73</a></li>
//     <div className="fb-share-button" data-href="https://www.facebook.com/fabuno/" data-layout="button_count" data-size="small" data-mobile-iframe="true">
//     <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Ffabuno%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
//     Partager
//     </a>
//     </div>
//     <li><Link className='a' to=''>Partager</Link></li>
//     <li><Link className='a' to='/application'>Réserver un cours</Link></li>
//   </ul>
// </nav>
// </div>
