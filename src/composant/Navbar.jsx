import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <div>
           <li className="logo">
            <NavLink to="/" className="nav-link">
              {/* <img className='imglo' src="/fast-delivery.png" alt="" /> */}
          </NavLink>
          </li>
        </div>
        <div className='dis'>
            <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Services" className="nav-link">
              Connexion
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/Apropos" className="nav-link">
              À propos
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink to="/Contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </div>
       
        
      </ul>
    </nav>

  );
} export default Navbar;