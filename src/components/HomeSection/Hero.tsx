import React from "react";
import { assets } from "../../assets/homeAssets";
import ButtonLink2 from "../../ui/ButtonLink2";
import ButtonLink1 from "../../ui/ButtonLink1";
import { homeSocials } from "../../lib/HomeLib";
import AnimatedText from "../../utils/AnimatedText";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-between text-center "
      style={{
        backgroundImage: `url(${assets.Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content */}
      <div className="relative z-20 max-w-6xl px-4 sm:px-6 md:px-10 flex-grow flex flex-col justify-center">
        {/* Small Label */}
        <p className="cyan-text text-sm font-semibold tracking-wide mb-4">
          TARMAC DIGITAL STUDIO
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl main-text font-medium leading-tight xl:mb-6 mb-0 text-center">
          Launch your <AnimatedText /> fast with {/* bold */}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-20 main-text inline-block">
              bold design
            </span>
            <img
              src={assets.product}
              alt="Underline for functional"
              className="hidden sm:flex absolute left-5 bottom-0 w-full h-auto max-h-[1.8em] sm:max-h-[1.9em] md:max-h-[1.2em] object-contain z-10 pointer-events-none sm:translate-y-[1.7em] md:translate-y-[0.9em]"
            />
          </span>{" "}
          and{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-20 main-text inline-block">
              functional code
            </span>
            <img
              src={assets.development}
              alt="Underline for functional"
              className="hidden sm:flex absolute left-5 bottom-0 w-full h-auto max-h-[1.8em] sm:max-h-[1.9em] md:max-h-[1.2em] object-contain z-10 pointer-events-none sm:translate-y-[1.7em] md:translate-y-[0.9em]"
            />
          </span>{" "}
        </h1>

        {/* Subtext */}
        <p className="max-w-3xl mx-auto sub-text md:text-xl sm:text-lg text-base md:mb-8 sm:mb-6 mb-4 xl:mt-8 md:mt-12 sm:mt-12 mt-2">
          We help founders transform ideas into beautiful and functional
          products fast.
          <br /> We offer you branding, strategy, and functional development,
          all under one roof.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonLink1
            target="blank"
            to="https://calendly.com/tarmacdigitalstudio"
          >
            Book a strategy call
          </ButtonLink1>

          <ButtonLink2 target="_self" to="/portfolio">
            See our works
          </ButtonLink2>
        </div>
      </div>
      {/* Socials at Bottom */}
      <div className="relative z-20 flex justify-center pb-8 sm:pb-10 md:pb-14 flex-shrink-0">
        <div className="flex gap-x-6 md:gap-x-8 lg:gap-x-10">
          {homeSocials.map(({ icon, link, alt }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <img
                src={icon}
                alt={alt}
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
