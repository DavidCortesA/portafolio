import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoN from '../image/LogoN.png'

const Navbar = () => {
  const [ showMenu, setShowMenu ] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className={`menu ${showMenu ? 'menu--responsive' : ''}`}>
      <button className='menu__toggle' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <NavLink to='/'>
        <img src={LogoN} alt="davidcortesa" className='menu__logo'/>
      </NavLink>
      <ul className='menu__opcions'>
        <li className='menu__opcions--opcion'><NavLink to='/curriculum'>Currículum</NavLink></li>
        <li className='menu__opcions--opcion'><NavLink to='/proyectos'>Proyectos</NavLink></li>
        <li className='menu__opcions--opcion'><NavLink to='/contacto'>Contacto</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
