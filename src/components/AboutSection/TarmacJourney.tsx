import React from "react";
import { aboutAssets } from "../../assets/aboutAssets";

const TarmacJourney: React.FC = () => {
  return (
    <section className="relative w-full tarmac-journey font-medium sub-text py-20 px-4 sm:px-6 md:px-8">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="cyan-text uppercase text-sm font-semibold tracking-wider">
            Tarmac Digital Studio
          </p>
          <h2 className="text-4xl md:text-5xl main-text font-medium mt-3 leading-snug">
            From Vision to Reality — The Tarmac Journey
          </h2>

          <p className="mt-6 leading-relaxed text-xl">
            Tarmac was born out of one frustration — seeing great ideas fail
            because founders couldn’t find the right tech team. We saw startups
            struggle with unreliable freelancers, misaligned design and
            development, and endless delays.
          </p>

          <p className="mt-4 leading-relaxed">
            So, we built Tarmac to be different. <br />A place where:
          </p>

          <ul className="list-disc list-inside mt-4 space-y-2 sub-text">
            <li>Ideas are understood deeply before they’re built.</li>
            <li>
              Design and development work in sync (no lost communication).
            </li>
            <li>Projects move fast without sacrificing quality.</li>
          </ul>

          <p className="mt-4 sub-text leading-relaxed">
            Today, we help founders, startups, and businesses bring their ideas
            to life — faster, smarter, and with zero guesswork.
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
