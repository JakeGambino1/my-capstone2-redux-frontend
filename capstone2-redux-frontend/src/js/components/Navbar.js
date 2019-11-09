import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-fixed slide-from-top">
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <Link to="#" className="brand-logo">
              Staff Engagement
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/">Register</Link>
              </li>
              <li>
                <Link to="/">Add Post</Link>
              </li>
              <li>
                <Link to="/">Action List</Link>
              </li>
              <li>
                <Link to="/">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
