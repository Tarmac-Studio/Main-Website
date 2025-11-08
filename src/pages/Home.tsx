import React from "react";
import Studio from "../shared/Studio";
import Testimonials from "../components/HomeSection/Testimonials";
import Process from "../components/HomeSection/Process";
import Hero from "../components/HomeSection/Hero";
import Solve from "../components/HomeSection/Solve";
import Services from "../components/HomeSection/Services";
import Portfolio from "../components/HomeSection/Portfolio";
import Founder from "../components/HomeSection/Founder";
import { usePageMeta } from "../utils/Meta";

const Home: React.FC = () => {
  usePageMeta(
    "Tarmac Digital Studio | Your Digital Launchpad for Scalable Growth",
    "Tarmac Digital Studio helps We help founders transform ideas into beautiful and functional products fast. We offer you branding, strategy, and functional development, all under one roof."
  );
  return (
    <>
      <Hero />
      <Solve />
      <Services />
      <Portfolio />
      <Founder />
      <Process />
      <Testimonials />
      <Studio />
    </>
  );
};

export default Home;
