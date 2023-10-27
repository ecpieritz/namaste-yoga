import React from 'react'
import img01 from '../../assets/img/ny-about__us__01.jpg'
import img02 from '../../assets/img/ny-about__us__02.jpg'
import img03 from '../../assets/img/ny-about__us__03.jpg'
import img04 from '../../assets/img/ny-about__us__04.jpg'
import img05 from '../../assets/img/ny-about__us__05.jpg'
import img06 from '../../assets/img/ny-about__us__06.jpg'

function AboutUs() {
  return (
    <section className='ny-about__us'>
      <div className="container-fluid">
        <div className="row">
          
          <div className="col-md-7 ny-about__us__text">
            <p>Namaste is more than just a yoga academy; it's a sanctuary for the body and soul. Founded with a deep-rooted passion for promoting holistic well-being, our journey is dedicated to helping individuals unlock their full potential and achieve balance in their lives.</p>
            <p>or years, we've tirelessly cultivated an environment that fosters growth, self-discovery, and transformation. With a team of dedicated and experienced instructors, we offer a diverse range of yoga styles that cater to individuals of all backgrounds and experience levels.</p>
            <p>Our philosophy transcends physical postures. We believe that yoga is a powerful bridge between the body and mind, offering not only improved flexibility and physical health but also mental clarity and spiritual peace.</p>
            <p>In addition to our regular yoga classes, we provide specialized programs for body and mind detox, guided meditation, and immersive workshops. Our commitment is to assist our students in attaining a healthier, happier life, whether through physical flexibility, stress relief, or spiritual growth.</p>
            <p>Namaste is more than a place; it's a vibrant and inclusive community. We celebrate diversity, and everyone is warmly welcomed, regardless of age or fitness level. Together, we share experiences, support each other, and grow as a collective.</p>
            <p>We look forward to being a part of your journey towards self-discovery and well-being. Join us at Namaste and embark on the path to a more balanced and harmonious life."</p>
          </div>
          <div className="col-md-5 ny-about__us__img">
            <div className="row">
              <div className="col-6">
                <img src={img01} alt="" />
              </div>
              <div className="col-6">
                <img src={img02} alt="" />
              </div>
              <div className="col-6">
                <img src={img03} alt="" />
              </div>
              <div className="col-6">
                <img src={img04} alt="" />
              </div>
              <div className="col-6">
                <img src={img05} alt="" />
              </div>
              <div className="col-6">
                <img src={img06} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
