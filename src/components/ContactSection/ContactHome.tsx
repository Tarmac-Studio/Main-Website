import React from "react";
import HeroSection from "../../shared/HeroSection";
import { contactAssets } from "../../assets/contactAssets";
import { homeSocials } from "../../lib/HomeLib";

const ContactHome: React.FC = () => {
  return (
    <HeroSection
      backgroundImage={contactAssets.Contact}
      title="Contact Us"
      subtitle={
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  main-text font-medium leading-tight ">
          Let’s Build Something Great Together{" "}
        </p>
      }
      socials={homeSocials}
    />
  );
};

export default ContactHome;
