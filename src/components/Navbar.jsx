import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoN from '../image/LogoN.png'

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const btnExpanded = () => {
    setExpanded(!expanded)
  };
  
  return (
    <nav className='menu'>
      <NavLink to="/" className="menu__logo">
        <img src={LogoN} alt="" />
      </NavLink>
      <button className="menu__hamburger" onClick={btnExpanded}>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
          >
        <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
            />
        </svg>
      </button>
      <div className={expanded ? "menu__navegation expanded" : "menu__navegation" }>
        <ul>
          <li className='menu__navegation--option' onClick={btnExpanded}><NavLink to="/curriculum">Curriculum</NavLink></li>
          <li className='menu__navegation--option' onClick={btnExpanded}><NavLink to="/proyectos">Proyectos</NavLink></li>
          <li className='menu__navegation--option' onClick={btnExpanded}><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
