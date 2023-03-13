import React from 'react'
import Perfil from '../image/Perfil.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <img src={Perfil} alt="Sujeto sonriendo a la camara, esando el en medio del campo" className='home__image'/>
      <div className="home__container">
        <h1 className="home__container--title">
          ¡Hola!, Soy David Cortez
        </h1>
        <p className="home__container--text">
          Desarrollador Frontend Junior 👨‍💻 y Diseñador UI/UX Junior 🎨 basado en Monterrey 📍. Especializado en React ⚛️. Apasionado por crear interfaces atractivas y funcionales para mis clientes 💻. Siempre 👀 aprendiendo y mejorando mis habilidades 🔥.
        </p>
        <div className="home__container--links">
          <Link to='/curriculum' className='link'>Currículum</Link>
          <Link to='/proyectos' className='link'>Proyectos</Link>
          <Link to='/contacto' className='link'>Contacto</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
