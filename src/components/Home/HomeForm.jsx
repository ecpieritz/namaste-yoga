import React from "react";
import formImg from '../../assets/img/ny-home__form__img.png'

function HomeForm() {
  return (
    <section className="ny-home__form">
      <div className="container-fluid">
      <div className="ny-home__form__img">
          <img src={formImg} alt="" />
        </div>

        <h2>
          Contact us to
          <br />
          know more
        </h2>

        <form className="ny-home__form__div">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputName">Your Name</label>
              <input
                type="text"
                class="form-control"
                id="inputName"
                placeholder=""
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail">Email</label>
              <input type="email" class="form-control" id="inputEmail" />
            </div>
          </div>
          <div class="form-group">
            <label for="inputMessage">Your Message</label>
            <textarea class="form-control" id="inputMessage" placeholder="" />
          </div>
          <button type="submit" class="ny-btn beige-bg">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default HomeForm;
