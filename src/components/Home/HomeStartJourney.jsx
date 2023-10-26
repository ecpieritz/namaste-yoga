import React from 'react'
import startImg from '../../assets/img/ny-home__start__img.png';

function HomeStartJourney() {
  return (
    <section className='ny-home__start'>
      <div className="container-fluid">
        <div className="row">
          
          <div className="col-md-7 ny-home__start__text">
            <h2>Start with us the body and mind clensing</h2>
            <p>Start with us on the path to rejuvenate your body and mind through our cleansing programs. Our holistic approach combines yoga, meditation, and expert guidance to help you achieve inner and outer balance, leaving you feeling refreshed and revitalized.</p>
            <a className='ny-btn gray-bg' href="/about">Start Your Journey</a>
          </div>
          <div className="col-md-5 ny-home__start__img">
            <img src={startImg} alt="women in yoga pose" />';
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeStartJourney
