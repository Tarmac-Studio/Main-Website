import React from "react";
import { aboutAssets } from "../../assets/aboutAssets";

const TarmacJourney: React.FC = () => {
  return (
    <section
      className="relative w-full font-medium sub-text py-20 px-4 sm:px-6 md:px-8"
      style={{
        background: `
          radial-gradient(50% 70% at 50% 20%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%),
          black
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="cyan-text uppercase text-sm font-semibold tracking-wider">
            Tarmac Digital Studio
          </p>
          <h2 className="text-4xl md:text-5xl main-text font-medium mt-6 leading-snug">
            From Vision to Reality The Tarmac Journey
          </h2>

          <p className="mt-6 leading-relaxed">
            Tarmac was born out of one frustration; seeing great ideas fail
            because founders couldn’t find the right tech team, and some had to
            hire 3 to 4 different teams to bring their ideas to life. We saw
            startups struggle with unreliable teams, misaligned design and
            faulty code, and endless delays.
          </p>

          <p className="mt-4 leading-relaxed">
            So, we built Tarmac to be different. <br />A place where:
          </p>

          <ul className="list-disc list-inside mt-4 space-y-2 sub-text">
            <li>Ideas are understood deeply before they’re built.</li>
            <li>
              Design and development work in sync (no loss in communication).
            </li>
            <li>Projects move fast without sacrificing quality.</li>
          </ul>

          <p className="mt-4 sub-text leading-relaxed">
            Now, we help founders, startups, and businesses bring their ideas to
            life faster, smarter, and reach the right audience.
          </p>
        </div>

        {/* Right Image / Logo */}
        <div className="flex justify-center md:justify-end">
          <img
            src={aboutAssets.deskJourney}
            alt="Tarmac Digital Studio"
            className="w-72 md:w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TarmacJourney;
