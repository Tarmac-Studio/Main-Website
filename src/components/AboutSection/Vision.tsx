import React from "react";
import { aboutAssets } from "../../assets/aboutAssets";
import Stars from "../../assets/images/About/Stars.png";

const Vision: React.FC = () => {
  return (
    <section
      className="w-full py-5 px-0 sm:px-0 md:px-0"
      style={{
        background: `
          radial-gradient(50% 70% at 50% 20%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%),
          black
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >

      {/* Stars Background */}
      <img
        src={Stars}
        alt="Stars Background"
        className="absolute inset-0 w-full h-[45%] object-cover opacity-40 pointer-events-none scale-80"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div className="w-full">
          <img
            src={aboutAssets.Astronaut2}
            alt="Astronaut"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Column */}
        <div className="max-w-2xl ml-10 px-4 sm:px-0 md:px-0">
          <h2 className="main-text font-medium text-4xl md:text-6xl lg:text-8xl leading-tight">
            Our <br /> Vision
          </h2>

          <p className="mt-6 sub-text leading-relaxed text-xl">
            To be the creative launchpad where bold ideas become impactful
            digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
