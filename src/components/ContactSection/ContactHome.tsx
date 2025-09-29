import React from "react";
import HeroSection from "../../shared/HeroSection";
import { contactAssets } from "../../assets/contactAssets";
import { homeSocials } from "../../lib/HomeLib"; // Import socials

const ContactHome: React.FC = () => {
  return (
    <HeroSection
      backgroundImage={contactAssets.Contact}
      title="Contact Us"
      titleClassName="mt-40 mb-0"
      subtitle={
        <p className="text-2xl md:text-5xl font-light max-w-5xl mx-auto mt-0 tracking-wider leading-relaxed">
          Let's Build Something Great Together
        </p>
      }
      socials={homeSocials} // Pass socials prop (mobile and tablet only)
    />
  );
};

export default ContactHome;
