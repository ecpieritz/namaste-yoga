import React from "react";
import img01 from '../../assets/img/ny-about__history__01.jpg'
import img02 from '../../assets/img/ny-about__history__02.jpg'

function AboutHistory() {
  return (
    <section className="ny-about__history">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 ny-about__history__img">
            <div className="row">
              <div className="col-md-6">
                <img src={img01} alt="" />
                <h4>Maria Silva</h4>
                <p><i>CEO & Instructor</i></p>
              </div>
              <div className="col-md-6">
                <img src={img02} alt="" />
                <h4>Julia Matsunada</h4>
                <p><i>Instructor</i></p>
              </div>
            </div>
          </div>

          <div className="col-md-7 ny-about__history__text">
            <p>Namaste's story begins in May 2015 in Ananindeua, Pará, Brazil. Founded by Maria Silva, a passionate yogi, Namaste was born out of her deep love for yoga and her desire to bring its transformative power to her local community.</p>
            <p>Maria's personal journey with yoga had a profound impact on her life, providing a sense of balance and inner peace. Motivated by this transformation, she established Namaste as a sanctuary for yoga and mindfulness.</p>
            <p>Over the years, Namaste has flourished, offering a diverse range of classes and becoming a center for personal growth and holistic well-being in the heart of Ananindeua. The community has grown, and Namaste continues to inspire and guide individuals on their own paths to well-being and self-discovery, just as Maria's own journey was illuminated by the practice of yoga.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHistory;
