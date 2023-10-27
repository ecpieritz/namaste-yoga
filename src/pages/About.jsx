import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutUs from "../components/About/AboutUs";
import AboutHistory from "../components/About/AboutHistory";

function About() {
  return (
    <main className="ny-about">
      <AboutBanner />
      <AboutUs />
      <AboutHistory />
    </main>
  );
}

export default About;
