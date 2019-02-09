import React from "react";
import { Link } from "react-router-dom";
import "./_sideDrawer.scss";

const SideDrawer = props => {
  let drawerClass = "side-drawer";
  if (props.show) {
    drawerClass = "side-drawer open";
  }
  return (
    <nav className={drawerClass}>
      <ul>
        <button>
          <li>
            <a href="tel:+33627269473">06 27 26 94 73</a>
          </li>
        </button>
        <li>
          <div
            className="fb-share-button"
            data-href="https://www.facebook.com/fabuno/"
            data-layout="button_count"
            data-size="small"
            data-mobile-iframe="true"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Ffabuno%2F&amp;src=sdkpreparse"
              className="fb-xfbml-parse-ignore"
            >
              Partager
            </a>
          </div>
        </li>
        <li>
          <button>
            <Link className="a" to="/application">
              Réserver un cours
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
