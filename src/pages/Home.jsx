import React from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import HomeLearn from '../components/Home/HomeLearn'
import HomeAbout from '../components/Home/HomeAbout'
import HomeStartJourney from '../components/Home/HomeStartJourney'
import HomeDiscover from '../components/Home/HomeDiscover'
import HomeExplore from '../components/Home/HomeExplore'
import HomeForm from '../components/Home/HomeForm'

function Home() {
  return (
    <main className='ny-home'>
      <HomeBanner />
      <HomeLearn />
      <HomeAbout />
      <HomeStartJourney />
      <HomeDiscover />
      <HomeExplore />
      <HomeForm />
    </ main>
  )
}

export default Home
