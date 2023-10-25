import React from 'react'
import Carousel from './Carousel'

function Learn() {
  return (
    <section className='ny-home__learn'>
      <div className="container-fluid">
        <div className="ny-home__learn__text">
          <h2>Learn with us</h2>
          <p>Dive into our 'Learn with Us' library, a treasure trove of instructional videos, designed to nurture your yoga journey and mindfulness practice, all within your preferred pace and comfort.</p>
        </div>
        <div className="ny-home__learn__carousel">
          <Carousel />
        </div>
      </div>
    </section>
  )
}

export default Learn
