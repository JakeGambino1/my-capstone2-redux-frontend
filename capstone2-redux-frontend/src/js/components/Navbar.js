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
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
