import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Carousel() {
  return (
    <div class="row">
      <div class="col-12 text-right mb-4">
        <a
          class="ny-btn arrow-btn mb-3 mr-1"
          href="#learn-carousel"
          role="button"
          data-slide="prev"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <a
          class="ny-btn arrow-btn mb-3 "
          href="#learn-carousel"
          role="button"
          data-slide="next"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      <div class="col-12">
        <div
          id="learn-carousel"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="ny-home__learn__carousel__item carousel-item active">
              <div class="row">
                <div class="col-md-4 col-sm-12 mb-3">
                  <div class="card">
                    <iframe
                      width="100%"
                      height="250"
                      src="https://www.youtube.com/embed/zbx6I4ZPXKI?si=Uk1CAWGMxbZlCuAZ"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      allowfullscreen
                    ></iframe>
                    <div class="card-body">
                      <h4 class="card-title">Yoga For Back Pain</h4>
                      <a className="ny-btn beige-bg" href="/videos">View more videos</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 mb-3">
                  <div class="card">
                    <iframe
                      width="100%"
                      height="250"
                      src="https://www.youtube.com/embed/Kvoq4luIYVc?si=qHPynI_sPKQDVl6Y"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      allowfullscreen
                    ></iframe>
                    <div class="card-body">
                      <h4 class="card-title">5 Minute Full Body Stretch</h4>
                      <a className="ny-btn beige-bg" href="/videos">View more videos</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 mb-3">
                  <div class="card">
                    <iframe
                      width="100%"
                      height="250"
                      src="https://www.youtube.com/embed/_Mx24iENIEY?si=QOrld7nom37lJxkh"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      allowfullscreen
                    ></iframe>
                    <div class="card-body">
                      <h4 class="card-title">27-Minute Yoga For Your Core</h4>
                      <a className="ny-btn beige-bg" href="/videos">View more videos</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ny-home__learn__carousel__item carousel-item">
              <div class="row">
                <div class="col-md-4 col-sm-12 mb-3">
                  <div class="card">
                    <iframe
                      width="100%"
                      height="250"
                      src="https://www.youtube.com/embed/bYQwM841ED4?si=Cw7HFz9IZoio-kIv"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      allowfullscreen
                    ></iframe>
                    <div class="card-body">
                      <h4 class="card-title">Yoga For Lymphatic Flow</h4>
                      <a className="ny-btn beige-bg" href="/videos">View more videos</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 mb-3">
                  <div class="card">
                    <iframe
                      width="100%"
                      height="250"
                      src="https://www.youtube.com/embed/raUEsDttCL4?si=5hrj13RUNcC-I1MF"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      allowfullscreen
                    ></iframe>
                    <div class="card-body">
                      <h4 class="card-title">Yoga For Bone Health</h4>
                      <a className="ny-btn beige-bg" href="/videos">View more videos</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 mb-3">
                  <div class="card">
                    <iframe
                      width="100%"
                      height="250"
                      src="https://www.youtube.com/embed/ZbtVVYBLCug?si=ifYdCPb0MAnDPOTA"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      allowfullscreen
                    ></iframe>
                    <div class="card-body">
                      <h4 class="card-title">20-Minute Intermediate Power Yoga</h4>
                      <a className="ny-btn beige-bg" href="/videos">View more videos</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
