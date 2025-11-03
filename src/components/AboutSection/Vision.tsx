import React from "react";
import { aboutAssets } from "../../assets/aboutAssets";

const Vision: React.FC = () => {
  return (
    <section
      className="w-full py-5 md:py-0 px-0 sm:px-0 md:px-0 pb-0 relative"
      style={{
        background: `
          radial-gradient(50% 70% at 50% 20%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%),
          black
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        <div className="px-6 sm:px-8 md:px-10 py-5 order-1 md:order-2">
          <h2 className="max-w-100 main-text font-medium text-5xl md:text-6xl lg:text-8xl leading-tight ">
            Our <br /> Vision
          </h2>

          <p className="mt-6 sub-text leading-relaxed text-xl text-left max-w-150">
            To be the creative launchpad where bold ideas become impactful
            digital experiences.
          </p>
        </div>

        {/* Left Column (Astronaut Image) – comes second on mobile */}
        <div className="w-full order-2 md:order-1">
          <img
            src={aboutAssets.Astronaut2}
            alt="Astronaut"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
