import React from "react";
import Studio from "../shared/Studio";
import Testimonials from "../components/HomeSection/Testimonials";
import Process from "../components/HomeSection/Process";
import Hero from "../components/HomeSection/Hero";
import Solve from "../components/HomeSection/Solve";
import Services from "../components/HomeSection/Services";
import Portfolio from "../components/HomeSection/Portfolio";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Solve />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Studio />
    </>
  );
};

export default Home;
