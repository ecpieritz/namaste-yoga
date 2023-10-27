import React from 'react'
import banner from '../../assets/img/ny-about__banner.png'

function AboutBanner() {
  return (
    <div className='ny-about__banner'>
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-md-6 ny-about__banner__img">
            <img src={banner} alt="woman in yoga pose" />
          </div>
          <div className="col-md-6 ny-about__banner__text">
            <h1>About Us</h1>
            <p className='mt-5'>At Namaste, we're dedicated to fostering wellness through yoga and mindfulness. Our experienced instructors and serene environment create the perfect space for your personal growth and inner peace</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBanner
