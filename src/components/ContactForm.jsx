import React from "react";

function ContactForm() {
  return (
    <section className="ny-form-section">
      <div className="container-fluid">
        <h2>
          Contact us to
          <br />
          know more
        </h2>

        <form className="ny-form-section__div">
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

export default ContactForm;
