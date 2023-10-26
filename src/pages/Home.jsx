import React from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import HomeLearn from '../components/Home/HomeLearn'
import HomeAbout from '../components/Home/HomeAbout'
import HomeStartJourney from '../components/Home/HomeStartJourney'

function Home() {
  return (
    <main className='ny-home'>
      <HomeBanner />
      <HomeLearn />
      <HomeAbout />
      <HomeStartJourney />
    </ main>
  )
}

export default Home
