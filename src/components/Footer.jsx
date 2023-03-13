import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <h1 className='footer__container--title'>Email</h1>
        <a href="mailto:david.cortes.ayala@hotmail.com" className="footer__container--link">david.cortes.ayala@hotmail.com</a>
      </div>
      <div className='footer__container'>
        <h1 className='footer__container--title'>Encuentrame</h1>
        <a href="https://github.com/DavidCortesA" className='footer__container--link' target='_blank'>Github</a>
        <a href="https://www.behance.net/davidcortesa" className='footer__container--link' target='_blank'>Behance</a>
        <a href="https://dribbble.com/DavidCortesA" className='footer__container--link' target='_blank'>Dribbble</a>
        <a href="https://twitter.com/davidcortesa" className='footer__container--link' target='_blank'>Twitter</a>
      </div>
      <div className='footer__container'>
        <h1 className='footer__container--title'>Contacto</h1>
          <p className='footer__container--text'>
            david.cortes.ayala@hotmail.com
          </p>
      </div>
      <div className='footer__container'>
        <h1 className='footer__container--title'>Contacto</h1>
          <p className='footer__container--text'>
            david.cortes.ayala@hotmail.com
          </p>
      </div>
    </footer>
  )
}

export default Footer;
