import React from "react";
import HeroSection from "../../shared/HeroSection";
import { contactAssets } from "../../assets/contactAssets";

const ServicesHome: React.FC = () => {
  return (
    <HeroSection
      backgroundImage={contactAssets.Contact}
      title="Contact Us"
      titleClassName="mt-40 mb-0"
      subtitle={
        <p className="text-2xl md:text-4xl font-light max-w-3xl mx-auto mt-0">
          Let's Build  Something Great Together
        </p>
      }
    />
  );
};

export default ServicesHome;
