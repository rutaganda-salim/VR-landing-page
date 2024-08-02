import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">

        <section id="Home">
          <HeroSection />
        </section>

        <section id="Features">
          <FeatureSection />
        </section>

        <section id="Workflow">
          <Workflow />
        </section>

        <section id="Pricing">
          <Pricing />
        </section>

        <section id="Testimonials">
          <Testimonials />
        </section>

        <Footer />
      </div>
    </>
  )
}

export default App 