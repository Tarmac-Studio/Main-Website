import React from "react";
import { aboutAssets } from "../../assets/aboutAssets";

const TarmacJourney: React.FC = () => {
  return (
    <section
      className="relative w-full font-medium sub-text "
      style={{
        background: `
          radial-gradient(
            60% 80% at 50% 40%,
            rgba(0, 0, 0, 0.9) 20%,
            rgba(0, 255, 255, 0.12) 100% 
          ),
          #002b2f                    
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="py-12 sm:py-16 md:py-20 lg:py-24  px-4 sm:px-6 lg:px-8">
            {/* Intro Tag */}
            <p className="cyan-text uppercase text-xs sm:text-sm font-semibold tracking-wider">
              Tarmac Digital Studio
            </p>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl main-text font-medium leading-tight">
              From Vision to Reality:
              <br /> The Tarmac Journey
            </h2>

            {/* First Paragraph */}
            <p className="text-base sm:text-lg leading-relaxed">
              Tarmac was born out of one frustration: seeing great ideas fail
              because founders couldn't find the right tech team, and some had
              to hire 3 to 4 different teams to bring their ideas to life. We
              saw startups struggle with unreliable teams, misaligned design and
              faulty code, and endless delays.
            </p>

            {/* Second Paragraph */}
            <div>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                So, we built Tarmac to be different.
                <br />
                <span className="font-semibold">A place where:</span>
              </p>

              {/* List */}
              <ul className="list-disc list-inside mt-4 space-y-2 sub-text">
                <li>Ideas are understood deeply before they’re built.</li>
                <li>
                  Design and development work in sync (no loss in
                  communication).
                </li>
                <li>Projects move fast without sacrificing quality.</li>
              </ul>
            </div>

            {/* Closing Paragraph */}
            <p className="text-base sm:text-lg leading-relaxed">
              Now, we help founders, startups, and businesses bring their ideas
              to life faster, smarter, and reach the right audience.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex py-0 px-0">
            <img
              src={aboutAssets.deskJourney}
              alt="Tarmac Digital Studio workspace"
              className="w-full  h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarmacJourney;
