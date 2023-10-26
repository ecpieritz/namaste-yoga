import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub, faSquareInstagram  } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/img/ny-logo.png'

function Footer() {
  const socials = [
    {
      link: 'https://github.com/ecpieritz',
      img: faSquareGithub
    },
    {
      link: 'https://www.linkedin.com/in/ecpieritz/',
      img: faLinkedin
    },
    {
      link: 'https://www.instagram.com/ecpieritz/',
      img: faSquareInstagram
    },
  ]
  return (
    <footer className='ny-footer'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
          <a className='ny-footer__logo' href="/">
            <img src={logo} alt="" />
          </a>
          </div>
          <div className="col-md-6 ny-footer__text">
            <p>Namaste is a premier yoga academy dedicated to promoting holistic well-being through ancient practices and modern wellness techniques</p>
          </div>
          <div className="col-md-3 ny-footer__socials">
            {socials.map((social,index) => (
              <a href={social.link} target="_blank" rel="noopener noreferrer" key={index}>
                <FontAwesomeIcon icon={social.img} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='ny-footer__made-by'>
        <h5>Developed with 💙 by <a href="https://www.linkedin.com/in/ecpieritz/" target="_blank" rel="noopener noreferrer">Emilyn C. Pieritz</a></h5>
      </div>
    </footer>
  )
}

export default Footer