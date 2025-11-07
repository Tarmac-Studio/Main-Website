import React from "react";
import { aboutAssets } from "../../assets/aboutAssets";

const TarmacJourney: React.FC = () => {
  return (
    <section
      className="relative w-full font-medium"
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
      <div className="relative z-10 max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center sub-text">
          {/* Left Content */}
          <div className="py-8 sm:py-12 md:py-16 lg:py-20 order-1 px-4 ">
            <p className="uppercase text-xs sm:text-sm font-medium tracking-wider mb-4 sm:mb-6 cyan-text">
              Tarmac Digital Studio
            </p>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 main-text">
              From Vision to Reality:
              <br className="hidden sm:block" />
              <span className="block sm:inline"> The Tarmac Journey</span>
            </h2>

            {/* First Paragraph */}
            <p className="text-base lg:text-lg leading-relaxed ">
              Tarmac was born out of one frustration; seeing great ideas fail
              because founders couldn’t find the right tech team, and some had
              to hire 3 to 4 different teams to bring their ideas to life. We
              saw startups struggle with unreliable teams, misaligned design and
              faulty code, and endless delays.
            </p>

            {/* Second Paragraph */}
            <div className="mb-3">
              <p className="text-base lg:text-lg leading-relaxed mb-4">
                So, we built Tarmac to be different.
                <br />A place where:
              </p>

              {/* List */}
              <ul className="list-disc list-inside space-y-2 text-base lg:text-lg pl-2 sm:pl-4 leading-relaxed">
                <li>Ideas are understood deeply before they're built.</li>
                <li>
                  Design and development work in sync (no loss in
                  communication).
                </li>
                <li>Projects move fast without sacrificing quality.</li>
              </ul>
            </div>

            {/* Closing Paragraph */}
            <p className="text-base lg:text-lg leading-relaxed">
              Now, we help founders, startups, and businesses bring their ideas
              to life faster, smarter, and reach the right audience.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex order-2 lg:order-2 w-full">
            <div className="w-full relative overflow-hidden ">
              <img
                src={aboutAssets.deskJourney}
                alt="Tarmac Digital Studio workspace"
                className="w-full h-full min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarmacJourney;
