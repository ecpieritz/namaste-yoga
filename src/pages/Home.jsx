import React from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import HomeLearn from '../components/Home/HomeLearn'
import HomeAbout from '../components/Home/HomeAbout'

function Home() {
  return (
    <main className='ny-home'>
      <HomeBanner />
      <HomeLearn />
      <HomeAbout />
    </ main>
  )
}

export default Home
