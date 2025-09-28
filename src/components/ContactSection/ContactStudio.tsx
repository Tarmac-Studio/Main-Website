import React from "react";
import { assets } from "../../assets/homeAssets";
import Heading from "../../ui/Heading";
import SectionHeader from "../../ui/SectionHeader";
import ContactButton1 from "../../ui/ContactButton1";
import ContactButton2 from "../../ui/ContactButton2";

const ContactStudio: React.FC = () => {
  return (
    <section className="relative w-full h-[450px] md:h-[400px] lg:h-[450px]">
      {/* Background Image */}
      <div className="flex justify-center items-center w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={assets.Studio}
            alt="Banner Background"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-3 md:px-6 lg:px-10 py-10 mx-auto max-w-7xl">
        {/* About Us Label */}
        <SectionHeader title="about us" />
        {/* Heading */}
        <Heading title="Meet the Studio " />
        <p className="font-medium text-base sm:text-xl md:text-xl mb-8 ">
          Tarmac is a founder-led design studio based in Nigeria, helping
          startups across the globe launch with clarity, design, and momentum.
          <br />
          Led by a Team of Strategist, we bring strategy, aesthetics, and
          no-code together to move fast — and build what matters.
        </p>{" "}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
    `        <ContactButton1 to="/services">View Services</ContactButton1>
            <ContactButton2 to="/about-us" target="_self">Read More</ContactButton2>
`        </div>

      </div>
    </section>
  );
};

export default ContactStudio;
