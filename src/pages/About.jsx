import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutUs from "../components/About/AboutUs";
import AboutHistory from "../components/About/AboutHistory";
import ContactForm from "../components/ContactForm";

function About() {
  return (
    <main className="ny-about">
      <AboutBanner />
      <AboutUs />
      <AboutHistory />
      <ContactForm />
    </main>
  );
}

export default About;
