import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/imdb.png';
import junto1 from './img/junto1.png';

function Header() {
  return (
    <div>
      <nav className="navbar mb-5" style={{ backgroundColor: `black` }}>
        <div className="container">
          <div className="navbar-header">
            <li className="nav-item d-inline-block mr-4">
              <img src={logo} width="50" height="50" />
            </li>
          </div>
          <Link className="navbar-brand text-lg brand-text" to="/" style={{ color: `#ffc107` }}>
            Internet Movie Database
            </Link>
            <li className="navbar-nav ml-auto text-light d-inline-block">
              <img src={junto1} width="100" height="30" />
            </li>

        </div>
      </nav>
    </div>
  );
}

export default Header;
