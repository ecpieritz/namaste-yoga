import React from 'react'
import banner from '../../assets/img/ny-home__banner.png'

function HomeBanner() {
  return (
    <div className='ny-home__banner'>
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-md-6 ny-home__banner__text">
            <h1 className='mb-1'>Relax. Recline. Wind Down.</h1>
            <p className='mb-5'>Namaste is a premier yoga academy dedicated to promoting holistic well-being through ancient practices and modern wellness techniques.</p>
            <a className='ny-btn gray-bg' href="/videos">Get Started</a>
          </div>
          <div className="col-md-6 ny-home__banner__img">
            <img src={banner} alt="woman in yoga pose" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
