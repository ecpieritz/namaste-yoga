import React from 'react'
import aboutImg from '../../assets/img/ny-home__about__img.png'

function HomeAbout() {
  return (
    <section className='ny-home__about'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 ny-home__about__img">
            <img src={aboutImg} alt="women in yoga pose" />
          </div>
          <div className="col-md-7 ny-home__about__text">
            <h2>Healthy lifestyle with yoga.</h2>
            <p>We are a Yoga Studio based in Ananindeua/PA, Brazil. Our goal is to promote a healthy lifestyle through practice of yoga and mindfulness. Classes are held in our studio space and online. Everyone is welcome to join our little community.</p>
            <a className='ny-btn gray-bg' href="/about">About Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
