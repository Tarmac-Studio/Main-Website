import React from "react";
import { aboutAssets } from "../../assets/aboutAssets";

const Mission1: React.FC = () => {
  return (
    <section
      className="relative w-full py-5 md:py-0 px-0 sm:px-0 md:px-0 pb-0"
      style={{
        background: `
          radial-gradient(50% 70% at 50% 20%, rgba(0, 255, 255, 0.12) 20%, rgba(0, 255, 255, 0) 100%),
          black
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        {/* Left Column */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-10 py-5">
          <h2 className="main-text font-medium text-5xl md:text-6xl lg:text-8xl leading-tight ">
            Our <br /> Mission
          </h2>

          <p className="mt-6 sub-text leading-relaxed text-xl text-left max-w-150">
            To help founders and businesses go from idea to launch with
            strategy-first branding, standout design, and streamlined code
            development; fast, functional, and built for growth.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full">
          <img
            src={aboutAssets.Astronaut1}
            alt="Astronaut"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission1;
