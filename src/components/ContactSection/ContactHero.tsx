import React from "react";
import { assets } from "../../assets/homeAssets";
import ButtonLink2 from "../../ui/ButtonLink2";
import ButtonLink1 from "../../ui/ButtonLink1";
import { homeSocials, services } from "../../lib/HomeLib";
import FixedService from "../../utils/FixedService";
import AnimatedText from "../../utils/AnimatedText";

const ContactHero: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-between text-center text-white"
      style={{
        backgroundImage: `url(${assets.Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content */}
      <div className="relative z-20 max-w-6xl px-4 sm:px-6 md:px-10 flex-grow flex flex-col justify-center">
        {services.map((service, index) => (
          <FixedService key={index} {...service} />
        ))}

        {/* Small Label */}
        <p className="cyan-text text-sm font-semibold tracking-wide mb-4">
          TARMAC DIGITAL STUDIO
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl main-text font-medium leading-tight  xl:mb-6 lg:mb-0 sm:mb-0 mb-0">
          Launch your <AnimatedText /> fast with bold design and functional Code{" "}
        </h1>

        {/* Subtext */}
        <p className="sub-text md:text-xl text-lg md:mb-8 sm:mb-6 mb-4 md:mt-6 sm:mt-4 mt-2">
          We help founders transform ideas into beautiful, functional products —
          fast. <br />
          From branding to strategy to functional development, all under one
          roof.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonLink1 to="/contact-us#contact">
            Book a strategy call
          </ButtonLink1>

          <ButtonLink2 to="/contact-us#contact">See our works</ButtonLink2>
        </div>
      </div>
      {/* Socials at Bottom */}
      <div className="relative z-20 flex justify-center pb-8 sm:pb-10 md:pb-14 flex-shrink-0">
        <div className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10">
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

export default ContactHero;
