import React from "react";
import { assets } from "../assets/homeAssets";
import Heading from "../ui/Heading";
import SectionHeader from "../ui/SectionHeader";
import ButtonLink1 from "../ui/ButtonLink1";

const Studio: React.FC = () => {
  return (
    <section className="relative bg-black w-full h-[450px] md:h-[400px] lg:h-[450px]">
      {/* Background Image */}
      <div className="flex justify-center items-center w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={assets.Studio}
            alt="Banner Background"
            className="absolute w-full h-full object-contain"
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
        <div className="flex justify-center">
          <ButtonLink1 target="_self" to="/services">
            View Services
          </ButtonLink1>
        </div>
      </div>
    </section>
  );
};

export default Studio;
